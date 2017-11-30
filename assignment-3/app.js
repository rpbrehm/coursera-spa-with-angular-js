(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var alreadyBoughtItems = this;
        alreadyBoughtItems.items = ShoppingListCheckOffService.getBoughtList();
    }

    function MenuSearchService() {

        var service = this;

        var boughtList = [];
        var toBuyList = [];
        var toBuyItems = [
            {
                name: "Milk",
                quantity: "2"
            },
            {
                name: "Donuts",
                quantity: "200"
            },
            {
                name: "Cookies",
                quantity: "300"
            },
            {
                name: "Chocolate",
                quantity: "5"
            },
            {
                name: "Carrots",
                quantity: "25"
            }
        ];
        service.initializeToBuyList = function () {
            toBuyList = toBuyItems;
            return toBuyList;
        };
        service.getToBuyList = function () {
            return toBuyList;
        };
        service.getBoughtList = function () {
            return boughtList;
        };
        service.removeFromList = function (boughtItem) {
            var theItem = toBuyList[boughtItem];
            toBuyList.splice(boughtItem, 1);
            boughtList.push(theItem);
        };

    }

})();
