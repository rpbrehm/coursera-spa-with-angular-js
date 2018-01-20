(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
        .state('home', {
            url: '/',
            templateUrl: 'src/menuapp/templates/home.template.html'
        })

        //Premade list page
        .state('categoryList', {
            url: '/category-list',
            templateUrl: 'src/menuapp/templates/categories.template.html',
            controller: 'CategoriesController as categoriesList',
            resolve: {
                categories: ['MenuDataService', function (service) {
                    return service.getAllCategories();
                }]
            }
        })


        .state('itemList', {
            url: '/{categoryName}/item-list',
            templateUrl: 'src/menuapp/templates/items.template.html',
            controller: 'ItemsController as itemsList',
            resolve: {
                items: ['$stateParams', 'MenuDataService',
                    function ($stateParams, service) {
                       return service.getItemsForCategory($stateParams.categoryName);
                }]
            }
        });

    }

})();
