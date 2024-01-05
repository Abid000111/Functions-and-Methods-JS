// // printing function
// function p(msg) {
//     console.log(msg);
// }
// p("Mahadi");
// p("Mara kha console.log()");















// // adding function
// function sum(x, y) {
//     return x + y;
// }
// let z = sum(10, 5);
// console.log(z);
















// // arrow function
// const arrowMul = (a, b) => {
//     return a * b;
// };
// console.log(arrowMul);


















// // arrow divider function
// let arrowDivide = (a, b) => {
//     return a / b;
// };
// let z = arrowDivide(10, 2);
// console.log(z);
// console.log(arrowDivide);
// arrowDivide = 5;
// console.log(arrowDivide);















// // shortcut arrow function
// const add = (a, b) => a + b;
// console.log(add(2,3));















// // arrow function
// const printHello = () => {
//     console.log("Hello");
// };
// printHello();















// // // practice function
// function countVowels(str) {
//     let count = 0;
//     str = str.toLowerCase();
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }

//     console.log(count);
// }
// countVowels("Abidshahrier");

















// // practice function
// function countVowels(str) {
//     // Use a regex to match the vowels (case-insensitive)
//     let matches = str.match(/[aeiou]/gi);
//     // Return the number of matches, or 0 if there are none
//     return matches ? matches.length : 0;
// }
// let z = countVowels("Abidshahrier"); // This should also print 5
// console.log(z);














// // practice function
// const countVow = (str) => {
//     let count = 0;
//     str = str.toLowerCase();
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }

//     return count;
// }

// let z = countVow("Abid Shahrier");
// console.log(z);














// // callback function
// function abc() {
//     console.log("hello");
// }

// function myFunc(callback) {
//     return callback();
// }
// myFunc(abc);















// forEach function
// let area = ["Dhaka", "Rajshahi", "Comilla"]
// // there are three parameters in forEach function. 1. value, 2. index, 3. array itself
// area.forEach((val, idx) => {
//     // the third parameter is given by default like this line: area.forEach((val, idx) => {
//     console.log(val.toUpperCase(), idx, area);
// });

















// // forEach function
// let arr =[2, 3, 4, 5, 6];
// arr.forEach(function printVal(val){
//     console.log(val);
//     // console.log("Abid Shahrier");
// });
















// // forEach function
// let nums = [11, 22, 33];
// nums.forEach((num) => {
//     console.log(num * num); // num ** 2
// });















// // forEach function
// let nums = [11, 22, 33];
// let calcSquare = (num) => {
//     console.log(num * num); // num ** 2
// };
// nums.forEach(calcSquare);















// // map function. It creates a new array. Example is the next function.
// let nums = [11, 22, 33, 44];       
// nums.map((val) => {
//     console.log(val);
// });












// // map function
// let nums = [11, 22, 33, 44];
// let newArr = nums.map((val) => {
//     return val*2;
// });

// console.log(newArr);
// console.log(nums);














// // filter function. It creates a new array.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenArray = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(evenArray);
// console.log(arr);












// // reduce function
// let arr = [1, 2, 3, 4];
// const output = arr.reduce((prev, curr) => {
//     return prev + curr;
// });
// console.log(output);












// // reduce function
// let arr = [7, 4, 2, 5, 9, 8];
// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });
// console.log(output);










// // practice: it has to run in browser console. Because it doesn't support here.
// let n = prompt("enter a number: ");
// let arr = [];
// for (let i = 1; i <= n; i++) {
//     arr[i - 1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log("sum =", sum);

// let factorial = arr.reduce((res, curr) => {
//     return res * curr;
// });
// console.log("factorial =", factorial);