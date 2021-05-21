package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rojasleon/playground/db"
	"github.com/rojasleon/playground/middlewares"
	"github.com/rojasleon/playground/routes"
)

func main() {
	db.Connect()
	defer db.Disconnect()
	fmt.Println("Connected to mongo db")

	r := mux.NewRouter()

	r.HandleFunc("/api/bundler", routes.Create).Methods("POST")
	r.HandleFunc("/api/playground", routes.FetchPlayground).Methods("GET")
	r.HandleFunc("/api/playground", routes.CreatePlayground).Methods("POST")
	r.Use(middlewares.JSONMiddleware)

	fmt.Println("Listening on port 3000")
	http.ListenAndServe(":3000", r)
}
