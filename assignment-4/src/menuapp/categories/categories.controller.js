(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', categoriesController);


    categoriesController.$inject = ['categories'];
    function categoriesController(categories) {
        var categoriesList = this;
        categoriesList.categories = categories.data;
    }

})();
