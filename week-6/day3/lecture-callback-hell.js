(function() {
    'use strict';

    $('.stuff').click(doStuff);

    function doStuff() {
        getData( 'data-init.json', function dataCallback(data) {
            if (data instanceof Error) {
                $('.results').append( 'Oh noes! ' + data.message );
            } else {
                $('.results').append( JSON.stringify(data.results) );

                getData( 'data-' + data.next + '.json', function nextCallback(nextData) {

                    if (nextData instanceof Error) {
                        $('.results').append( 'Oh noes (next)! ' + nextData.message );
                    } else {
                        $('.results').append( JSON.stringify(nextData.results) );
                    }

                });
            }
        });
    }


    function getData(url, callback) {
        $.ajax({
            url: url,
            dataType: 'json',
            success: function ajaxSuccess(data) {
                callback(data);
            },
            error: function ajaxError(xhr) {
                console.error(xhr);
                callback( new Error('Ajax call failed: ' + xhr.status) );
            }
        });
    }


})();
