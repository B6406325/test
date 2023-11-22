package entity

import (
	"time"

	"gorm.io/gorm"
)

type Content struct {
	gorm.Model
	MovieName string
	Duration time.Time
	Description string
	Director string
	Cast string
	ImageUrl string `gorm:"type:longtext"`
	VideoUrl string 

	CategoriesID *uint
	Categories   Categories `gorm:"references:id"`
}

type Categories struct{
	gorm.Model
	CateName string
	Content []Content `gorm:"foreignKey:CategoriesID"`
}