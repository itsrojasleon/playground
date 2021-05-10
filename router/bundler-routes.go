package router

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rojasleon/playground/bundler"
)

func InitializeBundlerRoutes(router *gin.Engine) {
	router.POST("/api/bundler", createBundle)
}

type request struct {
	RawCode string `json:"rawCode"`
}

func createBundle(c *gin.Context) {
	var r request
	c.BindJSON(&r)

	if r.RawCode == "" {
		c.Error(errors.New("raw-code is empty"))
		return
	}

	bundledCode := bundler.Bundler(r.RawCode)

	c.JSON(http.StatusOK, gin.H{"code": bundledCode})
}
