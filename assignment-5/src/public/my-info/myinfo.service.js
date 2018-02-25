(function () {
'use strict';

angular.module('public')
    .service('MyinfoService', MyinfoService);

    function MyinfoService() {
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
