Package.describe({
  summary: "JSONfn packaged for Meteor. Stringify and parse wrapped to preserve functions."
});

Package.on_use(function (api, where) {
  api.add_files('JSONfn.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('JSONfn');
  api.add_files('JSONfn_tests.js', ['client', 'server']);
});
