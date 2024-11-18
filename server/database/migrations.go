package database

import (
	"youth_activity/models"
)

// Migrate thực hiện migrate cơ sở dữ liệu
func Migrate() {
	// Thực hiện migrate cho các model cần thiết
	db.AutoMigrate(&models.Activity{}, &models.User{})
}
