package bundler

import (
	"errors"

	"github.com/evanw/esbuild/pkg/api"
)

func Bundler(rawCode string, loaderFile string) (string, error) {
	result := api.Build(api.BuildOptions{
		EntryPoints: []string{loaderFile},
		Bundle:      true,
		Write:       false,
		Plugins:     []api.Plugin{unpkgPathPlugin, fetchPlugin(rawCode)},
		// Use the production version of every single library at unpkg.com (if exists)
		Define: map[string]string{"process.env.NODE_ENV": "'production'"},
		// Change the invocation of every JSX element into other one (to avoid naming collisions)
		JSXFactory: "_React.createElement",
		// Change the invocation of every JSX fragment into other one (to avoid naming collisions)
		JSXFragment: "_React.Fragment",
	})

	if len(result.Errors) >= 1 {
		for _, e := range result.Errors {
			return "", errors.New(e.Text)
		}
	}

	// fmt.Println("content: ", string(result.OutputFiles[0].Contents))

	return string(result.OutputFiles[0].Contents), nil
}
