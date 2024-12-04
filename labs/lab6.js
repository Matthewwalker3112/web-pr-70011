// Task 1: Counting Numbers with Loops
function countNumbers() {
    // Print numbers 1 to 20 using a for loop
    console.log("Counting up from 1 to 20:");
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
    
    // Print numbers 20 down to 1 using a while loop
    console.log("Counting down from 20 to 1:");
    let j = 20;
    while (j >= 1) {
        console.log(j);
        j--;
    }
}

// Task 2: Even and Odd Numbers
function checkEvenOdd() {
    console.log("Checking even and odd numbers from 1 to 50:");
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
    }
}

// Task 3: Multiplication Table
function printMultiplicationTable(number) {
    console.log(`Multiplication table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Task 4: Sum of Numbers
function sumNumbers() {
    let sum = 0;
    let i = 1;
    while (i <= 100) {
        sum += i;
        i++;
    }
    console.log(`The sum of numbers from 1 to 100 is: ${sum}`);
    return sum;
}

// Task 5: Grade Checker
function checkGrade(score) {
    if (score >= 90 && score <= 100) {
        console.log(`${score} -> A`);
    } else if (score >= 80 && score <= 89) {
        console.log(`${score} -> B`);
    } else if (score >= 70 && score <= 79) {
        console.log(`${score} -> C`);
    } else if (score >= 60 && score <= 69) {
        console.log(`${score} -> D`);
    } else {
        console.log(`${score} -> F`);
    }
}

// Task 6: Factorial Calculation
function calculateFactorial(number) {
    let factorial = 1;
    for (let i = number; i > 0; i--) {
        factorial *= i;
    }
    console.log(`Factorial of ${number} is: ${factorial}`);
    return factorial;
}

// Bonus Task: Prime Number Checker
function isPrime(number) {
    if (number <= 1) {
        console.log(`${number} is not prime`);
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            console.log(`${number} is not prime`);
            return false;
        }
    }
    console.log(`${number} is prime`);
    return true;
}

// Function Calls
countNumbers();
checkEvenOdd();
printMultiplicationTable(5);
sumNumbers();
checkGrade(95);
checkGrade(82);
checkGrade(74);
checkGrade(61);
checkGrade(45);
calculateFactorial(5);
isPrime(7);
isPrime(10);