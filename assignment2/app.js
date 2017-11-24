(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyItems = this;
        toBuyItems.init = function() {
            ShoppingListCheckOffService.initializeToBuyList();
        };
        toBuyItems.init();
        toBuyItems.items = ShoppingListCheckOffService.getToBuyList();
        toBuyItems.bought = function(boughtItem) {
            ShoppingListCheckOffService.removeFromList(boughtItem);
            toBuyItems.items = ShoppingListCheckOffService.getToBuyList();
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBoughtItems = this;
        alreadyBoughtItems.items = ShoppingListCheckOffService.getBoughtList();
    }

    function ShoppingListCheckOffService() {

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
