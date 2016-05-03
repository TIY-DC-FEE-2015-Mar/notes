(function() {
    'use strict';

    angular.module('lecture')
        .controller('ClockController', ClockController);

    function ClockController() {
        this.employees = [
            { name: 'Jordan', id: 123 },
            { name: 'Liz', id: 853 },
            { name: 'Ryan', id: 2465 },
            { name: 'Alex', id: 27865 },
            { name: 'Noelle', id: 6784 },
            { name: 'Matt', id: 345345 }
        ];
    }
})();
