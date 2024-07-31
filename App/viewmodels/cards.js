define(["models/selectedCards", "plugins/router"], function (
  selectedCards,
  router
) {
  var vm = {},
    nameParam = "";

  vm.selected = selectedCards;

  vm.router = router
    .createChildRouter()
    .makeRelative({ route: "cards/:param1" })
    .map([{ route: ["id(/:param2)", " "], moduleId: "viewmodels/card" }])
    .buildNavigationModel();

  vm.activate = function (name) {
    nameParam = name;
  };

  vm.binding = function () {
    return selectedCards.select(nameParam);
  };

  vm.previous = function () {
    if (selectedCards.hasPrevious) {
      navigate(selectedCards.previousIndex());
    }
  };

  vm.next = function () {
    if (selectedCards.hasNext) {
      navigate(selectedCards.nextIndex());
    }
  };

  function navigate(index) {
    var url =
      "#cards/" + encodeURIComponent(selectedCards.name) + "/id/" + index;
    router.navigate(url);
  }

  return vm;
});
