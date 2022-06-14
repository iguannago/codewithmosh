import * as Shapes from './shapes';
import Store, { Format } from './storage';

let myCircle: Shapes.Circle = new Shapes.Circle(1);
console.log(myCircle);

let myStorage: Store = new Store();
console.log(myStorage);
console.log(Format.Compressed);
