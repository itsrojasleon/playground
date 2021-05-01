package middlewares

import (
	"github.com/gin-gonic/gin"
)

func ErrorHandler() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Next()

		// get out of here if there's no error
		err := c.Errors.Last()
		if err == nil {
			return
		}

		c.JSON(400, c.Errors)
	}
}
