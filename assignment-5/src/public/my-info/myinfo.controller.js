(function () {
    'use strict';

    angular.module('public')
        .controller('MyinfoController', MyinfoController);

    MyinfoController.$inject = ['$http', 'MyinfoService', 'ApiPath'];

    function MyinfoController($http, MyinfoService, ApiPath) {

        var myinfoCtrl = this;

        myinfoCtrl.myInfo = MyinfoService.getMyInfo();
        myinfoCtrl.isSignedUp = checkProperties(myinfoCtrl.myInfo);
        if (myinfoCtrl.isSignedUp && myinfoCtrl.myInfo.menuShort) {
            myinfoCtrl.myInfo.favoriteItemImage = [ApiPath, '/images/', myinfoCtrl.myInfo.menuShort.toUpperCase(), '.jpg'].join('');
        }

        function checkProperties(obj) {
            for (var key in obj) {
                if (obj[key] !== null && obj[key] != "")
                    return true;
            }
            return false;
        }
    }

})();
