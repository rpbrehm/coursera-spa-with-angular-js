(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', foundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowItDown = this;

        narrowItDown.searchItems = function(itemToSearch) {
            var promise = MenuSearchService.getMenuItems();
            promise.then(function (response) {
                console.log(response.data);
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

    }

    NarrowItDownController.$inject = ['$http'];
    function MenuSearchService($http) {

        var service = this;
        var menuItemsURL = "https://davids-restaurant.herokuapp.com/menu_items.json";

        service.getMenuItems = function () {
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
                items: '<',
                onRemove: '&'
            },
            controller: ShoppingListDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    //TODO: do we areally need this?
    function ShoppingListDirectiveController() {
        var list = this;
    }

})();
