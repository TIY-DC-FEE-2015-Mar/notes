(function(ns) {
    'use strict';

    ns['view-2'] = {};

    ns['view-2'].load = function loadView2() {
        console.log('loading view 2');
    };

    $('#view-2 form').submit(function viewTwoSubmit(event) {
        event.preventDefault();

        var nextView = $(this).attr('action');

        // maybe... if the Ajax call is succesful...
        // $.ajax({
        //   ...
        //   success: function dataSuccess(data) {
        //     // in here... go to nextView
        //   }
        // });

        window.location.hash = nextView;

    });

    window.spa = ns;

})(window.spa || {});
