(function (){
'use strict';

angular.module('public')
.controller('SignupController', SignupController);

    SignupController.$inject = ['MenuService', 'MyinfoService', 'ApiPath'];
    function SignupController(MenuService, MyinfoService, ApiPath) {

        var signupCtrl = this;
        signupCtrl.error = false;
        signupCtrl.signupSucccess = false;
        signupCtrl.errorMessage = "";
        signupCtrl.userInfo = {};
        signupCtrl.emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        signupCtrl.phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        signupCtrl.alphabetPattern = /^[a-zA-Z ]*$/;

        signupCtrl.formSubmit = function () {
            signupCtrl.error = false;
            signupCtrl.signupSucccess = false;
            // Validations
            if (!signupCtrl.userInfo.firstName) {
                signupCtrl.error = true;
                signupCtrl.errorMessage = "Please enter first name";
                return;
            }
            else if (!signupCtrl.userInfo.lastName) {
                signupCtrl.error = true;
                signupCtrl.errorMessage = "Please enter last name";
                return;
            }
            else if (!signupCtrl.userInfo.email) {
                signupCtrl.error = true;
                signupCtrl.errorMessage = "Please enter last name";
                return;
            }
            else if (!signupCtrl.userInfo.phone) {
                signupCtrl.error = true;
                signupCtrl.errorMessage = "Please enter last name";
                return;
            }
            else {
                if (signupCtrl.userInfo.menuShort) {
                    MenuService.validateShortName(signupCtrl.userInfo.menuShort)
                        .then(function(result) {
                            signupCtrl.userInfo.favoriteDish = result;
                        })
                        .catch(function() {
                            signupCtrl.error = true;
                            signupCtrl.errorMessage = "No such menu item exists";
                            return;
                        });
                }
            }
            signupCtrl.signupSucccess = true;
            MyinfoService.pushMyInfo(signupCtrl.userInfo);
        };
    }

})();