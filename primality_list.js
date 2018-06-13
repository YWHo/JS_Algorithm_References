"use strict"

const readline = require('readline')

/* Given a value, list the prime numbers between from 1 to the given value

The solution is from 
https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100
 by Ted Hopp

*/

"use strict";
function getPrimes(max) {
  var sieve = [], i, j, primes = [];
  for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
          // i has not been marked -- it is prime
          primes.push(i);
          for (j = i << 1; j <= max; j += i) {
              sieve[j] = true;
          }
      }
  }
  return primes;
}


// var largePrimes = [];
// console.time("primes");
// largePrimes = getPrimes(1000000);
// console.timeEnd("primes");
// console.log("Total primes from 1 to 1000000: ", largePrimes.length);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number:  ', (answer) => {

  let primes = getPrimes(answer)
  console.log("The list of prime number is:\n", primes)

  rl.close();
});