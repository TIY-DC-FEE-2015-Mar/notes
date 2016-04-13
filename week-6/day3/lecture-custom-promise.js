(function() {
    'use strict';

    $('.stuff').click(doStuff);

    function doStuff() {
        getData()
            .then(function workIsDone( data ) {
                $('.results').append( data );
                return getData();
            })
            .then(function moreWorkIsDone( data ) {
                $('.results').append( ' (CHAINED) ' + data );
            })
            .catch(function workFailed(err) {
                console.warn(err);
                $('.results').append( err.message );
            });
    }

    function getData() {
        var p = new Promise(function ourWork(resolve, reject) {

            setTimeout(function dataCompletion() {
                if (Math.random() > 0.5) {
                    reject( new Error('FAIL') );
                } else {
                    resolve(' ... Data! ... ');
                }
            }, 500);

        }); // end of our promise definition

        return p;
    }


})();
