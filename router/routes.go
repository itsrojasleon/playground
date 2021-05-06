package router

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	"github.com/rojasleon/playground/middlewares"
)

func InitializeRouter() {
	router := gin.Default()
	store := cookie.NewStore([]byte("secret"))

	router.Use(sessions.Sessions("mysession", store))

	router.Use(middlewares.ErrorHandler())
	router.Use(middlewares.CurrentUser())

	InitializeUserRoutes(router)
	InitializeBundlerRoutes(router)

	router.Run(":3000")
}
