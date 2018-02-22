(function () {
'use strict';

angular.module('public')
    .service('MyinfoService', MyinfoService);

    MyinfoService.injectg = ['$http', 'MenuService'];

    function MyinfoService($http, MenuService) {
        var myinfoService = this;
        var myInfo = {};

        myInfo.firstName = "";
        myInfo.lastName = "";
        myInfo.email = "";
        myInfo.phone = "";
        myInfo.favoriteDish = "";

        myinfoService.myInfo = myInfo;

        myinfoService.getMyInfo = function(){
            return myinfoService.myInfo;
        };

    }
    
})();
