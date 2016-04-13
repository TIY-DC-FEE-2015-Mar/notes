(function() {
    'use strict';

    $('.stuff').click(doStuff);

    function doStuff() {
        getData(function dataCallback(data) {
            if (data instanceof Error){
                $('.results').text( data.message );
            } else if (typeof data === 'string') {
                $('.results').text('I am DONE! ' + data);
            } else {
                $('.results').text('Unexpected data provided, please contact us.');
            }
        });

        console.log('I set up the ajax call, now I am done.');
    }

    function getData(callback) {
        setTimeout(function fakeAjaxCompletion() {
            if (Math.random() > 0.5) {
                // ooops! Error!
                var err = new Error('This failed!');
                err.code = 403;
                console.warn(err);
                callback( err );
            } else {
                console.log('ajax was successful');
                callback('...Data...');
            }
        }, 1000);
    }


})();
