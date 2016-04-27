(function() {
    'use strict';

    angular.module('gh')
        .controller('WelcomeController', WelcomeController);

    WelcomeController.$inject = ['$state', 'GitHubService'];

    function WelcomeController($state, GitHubService) {
        var that = this;
        this.user = null;
        this.token = '';
        this.message = null;

        this.login = function login() {
            GitHubService.setUserToken(this.token);
            GitHubService.getUserInfo()
                .then(function handleUserData(user) {
                    console.log(user);
                    that.user = user;
                    $state.go('repos');
                })
                .catch(function userDataError(errMessage) {
                    that.message = 'Unable to get user data from GitHub: ' + errMessage;
                });
        };
    }

})();
