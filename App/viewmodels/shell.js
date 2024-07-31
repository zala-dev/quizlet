define(["plugins/router", "durandal/app"], function (router, app) {
  return {
    router: router,
    activate: function () {
      router
        .map([
          {
            route: ["", "home"],
            title: "Home",
            moduleId: "viewmodels/home",
            nav: true,
          },
          {
            route: "about",
            title: "About",
            moduleId: "viewmodels/about",
            nav: true,
          },
          {
            route: "catalog",
            title: "Catalog",
            moduleId: "viewmodels/catalog",
            nav: true,
          },
          {
            route: "cards/:param1*details",
            hash: "#cards",
            title: "Cards",
            moduleId: "viewmodels/cards",
            nav: false,
          },
        ])
        .buildNavigationModel();

      router.mapUnknownRoutes("viewmodels/catalog", "#catalog");

      return router.activate();
    },
  };
});
