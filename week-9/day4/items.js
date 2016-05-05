
module.exports = function() {

    return {
        getAll: getAll
    };

    function getAll() {
        // I would actually get all items from a model (i.e. Angular Service)
        var items = [
            {name: 'Jordan'},
            {name: 'Noelle'},
            {name: 'Matt'},
            {name: 'Alex'},
        ];

        var itemHTML = '';
        items.forEach(function(item) {
            itemHTML += '<li>' + item.name + '</li>';
        });

        return '<html><h1>Hello Foo</h1><ul>' + itemHTML + '</ul></html>';
    }

};
