package router

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rojasleon/playground/bundler"
)

func InitializeBundlerRoutes(router *gin.Engine) {
	router.POST("/api/bundler", createBundle)
	// router.GET("/api/bundler", func(c *gin.Context) {
	// 	c.JSON(http.StatusOK, gin.H{"status": "OK"})
	// })
}

type postRequest struct {
	RawCode string `json:"rawCode"`
}

func createBundle(c *gin.Context) {
	var pr postRequest

	c.BindJSON(&pr)

	fmt.Println("code", pr.RawCode)

	if pr.RawCode == "" {
		c.Error(errors.New("raw-code is empty"))
		return
	}

	bundledCode := bundler.Bundler(pr.RawCode)

	c.JSON(http.StatusOK, gin.H{"code": bundledCode})
}
