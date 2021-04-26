### Resolve callbacks

`A callback added using onResolve will be run on each import path in each module that esbuild builds`. The callback can customize how esbuild does path resolution. For example, it can intercept import paths and redirect them somewhere else. It can also mark paths as external

### Load callbacks

A callback added using onLoad will be run for each unique path/namespace pair that has not been marked as external. Its job is to return the contents of the module and to tell esbuild how to interpret it.
