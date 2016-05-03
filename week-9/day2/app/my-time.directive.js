(function() {
    'use strict';

    angular.module('lecture')
        .directive('myTime', MyTime);

    MyTime.$inject = ['dateFilter', '$interval'];
    function MyTime(dateFilter, $interval) {
        return {
            restrict: 'EA',
            templateUrl: 'app/my-time.template.html',
            link: myTimeLink
        };

        function myTimeLink(scope, element, attributes, controller) {
            updateTime();
            $interval( updateTime, 1000 );

            function updateTime() {
                var now = new Date();
                element[0].querySelector('time').innerText = dateFilter(now, 'HH:mm:ss');
                element[0].querySelector('.clock-face').style.backgroundColor = '#' + dateFilter(now, 'HHmmss');
            }
        }
    }

})();
