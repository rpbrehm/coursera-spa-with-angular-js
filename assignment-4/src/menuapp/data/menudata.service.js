(function () {
    'use strict';

    angular.module('data', [])
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {

        var service = this;
        var menuURL = "https://davids-restaurant.herokuapp.com";

        service.getAllCategories = function () {

            return $http({
                method: "GET",
                url: (menuURL + "/categories.json")
            })

        };

        service.getItemsForCategory = function (categoryShortName) {

            return $http({
                method: "GET",
                url: (menuURL + "/menu_items.json"),
                params: {
                    category: categoryShortName
                }
            })

        }

    }

})()