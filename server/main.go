package main

import (
	"youth_activity/database"
	"youth_activity/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	// Kết nối và migrate cơ sở dữ liệu
	database.Connect()
	database.Migrate()

	r := gin.Default()

	routes.SetupRouter(r)
	r.Run(":8080")
	// http://localhost:8080/api/register
}
