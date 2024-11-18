package usecases

import (
	"errors"
	"youth_activity/models"
	"youth_activity/repositories"

	"gorm.io/gorm"
)

type UserUsecase interface {
	GetUserById(id int) (*models.User, error)
	GetAllUsers() ([]*models.User, error)
	CreateUser(user *models.User) error
	UpdateUser(user *models.User) error
	DeleteUser(id int) error
}

type userUsecaseImpl struct {
	userRepo repositories.UserRepository
}

// NewUserUsecase khởi tạo Usecase cho User
func NewUserUsecase(userRepo repositories.UserRepository) UserUsecase {
	return &userUsecaseImpl{
		userRepo: userRepo,
	}
}

// GetUserById lấy thông tin user theo ID
func (u *userUsecaseImpl) GetUserById(id int) (*models.User, error) {
	user, err := u.userRepo.FindById(id)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, errors.New("user not found")
		}
		return nil, err
	}
	return user, nil
}

// GetAllUsers lấy danh sách tất cả users
func (u *userUsecaseImpl) GetAllUsers() ([]*models.User, error) {
	users, err := u.userRepo.FindAll()
	if err != nil {
		return nil, err
	}
	return users, nil
}

// CreateUser tạo mới một user
func (u *userUsecaseImpl) CreateUser(user *models.User) error {
	// Business logic: kiểm tra dữ liệu đầu vào
	if user.Email == "" || user.Password == "" {
		return errors.New("email and password are required")
	}
	return u.userRepo.Create(user)
}

// UpdateUser cập nhật thông tin user
func (u *userUsecaseImpl) UpdateUser(user *models.User) error {
	// Business logic: đảm bảo ID hợp lệ
	if user.Id == 0 {
		return errors.New("user ID is required")
	}

	// Cập nhật thông tin
	return u.userRepo.Update(user)
}

// DeleteUser xóa user theo ID
func (u *userUsecaseImpl) DeleteUser(id int) error {
	// Business logic: đảm bảo ID hợp lệ
	if id == 0 {
		return errors.New("user ID is required")
	}

	return u.userRepo.Delete(id)
}
