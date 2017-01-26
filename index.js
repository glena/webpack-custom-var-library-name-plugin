function CustomVarLibraryNamePlugin(options) {
  this.options = options;
}

CustomVarLibraryNamePlugin.prototype.apply = function(compiler) {
  var _this = this;
  var replaceMap = null;

  if (typeof _this.options.name === 'object') {
    replaceMap = Object.keys(_this.options.name).reduce(function(prev, key) {
      if (_this.options.name[key].var) {
        prev.push({
          replace: 'root["'+ key +'"]',
          with: 'root["'+ _this.options.name[key].var +'"]'
        })
      }

      if (_this.options.name[key].file) {
        prev.push({
          replace: key +'.min.js.map',
          with: _this.options.name[key].file +'.min.js.map'
        })
        prev.push({
          replace: key +'.js',
          with: _this.options.name[key].file +'.js'
        })
        prev.push({
          replace: key +'.min.js',
          with: _this.options.name[key].file +'.min.js'
        })
      }

      return prev;
    }, []);
  }

  compiler.plugin("compilation", function(compilation) {

    var mainTemplate = compilation.mainTemplate;

    mainTemplate.plugin('asset-path', function(path, data) {

      if (replaceMap) {
        if (data.chunk && data.chunk.name) {
          path = path.replace('[name]', data.chunk.name);
        }

        return replaceMap.reduce(function(prev, curr) {
          return prev.replace(curr.replace, curr.with);
        }, path);
      } else {
        return path.indexOf('root[') === 0 ? 'root["' + _this.options.name + '"]' : path;
      }

    });
  });
};

module.exports = CustomVarLibraryNamePlugin;