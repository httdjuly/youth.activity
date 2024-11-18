package usecases

import (
	"errors"
	"time"
	"youth_activity/models"
	"youth_activity/repositories"

	"github.com/golang-jwt/jwt"
	"golang.org/x/crypto/bcrypt"
)

type AuthUsecase interface {
	Login(email, password string) (*models.User, string, error)
	Register(user *models.User) error
	ValidateToken(token string) (*models.User, error)
}

type authUsecaseImpl struct {
	userRepo repositories.UserRepository
	secret   string
}

func NewAuthUsecase(userRepo repositories.UserRepository, secret string) AuthUsecase {
	return &authUsecaseImpl{
		userRepo: userRepo,
		secret:   secret,
	}
}

// Login thực hiện xác thực user và tạo JWT
func (uc *authUsecaseImpl) Login(email, password string) (*models.User, string, error) {
	user, err := uc.userRepo.FindByEmail(email)
	if err != nil {
		return nil, "", errors.New("invalid email or password")
	}

	// Kiểm tra mật khẩu
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		return nil, "", errors.New("invalid email or password")
	}

	// Tạo JWT
	token, err := uc.generateToken(user)
	if err != nil {
		return nil, "", err
	}

	return user, token, nil
}

func (uc *authUsecaseImpl) ValidateToken(tokenString string) (*models.User, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("unexpected signing method")
		}
		return []byte(uc.secret), nil
	})
	if err != nil || !token.Valid {
		return nil, errors.New("invalid token")
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		return nil, errors.New("invalid token claims")
	}

	userID, ok := claims["id"].(float64)
	if !ok {
		return nil, errors.New("invalid token claims")
	}

	user, err := uc.userRepo.FindById(int(userID))
	if err != nil {
		return nil, err
	}

	return user, nil
}

// Register đăng ký user mới
func (uc *authUsecaseImpl) Register(user *models.User) error {
	// Hash password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	user.Password = string(hashedPassword)

	// Lưu user vào database
	return uc.userRepo.Create(user)
}

// generateToken tạo JWT
func (uc *authUsecaseImpl) generateToken(user *models.User) (string, error) {
	claims := jwt.MapClaims{
		"id":    user.Id,
		"email": user.Email,
		"exp":   time.Now().Add(time.Hour * 24).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString([]byte(uc.secret))
}
