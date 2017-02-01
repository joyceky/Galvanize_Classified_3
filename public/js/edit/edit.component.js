(function() {
    "use strict";

    angular.module('app')

    .component("edit", {
        controller: controller,
        templateUrl: "js/edit/edit.template.html"
    });

    controller.$inject = ["$http", "$stateParams", "$state", "classifiedsService"];

    function controller($http, $stateParams, $state, classifiedsService) {
        var vm = this;

        console.log('STATE PARAMS', $stateParams.id);

        vm.$onInit = function() {

            vm.patchClassified = patchClassified;
            vm.deleteClassified = deleteClassified;
            vm.id = $stateParams.id;

            classifiedsService.getClassifiedsbyId($stateParams.id)
                .then(function(classified) {
                    vm.classified = classified;
                    console.log(vm.classified);
                })
                .catch((err) => {
                    console.log(err);
                });

        };

        var deleteClassified = function(id) {
            console.log(id);
            classifiedsService.deleteClassifieds(id)
                .then(function(res) {
                    console.log(res);
                    $state.go('home');
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        var patchClassified = function(title, description, price, item_image) {

            if (title && description && price && item_image) {
                vm.classified.created_at = new Date();
                vm.classified.id = $stateParams.id;
                vm.classified.title = title;
                vm.classified.description = description;
                vm.classified.price = price;
                vm.classified.item_image = item_image;

                var id = vm.classified.id;

                classifiedsService.patchClassifieds(id, vm.classified)
                    .then(function(res) {
                        console.log(res);
                        $state.go('home');
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        };
    }

})();
