(function() {
    'use strict';

    angular.module('zoo')
        .controller('AdminController', AdminController);

    function AdminController() {
        this.ticketTypes = [
            { age: 'Adult', cost: 24.00, length: '1 day' },
            { age: 'Child', cost: 14.00, length: '1 day' },
            { age: 'Adult', cost: 56.00, length: '3 day' },
            { age: 'Child', cost: 30.00, length: '3 day' },
        ];
    }

})();
