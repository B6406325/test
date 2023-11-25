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
		&Content{},
		&Categories{},
	)
	db = database

	admin01 := Member{
		Username: "admin01",
		Email:    "admin@gmail.com",
		Password: "password",
		Status:   "admin",
	}
	db.Model(&Member{}).Create(&admin01)

	movieDrama := Categories{
		CateName: "ดราม่า(Drama)",
	}
	db.Model(&Categories{}).Create(&movieDrama)
	movieAction := Categories{
		CateName: "แอ็คชัน(Action)",
	}
	db.Model(&Categories{}).Create(&movieAction)
	movieComedy := Categories{
		CateName: "คอมเมดี้(Comedy)",
	}
	db.Model(&Categories{}).Create(&movieComedy)
	movieHorror := Categories{
		CateName: "สยองขวัญ(Horror)",
	}
	db.Model(&Categories{}).Create(&movieHorror)
	movieScience := Categories{
		CateName: "วิทยาศาสตร์(Science)",
	}
	db.Model(&Categories{}).Create(&movieScience)
	movieHistorical := Categories{
		CateName: "ประวัติศาสตร์(Historical)",
	}
	db.Model(&Categories{}).Create(&movieHistorical)
	movieDocumentary := Categories{
		CateName: "เหมือนจริง (Documentary)",
	}
	db.Model(&Categories{}).Create(&movieDocumentary)
	movieFantasy := Categories{
		CateName: "แฟนตาซี (Fantasy):",
	}
	db.Model(&Categories{}).Create(&movieFantasy)
	movieRomance := Categories{
		CateName: "รัก(Romance)",
	}
	db.Model(&Categories{}).Create(&movieRomance)
	movieMystery := Categories{
		CateName: "ลึกลับ(Mystery)",
	}
	db.Model(&Categories{}).Create(&movieMystery)
}
