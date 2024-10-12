function sumEvenFibonacci(limit) {
    if (limit < 0) {
        console.log('enter a positive limit');
        return;
    }

    // when it is already greater than 0
    let prev1 = 1;
    let prev2 = 0;
    let sum = 0;

    while (prev1 <= limit) {
        if (prev1 % 2 == 0) {
            sum += prev1;
        }

        //   generate the next fibonacci number
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return sum;



}

let limit = 4000000;
let result = sumEvenFibonacci(limit);
console.log(`The sum of even-valued Fibonacci terms not exceeding ${limit} is: ${result}`);