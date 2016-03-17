// I'm a comment

/*
I'm multi-line!
*/

var myElement = document.getElementById('foobar');
console.log('I\'m \nworking');
console.log(myElement);

var favoriteNumber = 13;
var firstName = 'Jordan';
var age = 35.6;
var isAwesome = true;

console.log(favoriteNumber, firstName, age, isAwesome);

age = 36;

console.log(age);

var favoritePet;   // undefined
var favoriteWine = null;

console.log(favoritePet, favoriteWine);

var alias = firstName;

firstName = 'John';

console.log(firstName, alias);

var radius = 10;
var circumference = 2 * Math.PI * radius;

// *, +, -, /

console.log(circumference);

// % - modulus / modulo

console.log( 5 % 2 );


// Functions

function getFullName(firstName, lastName, age) {
    var fullName = firstName + ' ' + lastName;

    if ( !Number(age) ) {
        age = 0;
    }

    if ( firstName == 'Jordan' ) {

        fullName = fullName + ' is awesome!';

    } else if ( firstName == 'Matt' ) {

        fullName = fullName + ' makes board games.';

    } else if ( firstName == 'Liz' ) {
        // implement me!
    } else {
        // what now???
    }

    if ( age >= 35 ) {
        fullName = fullName + ' That person is old.';
    }

    if ( firstName === 'Jordan' && age >= 35 ) {
        fullName = fullName + " But he's still cool.";
    }

    if ( firstName === 'Matt' || (age < 35 && lastName === 'Dabbs') ) {
        fullName = fullName + ' They are cool too';
    }

    return '***' + fullName + '***';
}

42;  // this works... but does nothing!

console.log( getFullName('Jordan', 'Kasper', 35) );
// console.log( fullName );  // ReferenceError!!
console.log( getFullName('Matt', 'Grosso') );
console.log( firstName );
