(function() {
    'use strict';

    angular.module('zoo')
        .controller('AnimalDetailController', AnimalDetailController);

    AnimalDetailController.$inject = ['$stateParams', 'AnimalService'];

    function AnimalDetailController($stateParams, animals) {
        this.detail = animals.get( $stateParams.id );
    }

})();
