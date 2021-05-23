package db

import (
	"context"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client

// var Ctx, _ = context.WithTimeout(context.Background(), 10*time.Second)
var Ctx = context.Background()
var err error

func Connect() {
	Client, err = mongo.NewClient(options.Client().ApplyURI(os.Getenv("MONGO_URI")))
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
