package config

import (
	"os"

	"github.com/gin-gonic/gin"
)

type Config struct {
	CLIENT_ID     string
	CLIENT_SECRET string
}

func SetupConfig() Config {
	var c = Config{}
	switch mode := gin.Mode(); mode {
	case "release":
		// we're in production mode
		// here our deployment provider will provide us a space to add our env variables
		c.CLIENT_ID = os.Getenv("CLIENT_ID")
		c.CLIENT_SECRET = os.Getenv("CLIENT_SECRET")
	case "debug":
		// we're in development mode
		// don't forget to create a dev.go file to retrieve dev config
		c = devConfig
	case "test":
		// we're in testing mode
		// don't forget to create a test.go file to retrieve testing config
		c = testingConfig
	}

	return c
}
