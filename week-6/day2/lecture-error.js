(function() {
    'use strict';


    function addNumbers(x, y) {
        if (!Number(x) || !Number(y)) {
            throw new Error('You must give me numbers! But you game me ' + x + ' & ' + y);
        }
        return x + y;
    }

    function addABunchOfNumbers(x, y, a, b) {

        var resultOne = addNumbers(x, y);
        var resultTwo = addNumbers(a, b);

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
