package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Bundle struct {
	ID        primitive.ObjectID `bson:"_id"`
	CreatedAt time.Time          `bson:"created_at"`
	UpdatedAt time.Time          `bson:"updated_at"`
	Code      string             `bson:"code"`
}

// func CreateBundle(code string) (*mongo.InsertOneResult, error) {
// 	d := db.Client.Database("bundles")

// 	fmt.Println("database", d)

// 	bundle := Bundle{Code: code}

// 	collection := d.Collection("bundle")

// 	b, err := collection.InsertOne(db.Ctx, bundle)

// 	if err != nil {
// 		return &mongo.InsertOneResult{}, err
// 	}

// 	return b, nil
// }
