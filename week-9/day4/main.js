
          // this becomes module.exports from that module
var math = require('./math');

console.log( math.add(2, 2) );
console.log( math.subtract(2, 2) );

math.counter++;

console.log(math.counter);

var math2 = require('./math');  // this returns the SAME object as above, with the SAME counter property

console.log(math2.counter);


var worker = require('./worker');

var jordan = worker();
jordan.giveRaise(100000);

var ryan = worker();

console.log('jordan', jordan.salary);
console.log('ryan', ryan.salary);
