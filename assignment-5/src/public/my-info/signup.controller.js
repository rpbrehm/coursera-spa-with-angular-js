(function (){
'use strict';

angular.module('public')
.controller('SignupController', SignupController);

    SignupController.$inject = ['MenuService', 'MyinfoService', 'ApiPath'];
    function SignupController(MenuService, MyinfoService, ApiPath) {
        var signupCtrl = this;
        signupCtrl.myInfo = MyinfoService.getMyInfo();

        signupCtrl.submit = function () {
            MenuService.validateShortName(signupCtrl.userInfo.favmenuitem);
            if (signupCtrl.StatusValid()) {
                MyinfoService.pushUserInfo(signupCtrl.userInfo);
            }
        };

        signupCtrl.StatusValid = function () {
            return MyinfoService.getInfoStatus() == "Valid";
        };

        signupCtrl.StatusInvalid = function () {
            return MyinfoService.getInfoStatus() == "Invalid";
        };

        signupCtrl.hasData = function () {
            return MyinfoService.hasItemData();
        };

        signupCtrl.favoriteItemImage = function () {
            var imgPath = `${ApiPath}/images/${signupCtrl.userInfo.ItemData.short_name}.jpg`;
            return imgPath;
        }
    }

})();