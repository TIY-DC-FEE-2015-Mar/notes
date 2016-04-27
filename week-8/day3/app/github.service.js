(function() {
    'use strict';

    angular.module('gh')
        .factory('GitHubService', GitHubService);

    GitHubService.$inject = ['$http', '$q'];

    function GitHubService($http, $q) {
        var token = null;
        var gitHubDomain = 'https://api.github.com';

        return {
            setUserToken: setUserToken,
            getUserInfo: getUserInfo,
            getReposForUser: getReposForUser
        };

        function setUserToken(loginToken) {
            var value;

            token = loginToken;

            if (token) {
                value = 'token ' + token;
            } else {
                value = '';
            }
            $http.defaults.headers.common.Authorization = value;
        }

        function getUserInfo() {
            if (!token) {
                return getBadTokenPromise();
            }

            return $http({
                method: 'GET',
                url: gitHubDomain + '/user'
            }).then(function successHandler(response) {
                return response.data;
            });

        }

        function getReposForUser() {
            if (!token) {
                return getBadTokenPromise();
            }

            return $http({
                method: 'GET',
                url: gitHubDomain + '/user/repos',
            }).then(function ajaxSuccessHandler(response) {
                return response.data;
            });
        }

        function getBadTokenPromise() {
            var deferred = $q.defer();
            deferred.reject('You must have a GitHub token!');
            return deferred.promise;
        }

    }

})();
