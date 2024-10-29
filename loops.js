// Task 1: Write a for loop to print numbers from 1 to 5.
for (let i = 1; i < 6; i++) {
    console.log(i);
}

// Task 2: Create a while loop that prints the numbers 10 to 15.
let i = 10;
while (i < 16) {
    console.log(i);
    i++;
}

// Task 3:
const numbers = [9, 10, 17, 34, 2, 4, 100];
let lowest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
        lowest = numbers[i];
    }
}

console.log("lowest", lowest);

// Task 4:

const testArr = [18, 62, 31, 74, 25, 1];

function getLowest(arr) {
    let lowestNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lowestNumber) {
            lowestNumber = arr[i];
        }
    }
    return lowestNumber;
}

console.log(getLowest(testArr));