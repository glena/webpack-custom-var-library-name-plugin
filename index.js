function CustomVarLibraryNamePlugin(options) {
  this.options = options;
}

CustomVarLibraryNamePlugin.prototype.apply = function(compiler) {
  var _this = this;

  compiler.plugin("compilation", function(compilation) {

    var mainTemplate = compilation.mainTemplate;

    mainTemplate.plugin('asset-path', function(path, data) {

      return path.indexOf('root[') === 0 ? 'root["' + _this.options.name + '"]' : path;

    });
  });
};

module.exports = CustomVarLibraryNamePlugin;