(function() {
    'use strict';

    angular.module('lecture', ['ui.router'])
        .config(lectureConfig);

    lectureConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function lectureConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('home', {
                url: '/',
                template: '<p>This is home</p>'
            })
            .state('clock', {
                url: '/clock',
                templateUrl: 'app/clock.template.html',
                controller: 'ClockController',
                controllerAs: 'clock'
            });
    }

})();
