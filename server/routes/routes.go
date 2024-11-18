package routes

import (
	"youth_activity/controllers"
	"youth_activity/database"
	"youth_activity/middlewares"
	"youth_activity/models"
	"youth_activity/repositories"
	"youth_activity/usecases"

	"github.com/gin-gonic/gin"
)

func SetupRouter(r *gin.Engine) {
	db := database.GetDB()
	repo := repositories.NewActivityRepository(db)
	service := usecases.NewActivityUsecase(repo)
	controller := controllers.NewActivityController(service)

	userRepo := repositories.NewUserRepository(db)
	userUsecase := usecases.NewUserUsecase(userRepo)
	userController := controllers.NewUserController(userUsecase)
	authUsecase := usecases.NewAuthUsecase(userRepo, "this-is-secret")
	authController := controllers.NewAuthController(authUsecase)
	router := r.Group("/api")

	auth := router.Group("/auth")
	{
		auth.POST("/login", authController.Login)
		auth.POST("/register", authController.Register)
		auth.GET("/validate", authController.ValidateToken)
		auth.POST("/logout", authController.Logout)
		auth.GET("/check", authController.CheckAuth)
	}
	author := router.Group("/auth")
	author.Use(middlewares.AuthMiddleware(authUsecase))
	{
		author.GET("/role", authController.GetRole)
		author.GET("/current-user", authController.GetCurrentUser)
	}

	user := router.Group("/users")
	user.Use(middlewares.AuthMiddleware(authUsecase))
	{
		user.GET("/:id", userController.GetUserById)
		user.GET("", userController.GetAllUsers)
		user.POST("", userController.CreateUser)
		user.PUT("", userController.UpdateUser)
		user.DELETE("/:id", userController.DeleteUser)
	}

	activity := router.Group("/activities")
	activity.Use(middlewares.AuthMiddleware(authUsecase))
	{
		activity.GET("", controller.GetAllActivities)
		activity.GET("/:id", controller.GetActivityByID)
		activity.POST("", controller.CreateActivity)
		activity.PUT("/:id", controller.UpdateActivity)
		activity.DELETE("/:id", controller.DeleteActivity)
		activity.POST("/:id/attend", controller.AttendActivity)
	}

	authUsecase.Register(&models.User{
		Id: 99,
		Email: "manager@gmail.com",
		Username: "manager",
		Password: "123456",
		Role: "manager",
	})

	
	authUsecase.Register(&models.User{
		Id: 100,
		Email: "student@gmail.com",
		Username: "student",
		Password: "123456",
		Role: "student",
	})
}
