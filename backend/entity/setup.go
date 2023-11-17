package entity

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("Database.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	database.AutoMigrate(
		&Member{},
	)
	db = database

	admin01 := Member{
		Username: "admin01",
		Email:    "admin@gmail.com",
		Password: "password",
		Status:   "admin",
	}
	db.Model(&Member{}).Create(&admin01)
}
