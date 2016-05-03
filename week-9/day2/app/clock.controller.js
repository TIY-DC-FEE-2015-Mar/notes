(function() {
    'use strict';

    angular.module('lecture')
        .controller('ClockController', ClockController);

    function ClockController() {
        this.employees = [
            { name: 'Jordan', id: 123, phone: '1234567890' },
            { name: 'Liz', id: 853, phone: '1234567890' },
            { name: 'Ryan', id: 2465, phone: '1234567890' },
            { name: 'Alex', id: 27865, phone: '1234567890' },
            { name: 'Noelle', id: 6784, phone: '1234567890' },
            { name: 'Matt', id: 345345, phone: '1234567890' }
        ];


    }
})();
