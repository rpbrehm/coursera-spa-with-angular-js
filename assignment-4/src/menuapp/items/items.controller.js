(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', itemsController);


    itemsController.$inject = ['items'];
    function itemsController(items) {
        var itemsList = this;
        itemsList.items = items.data.menu_items;
    }

})();
