'use strict';
/*
//create array to the push new bookings
const bookings = [];

const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  //if the property is "falsy", then it is 1
  //that's how it would be made in ES5. Above, is how default parameters are made in ES6
  //numPassangers = numPassangers || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassangers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', 2, 500);
createBooking('LH123', undefined, 200);
*/

const flight = 'LH234';
const joab = {
  name: 'Joab Almeida',
  passport: 123456789,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123456789) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

/*
checkIn(flight, joab);
console.log(flight);
console.log(joab);
//the primitive value of "flight" didn't change, but the object joab did, because objects change if referenced.
//flightNum is just a copy of flight, not really used, but passenger references joab, so it changes both, because object goe sinto function heap
*/

/*
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(joab);
checkIn(flight, joab);
//when we change the passport, the previous if condition fails. And it changes because the newPassport references the object joab and changes value, doesn't create a new variable inside itself and then changes it
*/

/*

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  //destructure to split the first word from the rest of the sentence, then make a reference for both parts. Then, uppercase the first word and join with the rest
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//because the function calls a function, it turns into a HIGHER-ORDER FUNCTION
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  //"name" is a property of any function
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);

transformer('Javascript is the best!', oneWord);

//JS uses callback functions all the time
const high5 = function () {
  console.log('High Five!');
};
document.body.addEventListener('click', high5);

*/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name} `);
  };
};

//o greeterHey agora se torna uma função. O parâmetro dentro dele irá para o name, e não para greeting, pois o hey, na criação do objeto, já se tornou um parâmetro permanente
const greeterHey = greet('Hey');
greeterHey('Joab');
greeterHey('Douglas');

//we can just call the greet function directly and "send two parameters at once"
greet('Hello')('Jonas');

//in case you want in arrow functions
const greetArr = greeting => name => console.log(`${greeting} ${name} `);
//that's confusing
greetArr('Lino')('Virgo');

*/

/*

const lufthansa = {
  airline: 'Luftansa',
  iataCode: 'LH',
  bookings: [],
  //function inside an object (não sei onde vou usar isso algum dia)
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Joab Almeida');
lufthansa.book(635, 'Douglas Lock');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//book is now a function, and only the book function from lufthansa object. It won't call any other value from the object, which is bad. "this" won't work here
const book = lufthansa.book;
//doesn't work. "this" is undefined, because it is now a function instead of a method, so it doesn't point to anything already existing
//book(23, 'Sara Albuquerque');

//the "call" method forces "this" to become the first parameter: eurowings. So now, it points to anything inside that object
book.call(eurowings, 23, 'Sara Albuquerque');
console.log(eurowings);

book.call(lufthansa, 239, 'Mariana Cross');
console.log(lufthansa);

//the other objects need to have the exact same property names (and probably order) to functions properly, because the original object has a method calling the property names

//Apply method is the same thing is Call, but it receives only an array, not parameters. Not much used currently

const flightData = [583, 'Ícaro Constantine'];
book.apply(eurowings, flightData);
console.log(eurowings);

//in modern JS, you can just use a spread operator in call to do the same thing as Apply
//Apply is not really used anymore
//book.call(eurowings, ...flightData);

//Bind Method, basically creates a new function already with the this. bound to it from the original. That's why the $airline is not undefined
const bookEW = book.bind(eurowings);
bookEW(23, 'Jonas Constantino');

const bookLH = book.bind(lufthansa);

//the next parameter in the bind method serves as the first parameter from the function he is copying. "Partial Application"
const bookEW23 = book.bind(eurowings, 23);
//now every flight using this function is 23
bookEW23('Joab Almeida');

//Bind with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

//.buy is the name of the button on the frontend
//because in EL, this. becomes the button, the class, we change this. by binding 'lufthansa' as the new this. and return a function
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

  */

/*

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//like this, the function is immediately created and called. Will be useful during async await
//Immediately Invoked Function Expression
(function () {
  console.log('This will never run again');
})();

//as an arrow function
(() => console.log('This will never run again'))();

*/

//Closure
//this function returns a function
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger(s)`);
  };
};

//booker shouldn't work, because secureBooking pops off the call stack, but the function it uses calls for passengerCount, which is a variable, so the Variable Enviroment actually stays and turns into a Closure. Closure is the VE from a closed function that is called and used.
const booker = secureBooking();
booker();
booker();
booker();

//you can see in "scope" the closure containing the passengerCount variable
console.dir(booker);

//More Closures
//Example 1
let f;

//the "a" variable is in the "backpack" of "f"
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

//g makes f an function, then we call it
g();
f();

//reassigning f function
h();
f();
console.dir(f);

//Example 2
