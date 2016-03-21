

var x = parseInt("123px55");
var y = parseInt("I have 123 pixels");
var z = parseInt("3.1415");  // use parseFloat()

x; // 123 as a number ... even with a unit
y; // NaN
z; // 3

var j = 3;
j + 2;  // this is 5, but not 'j' is not 5 because there is no assignment
j++; // j is now 4 because unary operators do assignment

var game = {
    name: 'Golf',
    course: 'Pebble Beach',
    users: {
        'matty-g': {
            username: 'mattyg',
            name: 'Matt Grosso',
            score: 56894,
            startDate: (new Date()).getTime()
        },
        jordan: {
            name: 'Jordan',
            username: 'jordan',
            score: 235
        }
    },
    addUser: function addUser(username, name) {
        console.log(this);
        this.users[username] = {
            'name': name,
            'username': username,
            score: 0,
            startDate: (new Date()).getTime()
        };
    }
};

// var desiredName = document.querySelector('input').value;
var desiredName = 'jordan'; // (but really we want to get it from input, see above)
var desiredUserObj = game.users[desiredName];

// console.log(desiredUserObj, desiredUserObj.score);
desiredUserObj.score = 1000000;
// console.log(game.users.jordan.score);  // 1000000

var ryan = { name: 'Ryan', username: 'Hawyanha', score: 0 };

// console.log(foobar);  // ReferenceError
// console.log(game.users.ryan);
game.users.ryan = ryan;
// console.log(game.users);

game.addUser('alex', 'Alexander');
// console.log(game.users);

// console.log( Object.keys(game.users) );

var obj = new Object();
obj.name = "Jordan";

var today = new Date();
var alexBirthday = new Date('9/4/2016 21:00');

console.log(today);
console.log(today.toISOString());
console.log(alexBirthday.getHours());

today.getHours() + 9;  // 24

console.log( today.getTime(), Date.now() );

// Add 9 hours to the current time
var nineHours = Date.now() + ( 9 * 60 * 60 * 1000 );

console.log( nineHours, new Date(nineHours) );

// MATH

// Math.sin() cos() sqrt()

Math.max(1, 6, 2, 0, 45, 3);
Math.min()

Math.round(3.4); // 3
Math.round(3.5); // 4
// Math.floor() Math.ceil()

console.log( Math.random() ); // 0-1

var usernames = Object.keys(game.users);
var luckyUser = usernames[ Math.floor( Math.random() * usernames.length ) ];

console.log( luckyUser, game.users[luckyUser] );

// Strings

var name = "Jordan, Kasper";
console.log(name.length);
console.log(name.toUpperCase());

var nameObj = new String(name);
console.log(nameObj.length);
console.log(nameObj.toLowerCase());

console.log( name.indexOf('a', (name.indexOf('a') + 1) ) );
console.log( name.lastIndexOf('a') );

console.log( name.substr(4, 3) );
console.log( name.split(' ') );
console.log( name.split('') );
console.log( name.split(', ') );
