(function() {
    'use strict';

    console.log('wc');

    angular.module('zoo')
        .controller('WelcomeController', WelcomeController);

    var counter = 0;

    WelcomeController.$inject = ['WeatherService'];

    function WelcomeController(weather) {
        counter++;

        this.title = 'Welcome to the Jungle ' + counter;

        this.getDailyLogo = function getDailyLogo() {
            return '/images/logo.png';
        };

        this.getWeather = function getWeather() {
            return weather.get();
        };

    }

})();
