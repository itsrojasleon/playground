package routes

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/rojasleon/playground/bundler"
	"github.com/rojasleon/playground/db"
	"github.com/rojasleon/playground/models"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type IncomingRequest struct {
	RawCode string `json:"rawcode"`
}

type OutcomingRequest struct {
	Message string `json:"message"`
	Result  string `json:"result"`
}

func Create(w http.ResponseWriter, r *http.Request) {
	var req IncomingRequest
	err := json.NewDecoder(r.Body).Decode(&req)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	code, err := bundler.Bundler(req.RawCode)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// store it in database
	doc := models.Bundle{Code: code, ID: primitive.NewObjectID()}

	newBundle, err := db.Client.Database("bundles").Collection("bundle").InsertOne(db.Ctx, doc)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
	}

	fmt.Println(newBundle)

	var m = OutcomingRequest{Message: "bundle created", Result: code}
	json.NewEncoder(w).Encode(&m)
}
