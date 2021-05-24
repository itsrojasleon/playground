package bundler

import (
	"path"

	"github.com/evanw/esbuild/pkg/api"
)

var unpkgPathPlugin = api.Plugin{
	Name: "unpkg-path-plugin",
	Setup: func(build api.PluginBuild) {
		// Describe how to handle entry file when using javascript
		build.OnResolve(api.OnResolveOptions{Filter: `^javascript$`},
			func(args api.OnResolveArgs) (api.OnResolveResult, error) {
				return api.OnResolveResult{
					Path:      args.Path,
					Namespace: "unpkg-url",
				}, nil
			})

		// Describe how to handle entry file when typescript code
		build.OnResolve(api.OnResolveOptions{Filter: `^typescript$`},
			func(args api.OnResolveArgs) (api.OnResolveResult, error) {
				return api.OnResolveResult{
					Path:      args.Path,
					Namespace: "unpkg-url",
				}, nil
			})

		// Describe how to handle relative paths in a unpkg module
		build.OnResolve(api.OnResolveOptions{Filter: `^\.+\/`, Namespace: "unpkg-url"},
			func(args api.OnResolveArgs) (api.OnResolveResult, error) {
				// `args.ResolveDir` is the directory where the main file is inside and
				// it's coming from the `onLoad` step when handling main files ".*".
				// `args.Path` is the main file

				// If we don't join the `directory` + `main file` we will have a string
				// like this: `/package./file.js` and of course that is not a valid path
				url := "https://unpkg.com" + path.Join(args.ResolveDir, args.Path)

				return api.OnResolveResult{
					Namespace: "unpkg-url",
					Path:      url,
				}, nil
			})

		// Describe how to handle a main file of a module
		build.OnResolve(api.OnResolveOptions{Filter: ".*", Namespace: "unpkg-url"},
			func(args api.OnResolveArgs) (api.OnResolveResult, error) {
				// args.Path is the main file
				return api.OnResolveResult{
					Path:      "https://unpkg.com/" + args.Path,
					Namespace: "unpkg-url",
				}, nil
			},
		)
	},
}
