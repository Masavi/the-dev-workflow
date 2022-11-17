/** 
  Write a Node program that takes in an unlimited number of commandline arguments,
  goes through each and prints out the sum of them.
  
  If any argument is NOT a whole number, skip it.
  Do not support negative numbers.
  If any argument is not a number, output an error message.
  We need at least two arguments.
*/

// 1) how to take in an unlimited number of command line arguments?
const commandLineArguments = process.argv;

// This is how we access one item of the array, given an index number
// console.log(commandLineArguments[3]);

// I want to create a new array, where i don't pass the first two arguments
const argumentsArray = commandLineArguments.slice(2);

// D) We need at least two arguments.
if (argumentsArray.length < 2) {
  throw Error('You must input at least two arguments to add up! 🧨');
}

// console.log(argumentsArray);

// 2) how can we go through each one of command line arguments?
let sum = 0;

for (let i=0; i < argumentsArray.length; i++) {
  const argument = argumentsArray[i];
  const number = Number(argument);

  // C) If any argument is not a number, output an error message.
  if (isNaN(number) || typeof number !== 'number') {
    throw Error('You must input ONLY numbers')
  }

  // B) Do not support negative numbers.
  if (number < 0) {
    throw Error('You must input only POSITIVE numbers!!! 🤦‍♂️')
  }

  // A) If any argument is NOT a whole number, skip it
  if (number - Math.floor(number) === 0) {
    sum = sum + number;
  }
}

// 3) how can we print the sum of them?
console.log('Sum result:', sum);