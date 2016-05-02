(function() {
    'use strict';

    angular.module('lecture')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$q'];
    function LoginService($q) {
        var loggedIn = false;
        return {
            authenticate: function() {
                var def = $q.defer();
                // loggedIn = true;
                var err = new Error('Auth server down');
                err.status = 500;
                def.reject(err);
                return def.promise;
            },
            isLoggedIn: function() {
                return loggedIn;
            }
        };
    }

})();
