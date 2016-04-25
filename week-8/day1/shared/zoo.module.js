(function() {
    'use strict';

    angular.module('zoo', ['ui.router'])
        .config(zooConfig);

    zooConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function zooConfig( $stateProvider, $urlRouterProvider, $locationProvider ) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'welcome/welcome.html'
            })
            .state('tickets', {
                url: '/tickets',
                templateUrl: 'admin/tickets.html',
                controller: 'AdminController',
                controllerAs: 'admin'
            })
            .state('animals', {
                url: '/animals',
                templateUrl: 'animal/animal-list.html',
                controller: 'AnimalController',
                controllerAs: 'animalz'
            })
            .state('animals.animalDetail', {
                url: '/:id',
                templateUrl: 'animal/animal-detail.html',
                controller: 'AnimalDetailController',
                controllerAs: 'animal'
            });

    }

})();
