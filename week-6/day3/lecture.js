(function() {
    'use strict';

    $('.stuff').click(doStuff);

    function doStuff() {
        // reset localStorage first...
        localStorage.setItem( 'userData', null );

        getData( 'data-init.json' )
            .then( workIsDone )
            .then( workIsDone )
            .then( workIsDone )
            .then( workIsDone )
            .fail(function workFailed(xhr) {
                console.warn( xhr );
                $('.results').append( 'Ajax failure! ' + xhr.status );
            });
    }

    function getData( url ) {
        return $.ajax({
            url: url,
            dataType: 'json',
            headers: {
                Authorization: 'token ' + localStorage.getItem('theToken')
            }
        });
    }

    // this is what I use in my .then() calls
    function workIsDone( data ) {
        if (typeof data === 'string') {
            $('.results').append( data );
            return;
        }

        var userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            userData = [];
        }
        userData = userData.concat( data.results );
        localStorage.setItem( 'userData', JSON.stringify(userData) );

        $('.results').append( JSON.stringify( data.results ) );
        if (data.next) {
            return getData( 'data-' + data.next + '.json' );
        } else {
            return 'no more results!';
        }
    }


})();
