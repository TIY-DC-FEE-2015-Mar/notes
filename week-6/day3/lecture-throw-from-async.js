(function() {
    'use strict';

    $('.stuff').click(doStuff);  // 1

    function doStuff() {
        // 2
        try {
            // 3
            getData(function dataCallback(data) {

                $('.results').text('I am DONE! ' + data);

            });
            // 5
        } catch(err) {
            // this will never catch anything!
            console.log('I will NOT execute');
        }
        // 6
        console.log('I set up the ajax call, now I am done.');
    }

    function getData(callback) {
        // 3
        setTimeout(function fakeAjaxSuccessHandler() {
            // "a"
            if (Math.random() > 0.5) {
                // ooops! Error!

                throw new Error('Ooopsie!');  // this is BAD!
                // we can never catch this error, because JS core executes this callback, not us

            } else {
                callback('...Data...');
            }
        }, 1000);
        // 4
    }


    // function ourTimeout(callback, time) {
    //     var o;
    //     // do some stuff for a while until the time expires
    //     for(var i=0; i<(time * 1000); i++) {
    //         o = new Object();
    //     }
    //     callback();
    // }


})();
