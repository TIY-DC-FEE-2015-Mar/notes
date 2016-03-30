
(function(ns) {
    'use strict';

    var data = [];

    ns.addItem = function addItem(text) {
        data.push( {
            text: text,
            timestamp: Date.now()
        } );

        ns.renderItem( data[data.length-1] );
    };

    var appName = 'TODO App';
    ns.appName = appName;

    ns.markItemAsCompleted = function markItemAsCompleted(todoId) {
        // go find the data and set a "complete" switch on it
    };

    ns.removeItem = function removeItem(theIdOfTheOneToRemove) {
        // splice the data array to take out the one you want to remove
    };

    // how many items do I have?
    // data.length

    ns.howManyItemsYouGot = function howMany() {
        return data.length;
    };


    window.todos = ns;

})(window.todos || {});
