(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', foundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowItDown = this;

        var found = [];

        narrowItDown.searchItems = function(itemToSearch) {
            MenuSearchService.getMenuItems()
                .then(function (response) {
                    found = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        };

        narrowItDown.removeItem = function (itemIndex) {
            var promise = MenuSearchService.getMenuItems();
            shoppingList.removeItem(itemIndex);
            this.title = origTitle + " (" + list.items.length + " items )";
        };

        narrowItDown.getItems = function() {
            $scope.items = items;
        }
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {

        var service = this;
        var menuItemsURL = "https://davids-restaurant.herokuapp.com/menu_items.json";

        service.getMatchedMenuItems = function (searchTerm) {
            var response = $http({
                method: "GET",
                url: (menuItemsURL)
            });

            return response;
        };
     }

    function foundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                foundItems: '=found-items'
            }
        };

        return ddo;
    }

})();
