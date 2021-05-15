package bundler

import (
	"errors"

	"github.com/evanw/esbuild/pkg/api"
)

func Bundler(rawCode string) (string, error) {
	result := api.Build(api.BuildOptions{
		EntryPoints: []string{"index.js"},
		Bundle:      true,
		Write:       false,
		Plugins:     []api.Plugin{unpkgPathPlugin, fetchPlugin(rawCode)},
		Define:      map[string]string{"process.env.NODE_ENV": "'production'"},
		JSXFactory:  "_React.createElement",
		JSXFragment: "_React.Fragment",
	})

	if len(result.Errors) >= 1 {
		for _, e := range result.Errors {
			return "", errors.New(e.Text)
		}
	}

	return string(result.OutputFiles[0].Contents), nil
}
