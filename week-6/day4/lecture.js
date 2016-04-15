(function() {
    'use strict';

    $('.stuff').click(doStuff);

    function doStuff() {
        // reset localStorage first...
        localStorage.setItem( 'userData', null );

        // Q.allSettled([
        //     getData('f1'),
        //     getData('f2'),
        //     getData('f3')
        // ])
        //     .then(function allDone(results) {
        //
        //     });

        getData( 'data-inits.json' )
            .then(
                workIsDone,
                function firstCallFailed(xhr) {
                    $('.results').append( 'Ajax failure on call 1! ' + xhr.status );
                }
            )
            .then( workIsDone )
            .then( workIsDone )
            .then( workIsDone )
            .fail(function workFailed(xhr) {
                if (xhr) {
                    console.warn( xhr );
                    $('.results').append( 'Ajax failure! ' + xhr.status );
                } else {
                    $('.results').append( 'Ajax failure handled earlier!');
                }
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


    function doMoreStuff() {
        // var p = new Promise(function(resolve, reject) {
        //     setTimeout(function() {
        //         resolve({ foo: 'bar' });
        //     });
        // });
        // return p;

        var d = $.Deferred();
        setTimeout(function waitawhile() {
            d.resolve({ foo: 'bar' });
        }, 1000);
        return d.promise;
    }




})();
