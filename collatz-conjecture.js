//   This replicates the Collatz conjucture where you take any number,
//    if it's even you divide by 2, if it's odd you multiply by 3 and add 1, 
//    and you repeat the process till you get 0

const fs = require('fs');
const prompt = require('prompt-sync') ({sigint: true});

let random_Number = Number(prompt('Enter a number: '));
let values = [];
let loop_Count = 0;

while (random_Number !== 1) { 
// 1 is used above to create an output, the correct number is 0 which is an infinite loop
        loop_Count++;
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
fs.truncate('values.txt', 0, (err) => {
    if (err) {
        console.error('Error clearing the file:', err);
    } else {
        // Write the values to a text file
        fs.writeFile('values.txt', valuesString, (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
            } else {
                console.log('Values have been written to values.txt');
            }
        });
    }
});

// Sort the array in descending order
let sortedValues = values.slice().sort((a, b) => b - a);

// Get the five largest numbers
let fiveLargest = sortedValues.slice(0, 5);

console.log("The five largest numbers are:", fiveLargest);

console.log("The loop ran " + loop_Count + " times")