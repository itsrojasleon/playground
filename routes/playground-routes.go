package routes

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/rojasleon/playground/db"
	"github.com/rojasleon/playground/models"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type incomingPlaygroundReq struct {
	Cells []models.Cell `json:"cells"`
}

type outcomingPlaygroundReq struct {
	Message    string      `json:"message"`
	InsertedID interface{} `json:"insertedId"`
}

func CreatePlayground(w http.ResponseWriter, r *http.Request) {
	var req incomingPlaygroundReq

	err := json.NewDecoder(r.Body).Decode(&req)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Create a bson document
	document := models.Playground{
		Cells:     req.Cells,
		ID:        primitive.NewObjectID(),
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	// Go to the bundles database, then to the playground collection and insert a
	// document within that collection
	playground, err := db.Client.Database("bundles").Collection("playground").InsertOne(db.Ctx, document)

	// errors inserting the bson document?
	if err != nil {
		fmt.Println("some problems", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// At this point the playground has been created
	// Just send some data to the user to tell what just happend!

	fmt.Println("BUNDLE!!!!: ", playground)

	var m = outcomingPlaygroundReq{Message: "bundle created", InsertedID: playground.InsertedID}
	json.NewEncoder(w).Encode(&m)
}
