(function() {
    'use strict';

    angular.module('lecture')
        .controller('ErrorController', ErrorController);

    ErrorController.$inject = ['$stateParams'];
    function ErrorController($stateParams) {
        this.msg = $stateParams.msg;
    }

})();
