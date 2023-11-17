package entity

import "gorm.io/gorm"

type Member struct {
	gorm.Model
	Username string
	Email string
	Password string
	Status string
	Payment string
}