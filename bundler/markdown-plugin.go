package bundler

import (
	"github.com/evanw/esbuild/pkg/api"
	"github.com/gomarkdown/markdown"
)

var markdownPlugin = func(rawCode string) api.Plugin {
	return api.Plugin{
		Name: "markdown-plugin",
		Setup: func(build api.PluginBuild) {
			build.OnResolve(api.OnResolveOptions{Filter: `^markdown$`},
				func(args api.OnResolveArgs) (api.OnResolveResult, error) {
					return api.OnResolveResult{
						Path:      args.Path,
						Namespace: "markdown",
					}, nil
				},
			)

			build.OnLoad(api.OnLoadOptions{Filter: `^markdown$`, Namespace: "markdown"},
				func(args api.OnLoadArgs) (api.OnLoadResult, error) {
					byteHTML := markdown.ToHTML([]byte(rawCode), nil, nil)

					str := string(byteHTML)

					// fmt.Println(string(byteHTML))

					// type JSONProp struct {
					// 	Content string `json:"content"`
					// }

					// prop := JSONProp{Content: string(byteHTML)}
					// // transform to json
					// jsonOutput, err := json.Marshal(prop.Content)

					// if err != nil {
					// 	return api.OnLoadResult{}, err
					// }

					// // convert byte (json content) to string
					// str := string(jsonOutput)

					return api.OnLoadResult{
						Contents: &str,
						Loader:   api.LoaderText,
					}, nil
				},
			)
		},
	}
}
