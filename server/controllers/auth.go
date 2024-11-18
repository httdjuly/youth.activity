package controllers

import (
	"net/http"
	"youth_activity/models"
	"youth_activity/usecases"

	"github.com/gin-gonic/gin"
)

type AuthController interface {
	Login(c *gin.Context)
	Register(c *gin.Context)
	ValidateToken(c *gin.Context)
	Logout(c *gin.Context)
	CheckAuth(c *gin.Context)
	GetRole(c *gin.Context)
}

type authControllerImpl struct {
	authUsecase usecases.AuthUsecase
}

func NewAuthController(authUsecase usecases.AuthUsecase) AuthController {
	return &authControllerImpl{
		authUsecase: authUsecase,
	}
}
func (ac *authControllerImpl) Login(c *gin.Context) {
	var loginData struct {
		Email    string `json:"email" binding:"required"`
		Password string `json:"password" binding:"required"`
	}

	if err := c.ShouldBindJSON(&loginData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user, token, err := ac.authUsecase.Login(loginData.Email, loginData.Password)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}

	// Set HttpOnly cookie
	c.SetCookie("token", token, 86400, "/", "", false, true)

	c.JSON(http.StatusOK, gin.H{
		"user": user,
	})
}


// Register xử lý yêu cầu đăng ký
func (ac *authControllerImpl) Register(c *gin.Context) {
	var newUser models.User
	if err := c.ShouldBindJSON(&newUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := ac.authUsecase.Register(&newUser); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "user registered successfully"})
}

// ValidateToken xử lý xác thực token
func (ac *authControllerImpl) ValidateToken(c *gin.Context) {
	token := c.GetHeader("Authorization")
	if token == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing token"})
		return
	}

	user, err := ac.authUsecase.ValidateToken(token)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, user)
}

func (ac *authControllerImpl) Logout(c *gin.Context) {
	// Xóa cookie
	c.SetCookie("token", "", -1, "/", "", false, true)
	c.JSON(http.StatusOK, gin.H{"message": "logged out successfully"})
}

func (ac *authControllerImpl) CheckAuth(c *gin.Context) {
	_, ok := c.Get("token")
	if !ok {
		c.JSON(http.StatusUnauthorized, nil)
	}

	c.JSON(http.StatusOK, nil)
}

func (ac *authControllerImpl) GetRole(c *gin.Context) {
	// Lấy thông tin user từ context
	user, ok := c.Get("user")
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}

	// Ép kiểu user về *models.User
	authenticatedUser, ok := user.(*models.User)
	if !ok {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "invalid user data"})
		return
	}

	// Trả về role của user
	c.JSON(http.StatusOK, gin.H{"role": authenticatedUser.Role})
}