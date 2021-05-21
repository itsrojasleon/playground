package routes

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"time"

	"github.com/rojasleon/playground/db"
	"github.com/rojasleon/playground/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type createPlagroundRequest struct {
	Cells []models.Cell `json:"cells"`
}

type createPlaygroundResponse struct {
	Message    string      `json:"message"`
	InsertedID interface{} `json:"insertedId"`
}

// Create a new playground to share with it the rest of the world
func CreatePlayground(w http.ResponseWriter, r *http.Request) {
	var req createPlagroundRequest

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

	// Errors inserting the bson document?
	if err != nil {
		fmt.Println("some problems", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// At this point the playground has been created
	// Just send some data to the user to tell what just happend!
	var resp = createPlaygroundResponse{Message: "bundle created", InsertedID: playground.InsertedID}
	json.NewEncoder(w).Encode(&resp)
}

type fetchPlaygroundResponse struct {
	Message    string            `json:"message"`
	Playground models.Playground `json:"playground"`
}

func FetchPlayground(w http.ResponseWriter, r *http.Request) {
	queryParam := r.URL.Query().Get("p")

	if queryParam == "" {
		http.Error(w, errors.New("must provide a `p` param").Error(), http.StatusBadRequest)
		return
	}

	// // Convert incoming `id` into a valid bson object id
	id, err := primitive.ObjectIDFromHex(queryParam)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	filter := bson.M{"_id": id}

	var playground models.Playground

	err = db.Client.Database("bundles").Collection("playground").FindOne(db.Ctx, filter).Decode(&playground)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	var resp = fetchPlaygroundResponse{Message: "Here's your playground!", Playground: playground}
	json.NewEncoder(w).Encode(&resp)
}
