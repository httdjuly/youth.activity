package routes

import (
	"youth_activity/controllers"
	"youth_activity/database"
	"youth_activity/middlewares"
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
	}

	// public.POST("/register", controllers.RegisterHandler)
	// public.POST("/login", controllers.LoginHandler)
	// public.POST("/logout", controllers.Logout)

	// public.GET("/check-auth", func(c *gin.Context) {
	// 	if utils.CheckAuthToken(c) {
	// 		c.JSON(200, gin.H{"message": "Đã đăng nhập"})
	// 	} else {
	// 		c.JSON(400, gin.H{"message": "Chưa đăng nhập"})
	// 	}
	// })
	// public.GET("/get-role", controllers.HandleGetRole)
	// public.POST("/regist-activity", controllers.CreateActivity)
	// public.GET("/get-activities", controllers.GetActivitiesWithStatus)
	// public.GET("/activity/:id", controllers.GetActivityByID)
	// public.POST("/register-activity", controllers.RegisterActivity)
	// public.GET("/account", controllers.GetAllUsersHandler)
	// public.GET("/attendance/:id", controllers.GetUserListByActivityID)
}
