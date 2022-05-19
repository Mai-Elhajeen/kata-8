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

// function arrayPlusArray (arr1, arr2){
//     let sum = 0;
//     newArray =  arr1.concat(arr2)
//     for(let i of newArray){
//         sum += i;
//     }
//     return sum
// }
// console.log(arrayPlusArray ([1, 2, 3] , [4, 5, 6]))

// arrayPlusArray = (arr1, arr2) => {
//     let sum = 0;
//     newArray =  arr1.concat(arr2)
//     for(let i of newArray){
//         sum += i;
//     }
//     return sum
// }
// console.log(arrayPlusArray ([1, 2, 3] , [4, 5, 6]))


// ************************************************************************************************************************

// ? Removing Elements
/*
Take an array and remove every second element from the array. 
Always keep the first element and start removing with the next element.
Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that!
*/

// function removeEveryOther(arr){
//     for (let i=1; i<arr.length; i++){
//         arr.splice(i,1);
//     }
//     return arr;
// }
// console.log(removeEveryOther (["Keep", "Remove", "Keep", "Remove", "Keep"]))

// removeEveryOther = (arr) => {
//     for (let i=1; i<arr.length; i++){
//         arr.splice(i,1);
//     }
//     return arr;
// }
// console.log(removeEveryOther (["Keep", "Remove", "Keep", "Remove", "Keep"]))

// ************************************************************************************************************************
// ? Returning Strings
/*
Make a function that will return a greeting statement that uses an input; 
your program should return, "Hello, <name> how are you doing today?".
[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

// function greet(name){
//     //your code here
//     return `Hello, ${name} how are you doing today?`
// }
// console.log(greet('mai')) 

// ************************************************************************************************************************

// ? Find Maximum and Minimum Values of a List
/*
Your task is to make two functions (max and min, or maximum and minimum, etc.,
depending on the language) that receive a list of integers as input and return, respectively, 
the largest and lowest number in that list.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
*/

// var min = function(list){
    
//     return Math.min(...list);;
// }
// console.log(min([4,6,2,1,9,63,-134,566]))

// var max = function(list){
    
//     return Math.max(...list);;
// }
// console.log(max([4,6,2,1,9,63,-134,566]))

// ************************************************************************************************************************

// ? Thinkful - List and Loop Drills: Lists of lists
/*
You have a two-dimensional list in the following format:
data = [[2, 5], [3, 4], [8, 7]]
Each sub-list contains two items, and each item in the sub-lists is an integer.
*/

// function processData(data){
//     let result = 1; 
//     for(let i=0; i<data.length; i++){
//         result *= data[i][0] - data[i][1];
//     }
//     return result;
// }
// console.log(processData([[2, 5], [3, 4], [8, 7]]));


// processData = (data) => {
//     const result = data.map((num) => num[0] - num[1]);
//     return result.reduce((c, n) => c * n);
// }
// console.log(processData([[2, 5], [3, 4], [8, 7]]));

// ************************************************************************************************************************

// ? Count Odd Numbers below n
/*
Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
*/

// function oddNum(n){
//     return Math.floor(n / 2)
// }
// console.log(oddNum(15))

// ************************************************************************************************************************

// ? Remove String Spaces
/*
Simple, remove the spaces from the string, then return the resultant string.
*/

// function noSpace(x){
//     return x.replace(/ /g , '')
// }
// console.log(noSpace('mai   yahia   ismail   elhajeen'));

// ************************************************************************************************************************

// ? Stringy Strings
/* 
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
the string should start with a 1.
a string with size 6 should return :'101010'.
with size 4 should return : '1010'
with size 12 should return : '101010101010'.
The size will always be positive and will only use whole numbers.
*/

// function stringy(size) {
//     // your code here   
//     const string = ''
//     return string.padStart(size, '10')
// }

// function stringy (size) {
//     return ''.padStart(size, '10')
// }

// ************************************************************************************************************************

// ? Plural
/*
We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
All values will be positive integers or floats, or zero.
*/
// function plural(n) {
//     // ...
//     return (n !== 1)
// }

// function plural(n) {
//     // ...
//     return !(n === 1)
// }

// ************************************************************************************************************************

// ? Counting sheep...
/*
Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).
*/
