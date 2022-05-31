let age = 20;
let sales = 123_456_789;
let course = 'TypeScript';

if (age < 15) age += 10;

console.log(`your age is: ${age}`);
console.log(`your sales is: ${sales}`);
console.log(`your course is: ${course}`);

render('myDocument.txt');

function render(document: String) {
  console.log(`document is: ${document}`);
}
