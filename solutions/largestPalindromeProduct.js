/**
 * Function to find the largest palindrome that is a product of two n-digit numbers
 *
 * A palindrome is a number that reads the same forward as backward. 
 * This function finds the largest palindrome that can be obtained 
 * by multiplying two n-digit numbers.
 *
 * @param {number} n - The number of digits of the numbers to multiply.
 * @returns {number} - The largest palindrome product of two n-digit numbers.
 */
function largestPalindrome(n) {
    // Calculate the upper limit for n-digit numbers
    // Example: if n = 3, upper_limit = 999
    let upper_limit = Math.pow(10, n) - 1;

    // Calculate the lower limit for n-digit numbers
    // Example: if n = 3, lower_limit = 100
    let lower_limit = 1 + parseInt(upper_limit / 10, 10);

    // Variable to store the largest palindrome found
    let max_product = 0;

    // Outer loop: start from the upper limit and move downwards
    for (let i = upper_limit; i >= lower_limit; i--) {
        // Inner loop: same as outer loop but with the second number
        for (let j = i; j >= lower_limit; j--) {
            // Calculate the product of the two numbers
            let product = j * i;

            // Skip further checks if product is already smaller than the current max palindrome
            if (product < max_product) break;

            // Check if the product is a palindrome by reversing the digits
            let number = product;
            let reverse = 0;

            // Reverse the digits of the product
            while (number != 0) {
                reverse = reverse * 10 + number % 10;
                number = parseInt(number / 10, 10);
            }

            // If the product is a palindrome and greater than the current max, update max_product
            if (product === reverse && product > max_product) {
                max_product = product;
            }
        }
    }

    // Return the largest palindrome found
    return max_product;
}

// Example usage: finding the largest palindrome for 3-digit numbers
let n = 3;
document.write(largestPalindrome(n));


//Time Complexity
//The time complexity of this approach is O(n ^ 2) 
//since we are checking the product of every pair of n - digit numbers, and for each product, we reverse its digits to check if it's a palindrome.
