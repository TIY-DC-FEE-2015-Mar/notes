
(function(todos) {
    'use strict';

    var data = [];

    todos.addItem = function addItem(text) {
        data.push( {
            text: text,
            timestamp: Date.now()
        } );

        todos.renderItem( data[data.length-1] );
    };




    window.todos = todos;

})(window.todos || {});
