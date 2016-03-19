
var dc = {
    population: 620000,
    mayor: {
        name: 'Muriel Bowser',
        term: {
            startDate: 'Jan 2, 2015',
            length: 4,
            currentTermCount: 1
        },
        giveOrder: function giveOrder(text) {
            console.log(text);
            return text + ' (from the return value)';
        }
    },
    size: 68
};

console.log(dc);
console.log(dc.mayor.term.startDate, dc.mayor.name);

console.log( 'foo',  dc.mayor.giveOrder('let them eat cake')  );


// -------------------------------

var pineapple = {
    capacity: 3000,
    roomType: {
        width: 50,
        name: 'Ginormous'
    },
    speed: function getSpeed(mph) {
        console.log(mph);
    },
    length: 600,
    roomList: [
        { number: 13, guest: 'Jordan' },
        { number: 14, 'guest-name': 'James', guestId: 13 }
    ]
};

var w = pineapple.roomType.width;
console.log( w * w );

console.log(pineapple);

function getDesiredGuestProperty() {
    return 'Id';
}

console.log(pineapple.roomList[1]['guest' + getDesiredGuestProperty()]);

console.log(pineapple.roomList[1]['guest-name']);


// Arrays

var studentList = [ 'Matt', 'Alex', 'Liz', 'Noelle', 'Austen' ];

console.log( studentList[2] );  // Liz

console.log( studentList[5] );  // undefined
studentList[5] = 'Ryan';
console.log( studentList.length ); // 6

studentList[studentList.length] = 'James';  // James to the end

studentList.push('Jordan'); // add Jordan to the end

console.log( studentList );
console.log( studentList.pop(), studentList );

var entry;
for (var i = 0; i < studentList.length; i++) {
    entry = studentList[i];
    studentList[i] = entry + ' is awesome.';
}

console.log( studentList );
