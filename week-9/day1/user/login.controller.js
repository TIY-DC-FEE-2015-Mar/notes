(function() {
    'use strict';

    angular.module('lecture')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$stateParams', '$state', 'LoginService'];
    function LoginController($stateParams, $state, LoginService) {
        this.msg = $stateParams.msg;
        this.user = {};

        this.doLogin = function doLogin(form) {
            var that = this;

            console.log(this.user, this.user.email.indexOf('@'));
            if (!form.$valid || this.user.email.indexOf('@') < 0) {
                console.log(this);
                this.msg = 'Hey, give me good data!';
                return;
            }

            this.msg = null;

            LoginService.authenticate(this.user)
                .then(function loginSuccess() {
                    $state.go('my-profile');
                })
                .catch(function loginFailed(err) {
                    if (err.status > 499) {
                        $state.go('error', { msg: err.msg });
                    } else {
                        that.msg = err.msg;
                    }
                });

        };

    }

})();
