(function(ns) {
    'use strict';

    ns['view-1'] = {};

    ns['view-1'].load = function load() {
        // Do an ajax call to get article data
        $('#view-1 article').append(
            '<p>This is the ARTICLE. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
        );
    };


    window.spa = ns;

})(window.spa || {});
