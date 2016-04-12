(function() {
    'use strict';

    function Shop( name, owner ) {

        this.name = name;
        this.owner = owner;
        this.balance = 0;
        this.items = {};

    }

    /**
     * Adds an item to the shop inventory
     * @param {String} itemName The name of the item
     * @param {Number} quantity OPTIONAL... defaults to 0
     * @param {Number} cost
     *
     * @throws {Error}
     * @return {Object}  The new item created
     */
    Shop.prototype.addItem = function addItem(itemName, quantity, cost) {
        if (!itemName || typeof itemName !== 'string') {
            var err = Error( 'You must have an item name!' );
            err.code = 57;

            throw err;
        }
        if (!cost) {
            // this is frail! what if we mispel a property?
            return { errorCode: 23, message: 'You must have a cost!' };
        }

        this.items[itemName] = {
            "name": itemName,
            "quantity": quantity || 0,
            "cost": cost
        };

        return this.items[itemName];
    };


    // somewhere else in our application/code...

    function WidgetShop( name, owner, location ) {
        // `this` will point to the blank canvas that is being created right now
        // Shop();
        // Execute the Shop function and make `this` inside Shop equal the first argument below
        Shop.call( this, name, owner );
        this.location = location;
    }
    // set up the prototype chain
    // Object.create() same as: {}
    WidgetShop.prototype = Object.create(Shop.prototype);
    WidgetShop.prototype.constructor = WidgetShop;

    /**
     * This function sells an item from the shop inventory
     * @param  {String} itemName  The item name you want to sell
     * @return {Object}           The item just sold OR `null` if unable to sell
     */
    WidgetShop.prototype.sell = function sell( itemName ) {
        if (this.items[itemName].quantity < 1) {
            console.error('no quantity left!');
            return null;
        }
        this.items[itemName].quantity--;
        this.balance += this.items[itemName].cost;
        return this.items[itemName];
    };


    // elsewhere... we can use our new objects

    var bobsPlace = new WidgetShop('bobs place', 'bob');
    var newItem = bobsPlace.addItem( 't-shirt', 5, 1 );
    bobsPlace.addItem( 'widget #7', 250, 70 );

    try {
        var newItem = bobsPlace.addItem( 5, 1 );
        // if we actually `return` the Error objects...
        // if (newItem instanceof Error) {
        //     // oopsy!
        //     console.error(newItem);
        //     document.querySelector('.messages').innerText = newItem.message + '-' + newItem.code;
        // }

        // if this succeeded (did NOT throw an error, we can execute more code here)

        console.log('I will NOT execute!');

    } catch(err) {
        if (err instanceof ReferenceError) {
            console.error('This was a reference error!');
            // Note that we are not actually throwing ReferenceErrors in our code today
        }

        console.log('CAUGHT an error', err);
        document.querySelector('.messages').innerText = err.message + '-' + err.code;

    } finally {
        // regardless of whether an error was thrown or not, do this
        console.log('I will ALWAYS execute');
    }


    bobsPlace.sell( 't-shirt' );
    console.log( bobsPlace.items['t-shirt'].quantity, bobsPlace.balance );

    bobsPlace.sell( 't-shirt' );
    bobsPlace.sell( 't-shirt' );
    bobsPlace.sell( 't-shirt' );
    bobsPlace.sell( 't-shirt' );

    console.log( bobsPlace.items['t-shirt'].quantity, bobsPlace.balance );


    // in a completely different module...

    document.querySelector('button').addEventListener('click', function buyHandler() {
        var itemSold = bobsPlace.sell( 't-shirt' );
        if (!itemSold) {
            document.querySelector('.messages').innerText = 'No item for you!';
        }
    });


})();
