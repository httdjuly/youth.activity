package database

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var db *gorm.DB

// Connect kết nối đến cơ sở dữ liệu
func Connect() {
	dsn := "host=localhost port=5432 dbname=youth_activity user=postgres password=123456 sslmode=prefer connect_timeout=10"
	var err error
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database")
	}
}

func GetDB() *gorm.DB {
	return db
}
