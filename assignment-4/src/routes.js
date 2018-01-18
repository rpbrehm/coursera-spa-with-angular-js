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
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/menuapp/templates/category-list.template.html',
    controller: 'CategoriesController as categoriesList'
    // resolve: {
    //   items: ['ShoppingListService', function (ShoppingListService) {
    //     return ShoppingListService.getItems();
    //   }]
    // }
  });
}

})();
