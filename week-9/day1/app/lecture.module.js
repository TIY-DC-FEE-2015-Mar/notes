(function() {
    'use strict';

    angular.module('lecture', ['ui.router'])
        .config(lectureConfig)
        .run(lectureStartup);

    lectureConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function lectureConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('home', {
                url: '/',
                template: '<p>This is home</p>'
            })
            .state('error', {
                url: '/oops',
                templateUrl: 'app/error.template.html',
                controller: 'ErrorController',
                controllerAs: 'error',
                params: {
                    msg: 'Oops, something went horribly wrong!'
                }
            })
            .state('404', {
                url: '/404',
                templateUrl: 'app/error.template.html',
                controller: 'ErrorController',
                controllerAs: 'error',
                params: {
                    msg: 'Sorry, but that page does not exist!'
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'user/login.template.html',
                params: {
                    msg: null
                },
                controller: 'LoginController',
                controllerAs: 'login'
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

    lectureStartup.$inject = ['$rootScope', '$state', 'LoginService'];
    function lectureStartup($rootScope, $state, LoginService) {
        $rootScope.$on('$stateChangeStart', function checkAuth(e, toState) {

            var isLoggedIn = LoginService.isLoggedIn();  // get this from a service!!

            if (toState.secure && !isLoggedIn) {

                // if trying to access /foobar ... do something different

                console.log('not logged in!');

                e.preventDefault();
                $state.go('login', { msg: 'hello, you are not logged in...' });
            }

        });
    }

})();
