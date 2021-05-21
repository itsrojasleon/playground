package routes

import (
	"encoding/json"
	"errors"
	"net/http"

	"github.com/rojasleon/playground/bundler"
)

type createBundlerRequest struct {
	RawCode  string `json:"rawcode"`
	Language string `json:"language"`
}

type createBundlerResponse struct {
	Message string `json:"message"`
	Result  string `json:"result"`
}

func Create(w http.ResponseWriter, r *http.Request) {
	var req createBundlerRequest
	err := json.NewDecoder(r.Body).Decode(&req)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	supportedLanguages := []string{"javascript", "typescript"}

	isSupported := false

	for _, language := range supportedLanguages {
		if req.Language == language {
			isSupported = true
			break
		}
	}

	if !isSupported {
		http.Error(w, errors.New("language is not supported").Error(), http.StatusBadRequest)
		return
	}

	code, err := bundler.Bundler(req.RawCode, req.Language)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	var m = createBundlerResponse{Message: "bundle created", Result: code}
	json.NewEncoder(w).Encode(&m)
}
