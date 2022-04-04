// ? Parse nice int from char problem
/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
Write a program that returns the girl's age (0-9) as an integer.
Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old".
The first character in the string is always a number.
*/

// function getAge(inputString){
//     return parseInt(inputString)
// }
// console.log(getAge("3 year old"));

// ************************************************************************************************************************

// ? Function 3 - multiplying two numbers
/*
Implement a function which multiplies two numbers.
*/

// function multiply (a, b){
//     return a * b
// }
// console.log(multiply(5, 9))

// ************************************************************************************************************************

// ? If you can't sleep, just count sheep!!
/*
If you can't sleep, just count sheep!!
Task:
Given a non-negative integer, 3 for example,
return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

// var countSheep = function (num){
//     let count = '';
//     for(let i=1; i<=num; i++){
//         count = count + `${[i]} sheep...`
//     }
//     return count;
// }

// ************************************************************************************************************************
// ? Convert a string to an array
/*
Write a function to split a string and convert it into an array of words.
output: * "Robin Singh" ==> ["Robin", "Singh"]
*/

// function stringToArray(string){
//     return string.split(' ');
// }

// ************************************************************************************************************************

// ? Convert a Number to a String!
/*
We need a function that can transform a number into a string.
What ways of achieving this do you know?
output : 123 --> "123" || 999 --> "999"
*/

// function numberToString(num) {
//     return num.toString();
// }

// ************************************************************************************************************************

// ? Convert boolean values to strings 'Yes' or 'No'.
/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

// function boolToWord( bool ){
//     return bool === true ? 'Yes' : 'No';
// }

// ************************************************************************************************************************

// ? Reversed Strings
/*
Complete the solution so that it reverses the string passed into it.
output : 'world'  =>  'dlrow'
'word'   =>  'drow'
*/

