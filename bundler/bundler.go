package bundler

import (
	"fmt"

	"github.com/evanw/esbuild/pkg/api"
)

func Bundler() {
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
