# CustomVarLibraryNamePlugin

A WebPack ~~hack~~ plugin to allow to set a different module name to the var `libraryTarget` and the AMD/CommonJS when using `libraryTarget:'umd'`.

## Usage

```js
var CustomVarLibraryNamePlugin = require('webpack-custom-var-library-name-plugin');

    plugins: [
        ...
        new CustomVarLibraryNamePlugin({
          name: 'auth0'
        }),
        ...
    ],
...

