package bundler

import (
	"net/url"
	"path"

	"github.com/evanw/esbuild/pkg/api"
)

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
