(function () {
    'use strict';

    angular.module('public')
        .controller('MyinfoController', MyinfoController);

    MyinfoController.$inject = ['$http', 'MyinfoService'];

    function MyinfoController($http, MyinfoService) {

        var myinfoCtrl = this;

        myinfoCtrl.myInfo = MyinfoService.getMyInfo();

        myinfoCtrl.isSignedUp = checkProperties(myinfoCtrl.myInfo);

        function checkProperties(obj) {
            for (var key in obj) {
                if (obj[key] !== null && obj[key] != "")
                    return false;
            }
            return true;
        }
    }

})();
