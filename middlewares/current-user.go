package middlewares

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	cookiesession "github.com/rojasleon/playground/cookie-session"
	"github.com/rojasleon/playground/token"
)

func CurrentUser() gin.HandlerFunc {
	return func(c *gin.Context) {
		payload, _ := cookiesession.Retrieve(c, "jwt")

		_, err := token.VerifyToken(payload.(string))

		if err != nil {
			fmt.Println("not valid...!!!", err)
			c.JSON(http.StatusUnauthorized, c.Errors)
			return
		}

		c.Next()
	}
}
