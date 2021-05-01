package cookiesession

import (
	"errors"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

var (
	ErrMissingKeyAndValue = errors.New("key and value should not be an empty string")
	ErrMissingKey         = errors.New("key should not be an empty string")
)

func Save(c *gin.Context, key, value string) error {
	if key == "" || value == "" {
		return ErrMissingKeyAndValue
	}

	session := sessions.Default(c)
	session.Set(key, value)
	session.Save()

	return nil
}

func Retrieve(c *gin.Context, key string) (interface{}, error) {
	if key == "" {
		return "", ErrMissingKey
	}

	session := sessions.Default(c)

	value := session.Get(key)

	return value, nil
}
