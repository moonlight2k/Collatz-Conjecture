// Collatz Conjecture

const fs = require('fs');

let random_Number = 300005000;
let values = [];

while (random_Number !== 1) { 
// 1 is used above to create an output, the correct number is 0 which is an infinite loop
        if (random_Number % 2 === 0) {
            let even = random_Number / 2;
            random_Number = even;
            values.push(random_Number);
        } else {
            let odd = random_Number * 3 + 1;
            random_Number = odd;
            values.push(random_Number);
        }
}
// console.log(values);

// Convert the array to a string representation
const valuesString = values.join('  ,  ');

// Clear the contents of the "values.txt" file before writing new data
fs.truncate('values-js.txt', 0, (err) => {
    if (err) {
        console.error('Error clearing the file:', err);
    } else {
        // Write the values to a text file
        fs.writeFile('values-js.txt', valuesString, (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
            } else {
                console.log('Values have been written to values-js.txt');
            }
        });
    }
});

// Sort the array in descending order
let sortedValues = values.slice().sort((a, b) => b - a);

// Get the five largest numbers
let fiveLargest = sortedValues.slice(0, 5);

console.log("The five largest numbers are:", fiveLargest);