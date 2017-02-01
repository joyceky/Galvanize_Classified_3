(function() {
    "use strict";

    angular.module('app')

        .component("classifieds", {
            controller: controller,
            templateUrl: "js/classifieds/classifieds.template.html"
        });

    controller.$inject = ["$http", "classifiedsService"];


    function controller($http, classifiedsService) {
        var vm = this;

        // Upon initialziation, do these things
        vm.$onInit = function() {
            vm.classifiedData = {};
            vm.getClassifieds = getClassifieds;
            vm.addClassified = addClassified;
            vm.sortClassifieds = sortClassifieds;
            vm.sort = "-price";
            vm.sortDisplay = "Price";
            vm.search = "";
            vm.formVisible = false;
            vm.toggleForm = toggleForm;

            getClassifieds();
        };

        var getClassifieds = function() {
            classifiedsService.getClassifieds()
                .then(function(classifieds) {
                    vm.classifieds = classifieds;
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        var addClassified = function(title, description, price, item_image) {
            console.log('in here');
            if (title && description && price && item_image) {
                vm.classifiedData.created_at = new Date();
                console.log(vm.classifiedData, "posting here");
                classifiedsService.postClassified(vm.classifiedData)
                    .then(function(classified) {
                        console.log(classified);
                        vm.getClassifieds();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                vm.classifiedData = {};
            }
        }

        var sortClassifieds = function(by) {
            console.log('sort', by);
            switch (by) {
                case "Price":
                    vm.sort = 'price';
                    vm.sortDisplay = "Price";
                    break;
                case "Date":
                    vm.sort = 'created_at';
                    vm.sortDisplay = "Date";
                    break;
            }
        }

        var toggleForm = function() {
          vm.formVisible = !vm.formVisible;
        }
    }
})();
