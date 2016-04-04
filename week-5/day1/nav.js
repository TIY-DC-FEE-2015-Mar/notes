
(function(ns) {
    'use strict';

    // $('nav a').on('click', function navHandler(e) {
    //     var view = $(this).attr('href');
    //     $('.view').hide();
    //     $(view).show();
    // });

    window.addEventListener('hashchange', function hashNav() {
        doNav();
    });

    function doNav() {
        $('.view').hide();
        var newView = $( window.location.hash ).show();

        $('nav li').removeClass('active');

        $('nav a[href="' + window.location.hash + '"]').closest('li').addClass('active');

        if (newView.length === 0) {
            // if they try to load a bad view, default to view-1!
            window.location.hash = '#view-1';
        } else {
            // do stuff the view needs

            var viewName = window.location.hash.substr(1);
            if (ns[viewName] && ns[viewName].load) {
                // ns['view-1'].load();
                ns[ viewName ].load();
            }
        }
    }


    // navigate to a view when the page loads
    ns.init = function() {
        doNav();
    };

    window.spa = ns;

})(window.spa || {});
