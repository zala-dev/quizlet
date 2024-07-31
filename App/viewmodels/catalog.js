define([
  "services/quizletService",
  "plugins/router",
  "durandal/system",
], function (service, router, system) {
  var vm = {};
  vm.catalogNames = [];

  // get list of data
  vm.activate = function () {
    // system.log("** activate catalogs");
    return service.catalogNames().done(function (data) {
      vm.catalogNames = data;
    });
  };

  // vm.attached = function () {
  //   system.log("** attached catalog");
  // };

  // vm.canDeactivate = function () {
  //   return true;
  // };

  vm.goToCards = function (name) {
    system.log("Go to " + name);
    router.navigate("#cards/" + encodeURIComponent(name) + "/id/0");
  };

  return vm;
});
