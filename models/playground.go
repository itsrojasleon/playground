package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Cell struct {
	Id       string `bson:"id" json:"id"`
	Language string `bson:"language" json:"language"`
	Content  string `bson:"content" json:"content"`
}

type Playground struct {
	ID        primitive.ObjectID `bson:"_id" json:"_id"`
	CreatedAt time.Time          `bson:"created_at" json:"createdAt"`
	UpdatedAt time.Time          `bson:"updated_at" json:"updatedAt"`
	Cells     []Cell             `bson:"cells" json:"cells"`
}
