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
	})

	// result := api.Transform(rawCode, api.TransformOptions{
	// 	Loader: api.LoaderJSX,
	// })

	return string(result.OutputFiles[0].Contents)
}
