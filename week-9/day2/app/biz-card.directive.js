(function() {
    'use strict';

    angular.module('lecture')
        .directive('bizCard', BizCard);

    function BizCard() {
        return {
            restrict: 'A',
            templateUrl: 'app/biz-card.template.html',
            scope: {
                employee: '=info'
            }
        };
    }
})();
