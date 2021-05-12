package db

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client
var Ctx, _ = context.WithTimeout(context.Background(), 10*time.Second)
var err error

func Connect() {
	Client, err = mongo.NewClient(options.Client().ApplyURI("mongodb://127.0.0.1:27017"))
	if err != nil {
		log.Fatal(err)
	}

	err = Client.Connect(Ctx)
	if err != nil {
		log.Fatal(err)
	}
}

func Disconnect() {
	Client.Disconnect(Ctx)
}
