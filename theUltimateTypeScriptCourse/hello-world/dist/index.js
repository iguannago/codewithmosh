"use strict";
let age = 20;
let sales = 123456789;
let course = 'TypeScript';
let numbers = [1, 2, 3];
let user = [1, 'David'];
if (age < 15)
    age += 10;
numbers.forEach((n) => console.log(n));
console.log(`user: ${user[0]}`);
console.log(`user: ${user[1]}`);
console.log(`your age is: ${age}`);
console.log(`your sales is: ${sales}`);
console.log(`your course is: ${course}`);
console.log(`your array of numbers is: ${numbers}`);
render('myDocument.txt');
function render(document) {
    console.log(`document is: ${document}`);
}
//# sourceMappingURL=index.js.map