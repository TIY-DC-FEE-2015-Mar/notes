(function() {
    'use strict';

    angular.module('lecture')
        .directive('myTime', MyTime);

    MyTime.$inject = ['dateFilter', '$interval'];
    function MyTime(dateFilter, $interval) {
        return {
            restrict: 'EA',
            templateUrl: 'app/my-time.template.html',
            link: myTimeLink,
            scope: {
                format: '='
            }
        };

        function myTimeLink(scope, element, attributes, controller) {
            console.log(attributes);
            updateTime();
            $interval( updateTime, 1000 );

            function updateTime() {
                var now = new Date();
                element[0].querySelector('time').innerText = dateFilter(now, scope.format);
                element[0].querySelector('.clock-face').style.backgroundColor = '#' + dateFilter(now, 'HHmmss');
            }
        }
    }

})();
