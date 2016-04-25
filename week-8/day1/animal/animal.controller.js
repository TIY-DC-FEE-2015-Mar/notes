(function() {
    'use strict';

    angular.module('zoo')
        .controller('AnimalController', AnimalController);

    AnimalController.$inject = ['AnimalService'];
    function AnimalController(animals) {
        this.list = animals.get();
    }

})();
