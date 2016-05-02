(function() {
    'use strict';

    angular.module('lecture', ['ui.router'])
        .config(lectureConfig)
        .run(lectureStartup);

    lectureConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function lectureConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: '<p>This is home</p>'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'user/login.template.html'
            })
            .state('my-profile', {
                url: '/profile',
                templateUrl: 'secure/my-profile.template.html',
                secure: true,
                controller: function() {
                    console.log('running profile controller (should not appear)');
                }
            });
    }

    lectureStartup.$inject = ['$rootScope', '$state'];
    function lectureStartup($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function checkAuth(e, toState) {

            var isLoggedIn = false;  // get this from a service!!

            if (toState.secure && !isLoggedIn) {

                // if trying to access /foobar ... do something different

                console.log('not logged in!');

                e.preventDefault();
                $state.go('login', { msg: 'hello, you are not logged in...' });
            }

        });
    }

})();
