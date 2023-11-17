package controller

import (
	"fmt"
	"net/http"

	"github.com/B6406325/test/entity"
	"github.com/gin-gonic/gin"
)

func CreateMember(c *gin.Context) {
	var member entity.Member
	if err := c.ShouldBindJSON(&member); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := entity.DB().Create(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": member})
}

func GetMember(c *gin.Context) {
	email := c.Param("email")
	password := c.Param("password")
	var user entity.Member
	fmt.Println(password)
	err := entity.DB().Raw("SELECT email, password, id FROM members WHERE email = ?", email).Scan(&user).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	} else {
		if email != user.Email {
			fmt.Println(email)
			fmt.Println(user.Email)
			c.JSON(http.StatusBadRequest, gin.H{"error": "Email Not found"})
			return
		} else if password != user.Password {
			c.JSON(http.StatusBadRequest, gin.H{"error": "invalid password"})
			fmt.Println(password)
			fmt.Println(user.Password)
			return
		} else {
			if user.Status == "admin" {
				fmt.Println(email)
				fmt.Println(user.Email)
				c.JSON(http.StatusBadRequest, gin.H{"error": "Status admin"})
				return
			} else {
				c.JSON(http.StatusOK, gin.H{"data": user})
				return
			}
		}
	}
}
