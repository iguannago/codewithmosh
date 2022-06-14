import { Circle, Square } from './shapes';
import Store, { Format } from './Storage';

let myCircle: Circle = new Circle(1);
console.log(myCircle);

let mySquare: Square = new Square(2);
console.log(mySquare);

let myStorage: Store = new Store();
console.log(myStorage);
console.log(Format.Compressed);
