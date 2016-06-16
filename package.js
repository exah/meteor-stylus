Package.describe({
  summary: "Expressive, dynamic, robust CSS",
  name: "exah:stylus",
  version: "2.0.1",
  git: "https://github.com/exah/meteor-stylus.git"
});

Package._transitional_registerBuildPlugin({
  name: "compileStylus",
  use: [],
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    stylus: "0.54.5",
  }
});

Package.on_test(function (api) {
  api.use(['tinytest', 'exah:stylus', 'test-helpers']);
  api.add_files([
    'tests/presence.styl',
    'tests/importer.styl',
    'tests/relative.import.styl',
    'tests/absolute.import.styl',
    'tests/tinytest.js'
  ],'client');
});
