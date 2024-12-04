
// Lab 8


// Question 1
function generateRandomArray(length, min, max) {
  return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}
const randomArray = generateRandomArray(20, 1, 100);
console.log(randomArray);

// Question 2
function findMaxValue(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMaxValue([5, 12, 43, 8, 19]));

// Question 3
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(filterEvenNumbers([5, 12, 43, 8, 19, 24]));

// Question 4
function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray([5, 12, 43, 8, 19]));

// Question 5
function countOccurrences(arr, target) {
  return arr.reduce((count, num) => (num === target ? count + 1 : count), 0);
}
console.log(countOccurrences([5, 12, 5, 8, 5, 24], 5));

// Question 6
function generateRange(start, end) {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}
console.log(generateRange(5, 15));

// Question 7
function sumOfArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumOfArray([5, 12, 43, 8, 19]));

// Question 8
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortArray([5, 12, 43, 8, 19]));

// Question 9
function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}
console.log(hasDuplicates([5, 12, 43, 8, 19, 5]));

// Question 10
function findIndex(arr, target) {
  return arr.indexOf(target);
}
console.log(findIndex([5, 12, 43, 8, 19], 8));