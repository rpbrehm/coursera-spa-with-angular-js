(function () {
    'use strict';

    angular.module('Categories')
        .component('categories', {
            templateUrl: 'src/category-list/categoriesDisplay.template.html',
            bindings: {
                categories: '<'
            }
        });

})();