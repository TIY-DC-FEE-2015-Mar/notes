(function() {
    'use strict';

    angular.module('gh')
        .controller('RepoListController', RepoListController);

    RepoListController.$inject = ['GitHubService'];

    function RepoListController(GitHubService) {
        var that = this;
        this.list = [];

        GitHubService.getReposForUser()
            .then(function reposHandler(repoList) {
                that.list = repoList;
            });
    }

})();
