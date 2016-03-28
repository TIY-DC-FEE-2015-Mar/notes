
(function(todos) {
    'use strict';

    $('form').submit(function addItemHandler(event) {
        event.preventDefault();

        todos.addItem( $(this).find('input').val() );
    });

    todos.renderItem = function renderItem(itemData) {
        $('.items')
            .append( $('<li>').text( itemData.text + ' - ' + itemData.timestamp ) );
    };


    window.todos = todos;

})(window.todos || {});
