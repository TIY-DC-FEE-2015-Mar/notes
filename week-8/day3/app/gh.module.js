(function() {
    'use strict';

    angular.module('gh', ['ui.router'])
        .config(appConfig)
        .run(startup);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/'
            })
            .state('repos', {
                url: '/repos',
                templateUrl: 'repos/repo-list.template.html',
                controller: 'RepoListController',
                controllerAs: 'repos'
            })
            .state('repoDetail', {
                url: '/repos/:id',
                template: '<h2>The Repo: {{repo.id}}!</h2>',
                controller: function($stateParams) {
                    this.id = $stateParams.id;
                },
                controllerAs: 'repo'
            });

    }

    function startup() {
        document.querySelector('main').style.display = 'block';
    }

})();
