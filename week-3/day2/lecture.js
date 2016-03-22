// hats
var products = [
  {
    size: ['large'],
    color: [ 'red', 'blue', 'green' ],
    style: 'fedora',
    material: 'beaver',
    id: 123,
    sales: {
      'eastern': 2456,
      'western': 256,
      'southern': 9863
    }
  },
  {
    size: ['small', 'medium', 'large'],
    color: [ 'red', 'blue', 'green' ],
    style: 'baseball cap',
    material: 'canvas',
    id: 123,
    sales: {
      'eastern': 998,
      'western': 457,
      'southern': 63
    }
  },
  {
    size: ['medium', 'large'],
    color: [ 'red', 'blue', 'green' ],
    style: 'bowler',
    material: 'felt',
    id: 157,
    sales: {
      'eastern': 24,
      'western': 56,
      'southern': 63
    }
  },
  {
    size: ['small', 'large'],
    color: [ 'red', 'blue', 'green' ],
    style: 'driver cap',
    material: 'felt',
    id: 365,
    sales: {
      'eastern': 2,
      'western': 5,
      'southern': 2
    }
  }
];

var hatsWithSmalls = [];
products.forEach(function getSmalls(currentProd) {
  if (currentProd.size.indexOf('small') > -1) {
      hatsWithSmalls.push(currentProd);
  }
});

function onlyShowStyle(product) {
  return { id: product.id, style: product.style };
}

// console.log(onlyShowStyle);

hatsWithSmalls = hatsWithSmalls.map(onlyShowStyle);

// console.log(hatsWithSmalls);

var hatsWithMediums = products
  .filter(function onlyMediums(prod) {
    return (prod.size.indexOf('medium') > -1);
  })
  .map(onlyShowStyle);

// hatsWithMediums = hatsWithMediums.map(onlyShowStyle);

// console.log(hatsWithMediums);


var chars = "Aaron Kasper".split('');

console.log(chars);

var vowels = ['a','e','i','o','u'];

var nonVowels = chars
  .filter(function disemvowel(char) {
    return !(vowels.indexOf(char.toLowerCase()) > -1);
  })
  .join('');

console.log(nonVowels);

// recreating a for loop
var i = 0;
while(i<products.length) {
  console.log(products[i].style);
  i++;
}

// var someCondition = true;
// while(someCondition) {
//   // do some stuff

//   if (someThingHappened) {
//     someCondition = false;
//   }
// }


// while(true) {
//   if (someConditionHappened) {
//     break;
//   }
// }

for (var i=0; i<20; i++) {
  if (i > 3) {
    break;
  }
//   console.log('hi ' + i);
}

var propertyNames = Object.keys(products[0]);

for (var propertyName in products[0]) {
//   console.log( propertyName );
//   console.log( products[0][propertyName] );
}


var age = 10;

if (age < 12) {

} else if (age < 18) {

} else if (age < 25) {

} else {

}

var type;
switch(age) {
  case 12:
    type = 'child';
    console.log(type);
    break;
  case 18:
    type = 'young adult';
    console.log(type);
    break;
  default:
    // execute this if nothing else matches
}


function addNumbers(x, y, z) {
  if (!Number(z)) {
    z = 0;
  }
  return x + y + z;
}


function generateRando() { return 'foobar'; }

function addUser(username, name, dob) {
  username = username || generateRando();

//   basically the same as the code above...
//   if (!username) {
//     username = generateRando();
//   }

  var nowMinus18Years = Date.now() - (18 * 365.25 * 24 * 60 * 60 * 1000);
//   var type;
//   if (dob.getTime() < nowMinus18Years) {
//     type = 'minor';
//   } else {
//     type = 'adult';
//   }
  var type = (dob.getTime() < nowMinus18Years) ? 'minor' : 'adult';


  // ...
}
