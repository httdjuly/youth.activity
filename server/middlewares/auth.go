package middlewares

import (
	"net/http"
	"youth_activity/usecases"

	"github.com/gin-gonic/gin"
)

func AuthMiddleware(authUsecase usecases.AuthUsecase) gin.HandlerFunc {
	return func(c *gin.Context) {
		// Lấy token từ cookie
		token, err := c.Cookie("token")
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "missing or invalid token"})
			c.Abort()
			return
		}

		// Xác thực token
		user, err := authUsecase.ValidateToken(token)
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
			c.Abort()
			return
		}

		// Lưu thông tin user vào context
		c.Set("user", user)

		// Tiếp tục xử lý request
		c.Next()
	}
}
