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

// function solution(str){
//     return str.split('').reverse().join('')
// }

// ************************************************************************************************************************

// ? Sum The Strings
/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
Example: (Input1, Input2 -->Output)
"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
*/

// function sumStr(a,b) {
//     const total = Number(a) + Number(b);
//     return total.toString()
// }

// ************************************************************************************************************************

// ? Exclamation marks series #1: Remove an exclamation mark from the end of string
/* 
Remove an exclamation mark from the end of a string. 
For a beginner kata, you can assume that the input data is always a string, no need to verify it.
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

// function remove(string){
//     let arr = string.split('');
//     console.log(arr);
//     let lastStr = arr.slice(-1)
//     console.log(lastStr);
//     if(lastStr == '!'){
//         arr.pop()
//         return arr.join('')
//     }else{
//         return string
//     }
// }
// console.log(remove('!Hi!!!'))

// function remove (string) {
//     let splitArr = string.split('');
//     if(splitArr[splitArr.length-1] === '!'){
//         splitArr.pop()
//     }
//     return splitArr.join('')
// }

// ************************************************************************************************************************

// ? Count of positives / sum of negatives
/* 
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/ 

