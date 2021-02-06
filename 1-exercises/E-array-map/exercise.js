// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function numbersMultiplied(numbers){
    return numbers*100
}

var multiplied = numbers.map(numbersMultiplied);
console.log(multiplied);

// var numbersMultiplied = numbers.map(function numbersMultiplied(numbers){
//     return numbers*100
// });

// var numbersMultiplied = numbers.map(function (numbers){
//     return numbers*100
// });

// var numbersMultiplied = numbers.map(numbers =>{
//     return numbers*100
// });

var numbersMultiplied = numbers.map(numbers => numbers*100);
console.log(numbersMultiplied);


