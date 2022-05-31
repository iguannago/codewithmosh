import { ModuleDetectionKind } from 'typescript';

let age = 20;
let sales = 123_456_789;
let course = 'TypeScript';
let numbers = [1, 2, 3];
let user: [number, string] = [1, 'David'];

if (age < 15) age += 10;

numbers.forEach((n) => console.log(n));

console.log(`user: ${user[0]}`);
console.log(`user: ${user[1]}`);

console.log(`your age is: ${age}`);
console.log(`your sales is: ${sales}`);
console.log(`your course is: ${course}`);
console.log(`your array of numbers is: ${numbers}`);

render('myDocument.txt');

function render(document: String) {
  console.log(`document is: ${document}`);
}
