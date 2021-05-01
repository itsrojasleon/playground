package main

import (
	"github.com/rojasleon/playground/router"
)

// type Podcast struct {
// 	ID     primitive.ObjectID `bson:"_id,omitempty"`
// 	Title  string             `bson:"title,omitempty"`
// 	Author string             `bson:"author,omitempty"`
// 	Tags   []string           `bson:"tags,omitempty"`
// }

// type Episode struct {
// 	ID          primitive.ObjectID `bson:"_id,omitempty"`
// 	Podcast     primitive.ObjectID `bson:"podcast,omitempty"`
// 	Title       string             `bson:"title,omitempty"`
// 	Description string             `bson:"description,omitempty"`
// 	Duration    int32              `bson:"duration,omitempty"`
// }

func main() {
	router.InitializeRouter()
	// client, err := mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:27017"))
	// if err != nil {
	// 	log.Fatal(err)
	// }

	// ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	// err = client.Connect(ctx)

	// if err != nil {
	// 	log.Fatal(err)
	// }

	// defer client.Disconnect(ctx)

	// quickstartDatabase := client.Database("quickstart")
	// podcastsCollection := quickstartDatabase.Collection("podcasts")
	// // episodesCollection := quickstartDatabase.Collection("episodes")

	// podcast := Podcast{
	// 	Title:  "The Polyglot Developer",
	// 	Author: "Nic Raboy",
	// 	Tags:   []string{"development", "programming", "coding"},
	// }

	// insertResult, err := podcastsCollection.InsertOne(ctx, podcast)

	// if err != nil {
	// 	panic(err)
	// }
	// fmt.Println(insertResult.InsertedID)
}
