(function () {
'use strict';

angular.module('public')
    .service('MyinfoService', MyinfoService);

    MyinfoService.$inject = ['$http', 'MenuService'];

    function MyinfoService($http, MenuService) {
        var myinfoService = this;
        var myInfo;

        myinfoService.getMyInfo = function(){
            return myInfo;
        };

        myinfoService.pushMyInfo = function(userInfo) {
            myInfo = userInfo;
        }
    }
    
})();
