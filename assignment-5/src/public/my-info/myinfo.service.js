(function (){
    'use strict'

    angular.module('public')
        .service('MyinfoService', MyinfoService);

    MyinfoService.injectg = ['$http', 'MenuService'];

    function MyinfoService($http, MenuService) {
         var myInfoService = this;
         var myInfo = {};
         myInfo.firstName = "";
         myInfo.lastName = "";

    }
    
})();
