package bundler

import (
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"path/filepath"

	"github.com/evanw/esbuild/pkg/api"
)

var fetchPlugin = func(rawCode string) api.Plugin {
	return api.Plugin{
		Name: "fetch-plugin",
		Setup: func(build api.PluginBuild) {
			// javascript code
			build.OnLoad(api.OnLoadOptions{Filter: `^javascript$`, Namespace: "unpkg-url"},
				func(args api.OnLoadArgs) (api.OnLoadResult, error) {
					return api.OnLoadResult{
						Contents: &rawCode,
						Loader:   api.LoaderJSX,
					}, nil
				})

			// typescript code
			build.OnLoad(api.OnLoadOptions{Filter: `^typescript$`, Namespace: "unpkg-url"},
				func(args api.OnLoadArgs) (api.OnLoadResult, error) {
					return api.OnLoadResult{
						Contents: &rawCode,
						Loader:   api.LoaderTSX,
					}, nil
				})

			build.OnLoad(api.OnLoadOptions{Filter: ".*", Namespace: "unpkg-url"},
				func(args api.OnLoadArgs) (api.OnLoadResult, error) {
					resp, err := http.Get(args.Path)
					if err != nil {
						log.Fatal(err)
						return api.OnLoadResult{}, err
					}

					defer resp.Body.Close()

					bytes, err := ioutil.ReadAll(resp.Body)
					if err != nil {
						log.Fatal(err)
						return api.OnLoadResult{}, nil
					}

					contents := string(bytes)

					base, err := url.Parse(resp.Request.URL.Path)

					if err != nil {
						return api.OnLoadResult{}, nil
					}

					return api.OnLoadResult{
						Contents: &contents,
						Loader:   api.LoaderJSX,
						// remove filename from url
						ResolveDir: filepath.Dir(base.String()),
					}, nil
				})
		}}
}
