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

// ? If you can't sleep, just count sheep!!
/*
If you can't sleep, just count sheep!!
Task:
Given a non-negative integer, 3 for example,
return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num){
    let count = '';
    for(let i=1; i<=num; i++){
        count = count + `${[i]} sheep...`
    }
    return count;
}