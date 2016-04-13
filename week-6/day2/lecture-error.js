(function() {
    'use strict';


    var theJSON;
    try {
        theJSON = JSON.parse(" ... ");
    } catch(err) {
        // handle the error somehow... log out the error
        // but use some default value otherwise
        theJSON = {};
    }

    var o = {
        foo: theJSON
    };


    /**
     * Add two numbers together
     * @param {Number} x
     * @param {Number} y
     * @throws {Error}
     * @return {Number} The sum
     */
    function addNumbers(x, y) {
        if (!Number(x) || !Number(y)) {
            throw new Error('You must give me numbers! But you game me ' + x + ' & ' + y);
        }
        return x + y;
    }

    function addABunchOfNumbers(x, y, a, b) {
        var resultOne = 0;
        var resultTwo = 0;

        try {
            resultOne = addNumbers(x, y);
            resultTwo = addNumbers(a, b);
        } catch(err) {
            console.warn('umm... this no worky');
            throw err;
        }

        return resultOne + resultTwo;
    }

    document.querySelector('.add').addEventListener('click', function() {
        try {
            var result = addABunchOfNumbers(1, 2, 3, "foo");
            console.log( 'first call worked!', result );  // will not execute!!
        } catch(err) {
            document.querySelector('.messages').innerText += err.message;
        }

        addABunchOfNumbers(1, 2, 3, "bar");
        console.log('I will NOT execute!');
    });


    window.onerror = function errorHandler(message, file, line, char, err) {
        console.log('Caught an uncaught error!');
        document.querySelector('.messages').innerText += err.message;
    };


})();
