var fs = Npm.require('fs');
var stylus = Npm.require('stylus');
var Future = Npm.require('fibers/future');
var path = Npm.require('path');

Plugin.registerSourceHandler("styl", {archMatching: 'web'}, function (compileStep) {
  var source = compileStep.read().toString('utf8');
  var compiler = stylus(source)
    .set('filename', compileStep.inputPath)
    .set('sourcemap', {comment: false})
    .set('includeCSS', true)
    .include(path.dirname(compileStep._fullInputPath)) // relative @import
    .include(process.cwd()) // absolute @import
    .include(process.cwd() + '/node_modules'); // node_modules @import

  var errCb = function(msg) {
    compileStep.error({
      message: "Stylus compiler error: " + msg
    });
  };

  try {
    compiler.render(function (err, css) {
      if (err) {
        return errCb(err.message);
      }
      var sourceMap = compiler.sourcemap;
      sourceMap.sourcesContent = [source];
      compileStep.addStylesheet({
        path: compileStep.inputPath + ".css",
        data: css,
        sourceMap: JSON.stringify(sourceMap)
      });
    });
  } catch(err) {
    errCb(err.message);
  }
});

// Register import.styl files with the dependency watcher, without actually
// processing them. There is a similar rule in the less package.
Plugin.registerSourceHandler("import.styl", function () {});
