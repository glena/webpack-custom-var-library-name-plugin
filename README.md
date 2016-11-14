# CustomVarLibraryNamePlugin

A WebPack (~~hack~~) plugin to allow to set a different module name to the var `libraryTarget` and the AMD/CommonJS when using `libraryTarget:'umd'`.

## Install

```
$ npm i --save-dev webpack-custom-var-library-name-plugin
```

## Usage

```js
var CustomVarLibraryNamePlugin = require('webpack-custom-var-library-name-plugin');

var webpackConfig = {
    ...
    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].min.js',
        library: 'some-name',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    plugins: [
        ...
        new CustomVarLibraryNamePlugin({
          name: 'someName'
        }),
        ...
    ],
    ...
};
