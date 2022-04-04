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

// function countPositivesSumNegatives (input) {
//     let count = 0;
//     let sum = 0;
//     if (input != null){
//         for (let i = 0; i < input.length; i++) {
//             if(input[i] > 0){
//                 count++
//             }else if(input[i] < 0){
//                 sum += input[i]
//             }
//         }
//         if(count == 0 && sum == 0){
//             return []
//         }else{
//             return [count, sum]
//         }
//     }else{
//         return []
//     }
// }
// countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
// console.log(countPositivesSumNegatives([0, 0]));

// function countPositivesSumNegatives(input) {
//     let arr = []
//     if (input !== null){
//         let positiveArr = input.filter(e => e>0).length
//         let negativeArr = input.filter(x => x<0).reduce((c,n)=> c+n,0)
//         if(positiveArr != [0] ||negativeArr !=[0]){
//             arr.push(positiveArr,negativeArr)
//         }
//         return arr
//     } else{
//         return []
//     }
// }
// console.log(countPositivesSumNegatives([0, 0]));

// ************************************************************************************************************************

 // ? Find the Remainder
/*
Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
*/

// function remainder(n ,m){
//     if(n>=m){
//         return n%m
//     }else if (m>n){
//         return m%n
//     }
// }
// console.log(remainder(4,0))

// ************************************************************************************************************************

// ? Sum of positive
/*
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/

// function positiveSum (arr){
//     // console.log(arr)
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         // console.log(arr[i])
//         if(arr[i] > 0){
//             // console.log(arr[i])
//             sum += arr[i]
//         }
//     }
//     return sum
// }
// console.log(positiveSum([1,-4,7,12]))


// positiveSum = (arr) => {
//     let sum = 0;
//     for(let i of arr){
//         if(i > 0){
//             sum += i
//         }
//     }
//     return sum;
// }
// console.log(positiveSum([1,-4,7,12]))

// ************************************************************************************************************************

// ? Square(n) Sum
/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9
*/ 

// function squareSum (numbers){
//     let sum = 0;
//     for(let i=0; i<numbers.length; i++){
//         let square = numbers[i] * numbers[i]
//         sum += square
//     }
//     return sum
// }
// console.log(squareSum([1, 2, 2]))

// squareSum = (numbers) => {
//     let sum = 0;
//     for(let i of numbers){
//         let square = i * i
//         sum += square
//     }
//     return sum
// }
// console.log(squareSum([1, 2, 2]))

// ************************************************************************************************************************

// ? Convert number to reversed array of digits
/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/

// function digits (n){
//     let newArray =  String(n).split('').map(n =>{
//         return Number(n)
//     })
//     return newArray.reverse()
// }
// // digits(348597)
// console.log(digits(348597))

// ************************************************************************************************************************

// ? Array plus array
/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. 
I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
*/
