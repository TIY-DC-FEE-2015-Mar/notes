
(function() {
    'use strict';

    var ghOrgRepos = 'https://api.github.com/orgs/theironyard/repos';

    $.ajaxSetup({
        headers: {
            Authorization: 'token d7521a4ce5647a4d5c9a57ac40a61455a488da72'
        },
        error: function handleError(xhr) {
            console.log(xhr);
            if (xhr.status === 404) {

                // ns.showMessage('Enter a valid username or org!');
                $('.message').text('Enter a valid username or org!');

            } else if (xhr.status === 403) {
                if (xhr.getResponseHeader('X-RateLimit-Remaining') <= 0) {
                    $('.message').text('BACK OFF!');
                } else {
                    $('.message').text('You are not allowed to do that.');
                }
            }
            callback( null );
        }
    });

    console.log('before ajax call');

    // setTimeout(function printHello() {
    //     console.log('hello');
    // }, 1);
    //
    // var d;
    // for (var i = 0; i<20000000; i++) {
    //     d = new Date();
    // }


    function getData(url, callback) {
        $('.message').text('Loading data...');

        $.ajax({
            url: url,
            type: 'GET',
            success: function handleData(data) {
                console.log( 'inside handleData' );

                iterateOverData(data);

                $('.message').text('Data loaded!');
                callback(data);   // this will point to the function named: allDone
            }
        });
    }

    function iterateOverData(repos) {
        repos.forEach(function handleOneItem(dataItem) {
            console.log(dataItem.name);
        });
    }

    function allDone(result) {
        console.log('all done for real!', result);
    }
    // in some other module maybe?
    getData( ghOrgRepos, allDone );

    console.log( 'after the async code?' );

})();
