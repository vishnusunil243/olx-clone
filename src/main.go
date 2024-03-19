package main

import (
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	controllers "main.go/backend/Controllers"
	models "main.go/backend/database_tables"
	middleware "main.go/backend/middlewares"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

var db *gorm.DB
var err error

func init() {

	//establishing connection to postgres
	err = godotenv.Load()
	if err != nil {
		log.Fatal("error loading .env file")
	}
	dsn := os.Getenv("DATABASE_KEY")
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		panic("error connecting to database")
	}
	db.AutoMigrate(models.User{})
}

func main() {
	router := gin.Default()
	router.Use(middleware.CorsMiddleware())
	router.POST("/signup", controllers.Signup(db))
	router.Run(":8080")

}
