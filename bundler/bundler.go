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
		LogLevel:    api.LogLevelDebug,
		// JSXFactory: ,
	})

	if len(result.Errors) >= 1 {
		for _, e := range result.Errors {
			return "", errors.New(e.Text)
		}
	}

	return string(result.OutputFiles[0].Contents), nil
}
