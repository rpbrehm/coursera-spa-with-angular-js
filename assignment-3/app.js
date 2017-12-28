(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', foundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {

        var narrowItDown = this;

        narrowItDown.searchItems = function() {
            if (narrowItDown.searchTerm !== undefined) {
                MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm)
                    .then(function (response) {
                        if (response.length > 0) {
                            narrowItDown.found = response;
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        };

        narrowItDown.removeItem = function (itemIndex) {
            return MenuSearchService.removeItem(itemIndex);
        };

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

    function foundItemsDirective() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'foundItems.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            }
        };

        return ddo;
    }

})();
