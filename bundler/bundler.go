package bundler

import (
	"errors"
	"fmt"

	"github.com/evanw/esbuild/pkg/api"
)

func Bundler(rawCode string, loaderFile string) (string, error) {
	result := api.Build(api.BuildOptions{
		EntryPoints: []string{loaderFile},
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

	fmt.Println("content: ", string(result.OutputFiles[0].Contents))

	return string(result.OutputFiles[0].Contents), nil
}
