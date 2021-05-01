package router

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"github.com/rojasleon/playground/config"
	cookiesession "github.com/rojasleon/playground/cookie-session"
	"github.com/rojasleon/playground/token"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/github"
)

type JSONUser struct {
	Name  string `json:"name"`
	ID    int    `json:"id"`
	Login string `json:"login"`
	jwt.StandardClaims
}

var conf = &oauth2.Config{
	RedirectURL:  "http://localhost:3000/callback",
	ClientID:     config.SetupConfig().CLIENT_ID,
	ClientSecret: config.SetupConfig().CLIENT_SECRET,
	Scopes:       []string{"user:email"},
	Endpoint:     github.Endpoint,
}

func InitializeUserRoutes(router *gin.Engine) {
	fmt.Println(gin.Mode())
	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"hey": os.Getenv("CLIENT_SECRET")})
	})
	router.GET("/callback", callback)
	users := router.Group("/api/users")
	{
		users.GET("/login", login)
	}
}

func login(c *gin.Context) {
	url := conf.AuthCodeURL("state", oauth2.AccessTypeOffline)

	c.Redirect(http.StatusPermanentRedirect, url)
	c.Abort()
}

func callback(c *gin.Context) {
	ctx := context.Background()
	code := c.Query("code")

	if code == "" {
		c.Error(errors.New("code is empty"))
		return
	}

	exchangeToken, err := conf.Exchange(ctx, code)

	if err != nil {
		c.Error(errors.New("mmmm"))
		return
	}

	client := conf.Client(ctx, exchangeToken)

	res, err := client.Get("https://api.github.com/user")

	if err != nil {
		c.Error(err)
		return
	}

	body, err := ioutil.ReadAll(res.Body)

	defer res.Body.Close()

	if err != nil {
		c.Error(err)
		return
	}

	user := JSONUser{}
	err = json.Unmarshal(body, &user)

	if err != nil {
		c.Error(err)
		return
	}

	token, err := token.CreateToken(user.ID, user.Login)

	if err != nil {
		c.Error(err)
		return
	}

	// store jwt in session
	err = cookiesession.Save(c, "jwt", token)

	if err != nil {
		c.Error(err)
		return
	}

	c.JSON(200, gin.H{"user": user})
}
