'use strict';

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
