import { Circle } from './shapes';
import Store, { Format } from './storage';

let myCircle: Circle = new Circle(1);
console.log(myCircle);

let myStorage: Store = new Store();
console.log(myStorage);
console.log(Format.Compressed);
