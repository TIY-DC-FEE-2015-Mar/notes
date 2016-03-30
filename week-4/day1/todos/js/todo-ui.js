
(function(todos) {
    'use strict';

    $('form').submit(function addItemHandler(event) {
        event.preventDefault();

        todos.addItem( $(this).find('input').val() );
    });

    $('.items').on('click', '.complete', function doCompletion() {
        completeItem( $(this).closest('li') );
        todos.markItemAsCompleted( 'some way of identifying this item in the data' );
    });

    $('.items').on('click', '.delete', function doCompletion() {
        todos.removeItem( 'the id of the item or index?' );
    });

    var itemCounter = 0;
    todos.renderItem = function renderItem(itemData) {
        $('.items')
            .append( $('<li>').text( itemData.text + ' - ' + itemData.timestamp ) );

        /**
         * if (the item is complete) {
         *   completeItem(theElement);
         * }
         */

        // incremenet UI counter
        itemCounter++;
    };

    // todos.appName

    /**
     * what this thing does...
     * @param {HTMLElement} todoItem The item I want to complete
     */
    function completeItem(todoItem) {
        todoItem.addClass('complete');
    }


    window.todos = todos;

})(window.todos || {});
