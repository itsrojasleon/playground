package bundler

import (
	"github.com/evanw/esbuild/pkg/api"
)

func Bundler(rawCode string) string {
	result := api.Build(api.BuildOptions{
		EntryPoints: []string{"index.js"},
		Bundle:      true,
		Write:       false,
		Plugins:     []api.Plugin{unpkgPathPlugin, fetchPlugin(rawCode)},
		LogLevel:    api.LogLevelDebug,
		Define:      map[string]string{"process.env.NODE_ENV": `"production"`},
	})

	return string(result.OutputFiles[0].Contents)
}
