(function() {
    'use strict';

    var ghOrgRepos = 'https://api.github.com/orgs/theironyard/repos';

    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function stateChange() {
    //     // readyStates: 0-4
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         // process the data on completion and success
    //         console.log( xhr.responseText );
    //     }
    //
    //     // what about errors???
    // };
    // xhr.open('GET', ghOrgRepos);
    // xhr.send( /* POST/PUT data */ );

    $.ajax({
        type: 'GET',
        url: ghOrgRepos,
        dataType: 'json',
        success: function showGHRepos(data) {
            console.log( data, typeof data );

            $('.message')
                .removeClass('error')
                .addClass('success')
                .text('I got yo data.');
        },
        error: function handleErrors(xhr) {
            console.log( xhr );

            if (xhr.status === 404) {
                var errorDetail = JSON.parse( xhr.responseText );

                $('.message')
                    .removeClass('success')
                    .addClass('error')
                    .text('You messed up. Try a proper GitHub org or read the docs: ' + errorDetail.documentation_url);
            }

        },
        complete: function requestDone() {
            console.log( 'All done!' );
        }
    });


    var user = {
        id: 13,
        name: getName(),
        age: (10 * 3) + 5
    };

    var userJSONString = JSON.stringify( user );
    // "{ "id": 13, "name": "Jordan", "age": 35 }"
    console.log( userJSONString, typeof userJSONString );

    console.log( userJSONString.name );

    var properJSObject = JSON.parse( userJSONString );

    console.log( properJSObject.name );

    function getName() {
        return 'Jordan';
    }


    $.getJSON(ghOrgRepos)
        .done(function handleData(data) {
            console.log( data );

            $('.message')
                .removeClass('error')
                .addClass('success')
                .text('I got yo data (in sh)');
        })
        .fail(function handleFailure(xhr) {
            console.log(xhr);
            // ...
        });


})();
