(function() {
    'use strict';

    angular.module('lecture')
        .directive('modal', Modal);

    function Modal() {
        return {
            restrict: 'E',
            templateUrl: 'app/modal.template.html',
            transclude: true
        };
    }
})();
