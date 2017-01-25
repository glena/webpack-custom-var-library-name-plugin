# CustomVarLibraryNamePlugin

A WebPack ~~hack~~ plugin to allow to set a different module name to the var `libraryTarget` and the AMD/CommonJS when using `libraryTarget:'umd'`. 

The latest relase adds the hability to change the file name and handle multiple bundle names.

## Install

```
$ npm i --save-dev webpack-custom-var-library-name-plugin
```

## Usage

```js
var CustomVarLibraryNamePlugin = require('webpack-custom-var-library-name-plugin');

    plugins: [
        ...
        new CustomVarLibraryNamePlugin({
          name: 'var-name'
        }),
        ...
    ],
...
```

```js
var CustomVarLibraryNamePlugin = require('webpack-custom-var-library-name-plugin');

    plugins: [
        ...
        new CustomVarLibraryNamePlugin({
          name: {
            'chunk-name': {
                var: 'var-name',
                file: 'file-name'
            }
          }
        }),
        ...
    ],
...
```

