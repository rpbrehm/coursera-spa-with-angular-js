(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categoriesList', {
            templateUrl: 'src/menuapp/categories/categoriesDisplay.template.html',
            bindings: {
                categories: '<'
            }
        });

})();