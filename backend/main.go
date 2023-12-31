package main

import (
	"github.com/B6406325/test/controller"
	"github.com/B6406325/test/entity"
	"github.com/gin-gonic/gin"
)

const PORT = "8000"

func main() {
	entity.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())
	r.POST("/member", controller.CreateMember)
	r.GET("/member/:email/:password", controller.GetMember)
	r.GET("/users", controller.GetUserByStatus)
	r.GET("/user/:id", controller.GetUserById)
	r.PATCH("/users", controller.UpdateUser)
	r.DELETE("/users/:id", controller.DeleteUser)
	r.GET("/movie", controller.ListMovie)
	r.GET("/movie/:id", controller.GetMovie)
	r.DELETE("movie/:id", controller.DeleteMovie)
	r.PATCH("movie", controller.UpdateMovie)
	r.POST("/movie", controller.CreateMovie)
	r.GET("/categories", controller.ListCategories)
	r.Run("localhost: " + PORT)
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}
