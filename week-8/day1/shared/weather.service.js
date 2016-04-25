(function() {
    'use strict';

    angular.module('zoo')
        .factory('WeatherService', WeatherService);

    /* ********** Public API *********** */

    function get() {
        return doWeatherAjaxCall() + ' ' + counter;
    }


    /* ********** Constructor & Vars *********** */

    var counter = 0;

    function WeatherService() {
        counter++;

        return {
            counter: counter,  /// will only ever be 1
            location: 'Washington',
            get: get
        };
    }


    /* ********** Private Methods *********** */

    function doWeatherAjaxCall() {
        return 'Sunny!';
    }

})();
