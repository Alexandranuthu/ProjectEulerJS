/**
 * Project Euler Problem: Largest Prime Factor
 * This code finds and prints the prime factors of a given number,
 * then sorts them and returns the largest one.
 * 
 * The approach here is simple:
 * 1. Check if a number is prime.
 * 2. Find factors of the input number.
 * 3. For each factor, check if it's prime.
 * 4. Store all prime factors, then return the biggest one.
 * 
 * Written in a simple and efficient way so the code can handle large numbers,
 * like 600851475143 (the example from Project Euler).
 */


/**
 * Check if a number is prime.
 * A prime number has no divisors other than 1 and itself.
 * 
 * @param {number} i - The number to check for  prime.
 * @returns {boolean} True if `i` is prime, otherwise false.
 */
function isPrime(i) {
    if (i < 2) return false;  // Any number less than 2 is not prime
    if (i === 2) return true; // 2 is the only even prime number

    // Loop from 2 to the square root of i
    for (let f = 2; f <= Math.sqrt(i); ++f) {
        if (i % f === 0) return false; // Found a divisor, not prime
    }

    // If no divisors found, it’s prime
    return true;
}

/**
 * Find all prime factors of a given number.
 * 
 * @param {number} n - The number to find prime factors for.
 * @returns {Array<number>} Sorted array of unique prime factors.
 */
function findPrime(n) {
    let result = []; // Store prime factors

    // Loop through numbers up to the square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // Check if `i` is a factor of `n`
        if (n % i === 0) {
            // If it's a factor, check if it's prime
            if (isPrime(i)) result.push(i); // Add to result if prime

            // Check the other factor (n / i)
            const otherFactor = n / i;
            if (isPrime(otherFactor)) result.push(otherFactor);
        }
    }

    // Remove duplicates, sort prime factors in ascending order
    return [...new Set(result)].sort((a, b) => a - b);
}

// Number we are analyzing for prime factors (Project Euler example)
const num = 600851475143;

// Find prime factors and log the largest one
console.log("Prime factors of " + num + ": " + findPrime(num));

// The largest prime factor will be the last one in the sorted array
const largestPrimeFactor = findPrime(num).pop();
console.log("Largest prime factor: " + largestPrimeFactor);
