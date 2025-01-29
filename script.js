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
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(joab);
checkIn(flight, joab);
//when we change the passport, the previous if condition fails. And it changes because the newPassport references the object joab and changes value, doesn't create a new variable inside itself and then changes it
