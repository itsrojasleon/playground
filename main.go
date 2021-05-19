package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rojasleon/playground/db"
	"github.com/rojasleon/playground/middlewares"
	"github.com/rojasleon/playground/routes"
)

// ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
// defer cancel()
// client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))

// type App struct {
// 	Router *mux.Router
// 	DB     *mongo.Database
// }

func main() {
	// database connection
	db.Connect()
	defer db.Disconnect()
	fmt.Println("Connected to mongo db")

	// router stuff
	r := mux.NewRouter()

	r.HandleFunc("/api/bundler", routes.Create).Methods("POST")
	r.Use(middlewares.JSONMiddleware)

	fmt.Println("Listening on port 3000")
	http.ListenAndServe(":3000", r)
}
