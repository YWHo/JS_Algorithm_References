"use strict"

const readline = require('readline')

/* Given a value, test whether the given number is prime number 

The solution is from
 https://stackoverflow.com/questions/1801391/what-is-the-best-algorithm-for-checking-if-a-number-is-prime 
by saurabh kumar

*/


function isPrime (num) {
  if (num <= 1) return false
  if (num <= 3) return true
  if (num%2 == 0 || num%3 == 0) return false;

  for (let i=5; i*i<=num; i+=6) {
    if (num%i == 0 || num%(i+2) == 0) {
      return false
    }
  }

  return true;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number:  ', (answer) => {

  if (isPrime(answer)) {
    console.log(answer + " is a prime number")
  } else {
    console.log(answer + " is NOT a prime number")
  }

  rl.close();
});



