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

func GetUserByStatus(c *gin.Context) {
	var user []entity.Member
	if err := entity.DB().Raw("SELECT * FROM members WHERE status = 'member'").Scan(&user).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": user})
}

func GetMember(c *gin.Context) {
	email := c.Param("email")
	password := c.Param("password")

	var user entity.Member
	fmt.Println(user.Status)
	err := entity.DB().Raw("SELECT email, password, status FROM members WHERE email = ?", email).Scan(&user).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	} else {
		if email != user.Email {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Email Not found"})
			return
		} else {
			if password != user.Password {
				c.JSON(http.StatusBadRequest, gin.H{"error": "invalid password"})
				return
			} else {
				if user.Status == "admin" {
					fmt.Println("admin")
					c.JSON(http.StatusOK, gin.H{"data": "Status admin"})
					return
				}
				c.JSON(http.StatusOK, gin.H{"data": user})
				return
			}
		}
	}
}


