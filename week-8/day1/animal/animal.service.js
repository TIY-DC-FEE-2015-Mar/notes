(function() {
    'use strict';

    angular.module('zoo')
        .factory('AnimalService', AnimalService);

    function AnimalService() {
        return {
            get: function(id) {
                var data = [
                    { name: 'Tommy', species: 'Tiger' },
                    { name: 'Billy', species: 'Baboon' },
                    { name: 'Jack', species: 'Rabbit' }
                ];

                if (id) {
                    return data[id];
                } else {
                    return data;
                }
            }
        };
    }

})();
