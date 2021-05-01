package token

type Maker interface {
	CreateToken(id int, username string) (string, error)
	VerifyToken(token string) (*Payload, error)
}
