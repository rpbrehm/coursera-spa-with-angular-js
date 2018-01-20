(function () {
    'use strict';

    angular.module('MenuApp')
        .component('itemsList', {
            templateUrl: 'src/menuapp/items/itemsDisplay.template.html',
            bindings: {
                items: '<'
            }
        });

})();