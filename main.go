package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"path"
	"path/filepath"

	"github.com/evanw/esbuild/pkg/api"
)

func main() {
	result := api.Build(api.BuildOptions{
		EntryPoints: []string{"index.js"},
		Bundle:      true,
		Write:       false,
		Plugins:     []api.Plugin{unpkgPathPlugin, fetchPlugin(`import pkg from 'nested-test-pkg'`)},
		LogLevel:    api.LogLevelDebug,
		Define:      map[string]string{"process.env.NODE_ENV": `"production"`},
	})

	fmt.Println(string(result.OutputFiles[0].Contents))
}

var unpkgPathPlugin = api.Plugin{
	Name: "unpkg-path-plugin",
	Setup: func(build api.PluginBuild) {
		build.OnResolve(api.OnResolveOptions{Filter: `(^index\.js$)`},
			func(args api.OnResolveArgs) (api.OnResolveResult, error) {
				return api.OnResolveResult{
					Path:      args.Path,
					Namespace: "a",
				}, nil
			})

		// relative paths
		build.OnResolve(api.OnResolveOptions{Filter: `^\.+\/`, Namespace: "a"},
			func(args api.OnResolveArgs) (api.OnResolveResult, error) {
				// dir := filepath.Dir()

				base, err := url.Parse(args.ResolveDir)
				if err != nil {
					return api.OnResolveResult{}, nil
				}

				relative, err := url.Parse(args.Path)
				if err != nil {
					return api.OnResolveResult{}, nil
				}

				url, err := url.Parse("https://unpkg.com" + path.Join(relative.ResolveReference(base).String(), relative.String()))

				if err != nil {
					return api.OnResolveResult{}, nil
				}

				return api.OnResolveResult{
					Namespace: "a",
					Path:      url.String(),
				}, nil
			})

		build.OnResolve(api.OnResolveOptions{Filter: ".*", Namespace: "a"},
			func(args api.OnResolveArgs) (api.OnResolveResult, error) {
				return api.OnResolveResult{
					Path:      "https://unpkg.com/" + args.Path,
					Namespace: "a",
				}, nil
			},
		)
	},
}

var fetchPlugin = func(rawCode string) api.Plugin {
	return api.Plugin{
		Name: "fetch-plugin",
		Setup: func(build api.PluginBuild) {
			build.OnLoad(api.OnLoadOptions{Filter: `(^index\.js$)`, Namespace: "a"},
				func(args api.OnLoadArgs) (api.OnLoadResult, error) {
					return api.OnLoadResult{
						Contents: &rawCode,
						Loader:   api.LoaderJSX,
					}, nil
				})

			build.OnLoad(api.OnLoadOptions{Filter: `.*`, Namespace: "a"},
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
				},
			)
		},
	}
}
