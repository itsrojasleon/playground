package bundler

import (
	"context"
	"io/ioutil"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/evanw/esbuild/pkg/api"
	"github.com/go-redis/cache/v8"
	"github.com/go-redis/redis/v8"
)

var ctx = context.TODO()
var rdb = redis.NewClient(&redis.Options{
	Addr:     os.Getenv("REDIS_URL"),
	Password: "",
})
var mycache = cache.New(&cache.Options{
	Redis: rdb,
})

var fetchPlugin = func(rawCode string) api.Plugin {
	return api.Plugin{
		Name: "fetch-plugin",
		Setup: func(build api.PluginBuild) {
			// Use the jsx loader when using javascript code
			build.OnLoad(api.OnLoadOptions{Filter: `^javascript$`, Namespace: "unpkg-url"},
				func(args api.OnLoadArgs) (api.OnLoadResult, error) {
					return api.OnLoadResult{
						Contents: &rawCode,
						Loader:   api.LoaderJSX,
					}, nil
				})

			// Use the tsx loader when using typescript code
			build.OnLoad(api.OnLoadOptions{Filter: `^typescript$`, Namespace: "unpkg-url"},
				func(args api.OnLoadArgs) (api.OnLoadResult, error) {
					return api.OnLoadResult{
						Contents: &rawCode,
						Loader:   api.LoaderTSX,
					}, nil
				})

			// Describe how to load any main file of a module
			// It makes a http get request over the site which is `args.Path`
			build.OnLoad(api.OnLoadOptions{Filter: ".*", Namespace: "unpkg-url"},
				func(args api.OnLoadArgs) (api.OnLoadResult, error) {
					// Check if the information of a main file is already saved within redis
					var storedResult api.OnLoadResult
					err := mycache.Get(ctx, args.Path, &storedResult)
					if err == nil {
						return storedResult, nil
					}

					resp, err := http.Get(args.Path)
					if err != nil {
						return api.OnLoadResult{}, err
					}

					defer resp.Body.Close()

					bytes, err := ioutil.ReadAll(resp.Body)

					if err != nil {
						return api.OnLoadResult{}, nil
					}

					contents := string(bytes)

					if err != nil {
						return api.OnLoadResult{}, nil
					}

					result := api.OnLoadResult{
						Contents: &contents,
						Loader:   api.LoaderJSX,
						// We only need the directory, thus remove the last file.
						// This will be used in the `OnResolve` step when resolving
						// relative paths `Filter: `^\.+\/`
						ResolveDir: filepath.Dir(resp.Request.URL.Path),
					}

					// store result in redis
					err = mycache.Set(&cache.Item{
						Ctx:   ctx,
						Key:   args.Path,
						Value: result,
						TTL:   time.Hour,
					})

					if err != nil {
						return api.OnLoadResult{}, err
					}

					return result, nil
				})
		}}
}
