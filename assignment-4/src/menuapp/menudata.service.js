(function () {
    'use strict';

    angular.module('data', [])
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {

        var service = this;
        var menuItemsURL = "https://davids-restaurant.herokuapp.com/menu_items.json";
        var foundItems = [];
        // List of menu items
        var menuItems = [];

        service.getMatchedMenuItems = function (searchTerm) {

            searchTerm = searchTerm.trim().toLowerCase();
            foundItems.length = 0;

            return $http({
                method: "GET",
                url: (menuItemsURL)
            })
                .then(function (response) {
                    var items = response.data.menu_items;
                    if (items.length > 0) {
                        for (var i=0; i < items.length; i++) {
                            if (items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
                                foundItems.push(items[i]);
                            }
                        }
                    }
                    return foundItems;
                })
        };

        service.removeItem = function(itemIndex) {
            return foundItems.splice(itemIndex, 1);
        };


        // Pre-populate a list
        //TODO temporary. Switch to URL.
        menuItems.push({
            name: "Lunch",
            short_name: "L",
        });
        menuItems.push({
            name: "Soup",
            short_name: "A",
        });
        menuItems.push({
            name: "Appetizers",
            short_name: "B",
        });

        // Simulates call to server
        // Returns a promise, NOT items array directly
        service.getAllCategories = function () {
            var deferred = $q.defer();

            // Wait 2 seconds before returning
            $timeout(function () {
                // deferred.reject(items);
                deferred.resolve(menuItems);
            }, 800);

            return deferred.promise;
        };

    }

})();