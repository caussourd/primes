#!/usr/bin/env node

// find 1st K primes numbers 
var firstkprime = function(k) {
    var n = 3; 
    var arr = [2]; // array containing the primes
    // while the array doesn't contain k primes, we check the next integer
    for (n = 3; arr.length < k; n++) {
        // we test if n is a prime number by dividing n by prime numbers less than sqrt(n)
        var divisable = false;
        var i = 0; // the primes array index
        while (!divisable && i < arr.length && arr[i] <= Math.sqrt(n)) {
            if (n % arr[i] == 0) { divisable = true; } 
            i++;
        }
        if ( !divisable ) {
            arr.push(n);
        }
    }
    return arr;
};

// file format
var fmt = function(arr) {
    return arr.join(",");
};

var k = 100; // the number of prime numbers we want to display
var fs = require('fs');
var outfile = "primes.txt";
// getting the formated list
list = fmt(firstkprime(k));
// write them to the file
fs.writeFileSync(outfile, list); 