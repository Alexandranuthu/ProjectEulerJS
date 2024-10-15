/**
 * Calculates the sum of even Fibonacci numbers up to a specified limit.
 * This implementation generates all Fibonacci numbers and checks for even values.
 *
 * @param {number} limit - The upper limit for the Fibonacci numbers to be considered.
 * @returns {number} The sum of even Fibonacci numbers not exceeding the limit.
 */
function sumEvenFibonacci(limit) {
    // Check if the input limit is a positive number
    if (limit < 0) {
        console.log('Please enter a positive limit.');
        return;
    }

    // Initialize the first two Fibonacci numbers and the sum
    let prev1 = 1; // Represents the current Fibonacci number
    let prev2 = 0; // Represents the previous Fibonacci number
    let sum = 0;   // Sum of even Fibonacci numbers

    // Loop until the current Fibonacci number exceeds the limit
    while (prev1 <= limit) {
        // If the current Fibonacci number is even, add it to the sum
        if (prev1 % 2 === 0) {
            sum += prev1;
        }

        // Generate the next Fibonacci number
        let current = prev1 + prev2; // Current Fibonacci number
        prev2 = prev1; // Update prev2 to the previous Fibonacci number
        prev1 = current; // Update prev1 to the current Fibonacci number
    }

    return sum; // Return the total sum of even Fibonacci numbers
}

let limit = 4000000; // Set the limit for Fibonacci numbers
let result = sumEvenFibonacci(limit); // Calculate the sum
console.log(`The sum of even-valued Fibonacci terms not exceeding ${limit} is: ${result}`); // Expected Output: 4613732

/**
 * Optimized calculation of the sum of even Fibonacci numbers up to a specified limit.
 * This implementation directly calculates even Fibonacci numbers based on their mathematical properties.
 *
 * @param {number} limit - The upper limit for the even Fibonacci numbers to be considered.
 * @returns {number} The sum of even Fibonacci numbers not exceeding the limit.
 */
function sumEvenFibonacciOptimized(limit) {
    // Initialize the sum and the first two even Fibonacci numbers
    let sum = 0;
    let a = 0; // First even Fibonacci number (F(0))
    let b = 2; // Second even Fibonacci number (F(3))

    // Include the first even Fibonacci number (0) in the sum
    sum += a;

    // Loop until the current even Fibonacci number exceeds the limit
    while (b <= limit) {
        // Add the current even Fibonacci number to the sum
        sum += b;

        // Generate the next even Fibonacci number using the formula
        let c = 4 * b + a; // Next even Fibonacci number
        a = b; // Update a to the current even Fibonacci number
        b = c; // Update b to the next even Fibonacci number
    }

    return sum; // Return the total sum of even Fibonacci numbers
}

// Set the limit for even Fibonacci numbers
let limitOptimized = 4000000;
let resultOptimized = sumEvenFibonacciOptimized(limitOptimized); // Calculate the sum
console.log(`The sum of even-valued Fibonacci terms not exceeding ${limitOptimized} is: ${resultOptimized}`); // Expected Output: 4613732
