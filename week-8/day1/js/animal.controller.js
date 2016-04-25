(function() {
    'use strict';

    angular.module('zoo')
        .controller('AnimalController', AnimalController);

    function AnimalController() {
        this.list = [
            { name: 'Tommy', species: 'Tiger' },
            { name: 'Billy', species: 'Baboon' },
            { name: 'Jack', species: 'Rabbit' }
        ];
    }

})();
