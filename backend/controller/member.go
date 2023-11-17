package controller

import (
	"net/http"

	"github.com/B6406325/test/entity"
	"github.com/gin-gonic/gin"
)

func CreateMember(c *gin.Context){
	var member entity.Member
	if err := c.ShouldBindJSON(&member); err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := entity.DB().Create(&member).Error; err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": member})
}