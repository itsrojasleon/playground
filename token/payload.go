package token

import (
	"errors"
	"time"

	"github.com/dgrijalva/jwt-go"
)

var (
	ErrInvalidToken = errors.New("token is invalid")
)

type Payload struct {
	ID       int       `json:"id"`
	Username string    `json:"username"`
	IssuedAt time.Time `json:"issued_at"`
	jwt.StandardClaims
}

func NewPayload(id int, username string) *Payload {
	payload := &Payload{
		ID:       id,
		Username: username,
		IssuedAt: time.Now(),
	}

	return payload
}
