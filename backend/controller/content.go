package controller

import (
	"net/http"

	"github.com/B6406325/test/entity"
	"github.com/gin-gonic/gin"
)

func ListCategories(c *gin.Context) {
	var categories []entity.Categories
	if err := entity.DB().Raw("SELECT * FROM Categories").Scan(&categories).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": categories})
}

func CreateMovie(c *gin.Context) {
	var movie entity.Content
	var categories entity.Categories

	// bind เข้าตัวแปร user
	if err := c.ShouldBindJSON(&movie); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ค้นหา gender ด้วย id
	if tx := entity.DB().Where("id = ?", movie.Categories).First(&categories); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "categories not found"})
		return
	}

	// สร้าง User
	m := entity.Content{
		Categories:  categories,
		MovieName:   movie.MovieName,
		Duration:    movie.Duration,
		Description: movie.Description,
		Director:    movie.Director,
		Cast:        movie.Cast,
		ImageUrl:    movie.ImageUrl,
		VideoUrl:    movie.VideoUrl,
	}

	// บันทึก
	if err := entity.DB().Create(&m).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": m})
}

func GetMovie(c *gin.Context) {
	var movie entity.Content
	id := c.Param("id")
	if err := entity.DB().Preload("Categories").Raw("SELECT * FROM Contents WHERE id = ?", id).Find(&movie).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": movie})
}

func DeleteMovie(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM Contents WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "movie not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

func UpdateMovie(c *gin.Context) {
	var movie entity.Content
	var result entity.Content

	if err := c.ShouldBindJSON(&movie); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา user ด้วย id
	if tx := entity.DB().Where("id = ?", movie.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "movie not found"})
		return
	}

	if err := entity.DB().Save(&movie).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": movie})
}

func ListMovie(c *gin.Context) {
	var movie []entity.Content
	if err := entity.DB().Preload("Categories").Raw("SELECT * FROM Contents").Scan(&movie).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": movie})
}
