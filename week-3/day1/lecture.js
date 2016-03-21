

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
            score: 56894
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
            score: 0
        };
    }
};

// var desiredName = document.querySelector('input').value;
var desiredName = 'jordan'; // (but really we want to get it from input, see above)
var desiredUserObj = game.users[desiredName];

console.log(desiredUserObj, desiredUserObj.score);
desiredUserObj.score = 1000000;
console.log(game.users.jordan.score);  // 1000000

var ryan = { name: 'Ryan', username: 'Hawyanha', score: 0 };

// console.log(foobar);  // ReferenceError
console.log(game.users.ryan);
game.users.ryan = ryan;

console.log(game.users);

game.addUser('alex', 'Alexander');

console.log(game.users);
