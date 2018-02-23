(function (){
'use strict';

angular.module('public')
.controller('SignupController', SignupController);

    SignupController.$inject = ['MenuService', 'MyinfoService', 'ApiPath'];
    function SignupController(MenuService, MyinfoService, ApiPath) {

        var signupCtrl = this;
        signupCtrl.error = false;
        signupCtrl.user = {};
        signupCtrl.show = true;
        signupCtrl.emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        signupCtrl.phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        signupCtrl.alphabetPattern = /^[a-zA-Z ]*$/;

        signupCtrl.formSubmit = function () {
            var result = MenuService.validateShortName(signupCtrl.user.menuShort);
            if (signupCtrl.StatusValid()) {
                MyinfoService.pushUserInfo(signupCtrl.user);
            }
        };

        signupCtrl.favoriteItemImage = function () {
            var imgPath = '${ApiPath}/images/${signupCtrl.userInfo.ItemData.short_name}.jpg';
            return imgPath;
        }
    }

})();