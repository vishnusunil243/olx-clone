package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	models "main.go/backend/database_tables"
)

func Signup(db *gorm.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		var user models.User
		if err := c.BindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		res := db.Create(&user)
		if res.Error != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "error adding user"})
			return
		}
		c.JSON(http.StatusCreated, gin.H{"message": "user added successfully"})
		c.Redirect(http.StatusSeeOther, "/")
	}
}
