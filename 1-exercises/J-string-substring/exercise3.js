/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";
let firstHalf = statement.substring(0,5);
// console.log(firstHalf);
let secondHalf = statement.substring(9, statement.length);
// console.log(secondHalf);

let result = firstHalf.concat(secondHalf);

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
