requirejs.config({
  paths: {
    text: "../node_modules/requirejs-text/text",
    durandal: "../node_modules/durandal/js",
    plugins: "../node_modules/durandal/js/plugins",
    transitions: "../node_modules/durandal/js/transitions",
    knockout: "../node_modules/knockout/build/output/knockout-latest",
    jquery: "../node_modules/jquery/dist/jquery",
  },
});

define(["durandal/system", "durandal/app", "durandal/viewLocator"], function (
  system,
  app,
  viewLocator
) {
  system.debug(false);

  app.title = "My Durandal App";

  app.configurePlugins({
    router: true,
    dialog: true,
    observable: true,
  });

  app.start().then(function () {
    viewLocator.useConvention();

    app.setRoot("viewmodels/shell", "entrance");
  });
});
