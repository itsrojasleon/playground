// I just realized this middleware is not neccesary, but I leave it
// right here to remember how good I'm using golang :(
package middlewares

import "net/http"

func JSONMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		w.Header().Set("Content-Type", "application/json; charset=utf-8")

		next.ServeHTTP(w, r)
	})
}
