






// Problem 1: Simple Syntax Error
let name = "Alice";
console.log("Hello, " + name);

//  what i did: 
//  Fixed missing semicolon after the let name


// Problem 2: Reassignment Error 
const favoriteColor = "blue";
// favoriteColor = "green";
console.log(favoriteColor);

// what I did:
// Removed the green to prevent the error.


// Problem 3: Conditional Logic
let age = 20;
if (age === 18) {
    console.log("You are 18!");
} else {
    console.log("You are not 18!");
}

// what i did:
// Used === instead of == because google said so. :) and it fixed it. codelation 3:14 "though shall use google"


// Problem 4: Missing Initialization
let total = 0; 
total = total + 10;
console.log(total);

// what i did:
// The variable total was not stated
// Fixed by typing total to 0

// Problem 5: Function Without Return
function calculateSum(a, b) {
    let sum = a + b;
    return sum; 
}
console.log(calculateSum(5, 10));

// what i did:
// The function didn’t return a value
// Fixed by adding a return


// Problem 6: Loop Boundary Error
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) { // Changed <= to <
    console.log(colors[i]);
}

// what I did:
// I had no clue what to do until I started deleting things, then i realized there was no need for = (trial and error, not sure why the = was a problem) *****QUESTION FOR PETER******


// Problem 7: Incorrect Array Access
const numbers = [10, 20, 30, 40];
console.log(numbers[4]);

// what i did:
// I did nothing I think its correcrt????

// Problem 8: Object Property Access
const person = {
    name: "John",
    age: 30
};
console.log(person["name"]);

// what i did:
// it was a naming issue, I changed fullname to name in the console log

// Problem 9: Immutable Array
const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

//what i did:
// I think this is correct???

// Problem 10: Combining Loops and Conditionals
let numArray = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) { // Fixed single `=` to `===`
        console.log(numArray[i] + " is even");
    } else {
        console.log(numArray[i] + " is odd");
    }
}

//what I did
//I looked back at number 3 and remebered === I tried it and it fixed the even and odds ******ASK PETER TO EXPLAIN =, ==, === *******








