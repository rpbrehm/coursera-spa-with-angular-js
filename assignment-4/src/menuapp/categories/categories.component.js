(function () {
    'use strict';

    angular.module('Categories')
        .component('categories', {
            templateUrl: 'src/categories/categoriesDisplay.template.html',
            bindings: {
                categories: '<'
            }
        });

})();