#!/usr/bin/env node

// Requires yargs
const yargs = require("yargs");

function getDigits(stringNumber) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const number = [];
  // Run each individual number
  for (let i = 0; i < stringNumber.length; i++) {
    // Find the number for the individual number
    for (let j = 0; j < numbers.length; j++) {
      if (stringNumber.charAt(i) === j.toString()) {
        number[i] = j;
      }
    }
  }

  return number;
}

function getCompleteNumber(digits) {
  let i, finalNumber = 0;
  for (i = 0; i < digits.length; i++) {
    finalNumber = 10 * finalNumber + digits[i];
  }

  return finalNumber;
}

var myArgs = process.argv.slice(2);
const firstStringNumber = myArgs[0];
const secondStringNumber = myArgs[1];

// Get integer digits
const firstIntegerDigits = getDigits(firstStringNumber);
const secondIntegerDigits = getDigits(secondStringNumber);

// Get full numbers
const firstIntegerNumber = getCompleteNumber(firstIntegerDigits);
const secondIntegerNumber = getCompleteNumber(secondIntegerDigits);

const sum = (firstIntegerNumber + secondIntegerNumber);

console.log("The sum of the two integer numbers are: ", sum);