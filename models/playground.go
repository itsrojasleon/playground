package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Cell struct {
	Id       string `bson:"id"`
	Language string `bson:"language"`
	Content  string `bson:"content"`
}

type Playground struct {
	ID        primitive.ObjectID `bson:"_id"`
	CreatedAt time.Time          `bson:"created_at"`
	UpdatedAt time.Time          `bson:"updated_at"`
	Cells     []Cell             `bson:"cells"`
}
