(function () {
    'use strict';

    angular.module('data', [])
        .service('MenuDataService', MenuDataService);

    function MenuDataService() {

    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {

        var service = this;
        var menuItemsURL = "https://davids-restaurant.herokuapp.com/menu_items.json";
        var foundItems = [];
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
        }
    }

})();