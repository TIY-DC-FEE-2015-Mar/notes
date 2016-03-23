
// Word Frequency homework
function countingWords(wordBody) {
    wordBody = '' + wordBody;
    var splitBody = wordBody.toLowerCase().split(' ');
    var wordFrequencies = {};
    splitBody.forEach(function wordCounter(entry, i) {
        wordFrequencies[entry] = (wordFrequencies[entry]) ? wordFrequencies[entry] + 1 : 1;
    });
    return wordFrequencies;
}

// console.log(
//   countingWords(  "A cat in a hat is a silly cat indeed."  )
// );

// FizzBuzz assignment with recursive functions

function fizzBuzz(limit, count) {
    count = count || [];

    var currentNum = count.length + 1;
    var nextEntry = '';
    if (!(currentNum % 3)) {
        nextEntry += 'fizz';
    }
    if (!(currentNum % 5)) {
        nextEntry += 'buzz';
    }
    if (!nextEntry) {
        nextEntry = currentNum;
    }

    count.push( nextEntry );

    if (currentNum < limit) {
        return fizzBuzz( limit, count );
    }

    return count;
}

//console.log( fizzBuzz(18) );

// FUNCTION LECTURE NOTES

var x = 42;
// x();  // TypeError

function foo() { console.log('foo!'); }
console.log(foo.name, typeof foo.name);

var hi = foo;
console.log(hi.name);
hi();

var barbie = function bar() {
    console.log('bar!');
};
// bar();  // this variable does not exist!
console.log(barbie.name);
barbie();

// function() {
//     console.log('I am anonymous!');
// }

// how can I call this????
// you can't here, because there is no variable
// var otherFn =  ...???

function sum() {
    console.log(arguments.length, arguments[1]);

    // nooooope
    // arguments.forEach(function(arg) {
    //     console.log(arg);
    // });

    var sum = 0;
    for (var i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log( sum(1, 2) );  // 3
console.log( sum(1, 6, 2, 8, 3) );  //20

var names = ['Alex', 'Ryan', 'Liz'];
var seperator = ' ';

// These two are equivalent outside of a function
// var chars = 42;
// window.chars = 42;

function convertName(name) {
    'use strict';
    var names = name.split(seperator);
    var chars = names[0].split('');
    chars[0] = chars[0].toUpperCase();
    names[0] = chars.join('');

    // BAD!!
    // var names = name.split(' ');

    chars = names[1].split('');
    chars[0] = chars[0].toUpperCase();
    names[1] = chars.join('');

    // var console = {
    //     log: function log(msg) {
    //         alert(msg);
    //     }
    // };

    console.log(names);

    return names.join(' ');
}

console.log( convertName('jordan kasper') );
console.log(names); // which one prints!


// can't access vars in other functions unless they return it

function doStuff() {
    var b = 42;
    return b;
}
function otherStuff() {
    var a = doStuff() + 2;
    // console.log(b);  // ReferenceError
    return a;
}
otherStuff();

// you CAN access vars declared in a PARENT scope

function doMath(a, b) {
    'use strict';
    var result = a * b;

    // ALL _variables_ get hoisted to the top of their nearest scope
    console.log( finalResult );
    // function DECLARATIONS get hoisted WITH their value (the function)
    console.log( divideBy2 );
    // function EXPRESSIONS do NOT have their value hoisted, only the variable
    console.log( foo );

    finalResult = 45;
    console.log(finalResult);

    var finalResult = divideBy2();
    console.log(finalResult);

    function divideBy2() {
        var denominator = 2;
        return result / denominator;
    }

    var foo = function someThing() {};

    // console.log(denominator); // ReferenceError

    return finalResult;
}

console.log(  doMath(3, 3)  );
