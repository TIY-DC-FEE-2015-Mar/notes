(function() {
    'use strict';

    angular.module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];

    function UserService($http) {
        var loginData = null;

        return {
            find: find,
            login: login,
            getLoginData: getLoginData
        };

        function find() {
            return $http({
                url: '/api/users',
                method: 'GET'
            })
            .then(function transformUsers(response) {
                return response.data;
            });
        }

        /**
         * Logs a user in via an API call
         * @param  {Object} user   contains email and password
         * @return {Promise}       Fulfilled when login API request completes (with login data)
         */
        function login(user) {
            return $http({
                url: '/api/users/login',
                method: 'POST',
                data: user
            })
            .then(function cacheLoginData(response) {
                loginData = response.data;
                return loginData;
            });
        }

        function getLoginData() {
            return loginData;
        }
    }
})();
