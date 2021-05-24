More code will be uploaded in the coming days

And also I don't why github is adding 4 spaces in my go code, in vscode it looks great (2 spaces) but here at the plattform it looks quite ... I dont' like 4 spaces, that's it. I'll find a way to fix this.

Some notes:

### Resolve callbacks

`A callback added using onResolve will be run on each import path in each module that esbuild builds`. The callback can customize how esbuild does path resolution. For example, it can intercept import paths and redirect them somewhere else. It can also mark paths as external

### Load callbacks

A callback added using onLoad will be run for each unique path/namespace pair that has not been marked as external. Its job is to return the contents of the module and to tell esbuild how to interpret it.

Using docker with snowpack is a pain!
