console.log('Generic class');
class KeyValuePair<T, V> {
  constructor(public key: T, public value: V) {}

  wrapInArray<T>(value: T) {
    return [value];
  }
}

let myKeyValuePair: KeyValuePair<number, string> = new KeyValuePair(1, 'a');
console.log(myKeyValuePair);
console.log(myKeyValuePair.wrapInArray(1));
console.log(myKeyValuePair.wrapInArray('1'));

//generic function
console.log('\n\nGeneric function');

function wrapInArray<T>(value: T): [T] {
  return [value];
}
console.log(wrapInArray(1));
console.log(wrapInArray('1'));

//my generic classes
console.log('\n\nmy generic classes');
class Result<T extends Thing> {
  constructor(private _data: T | null, private _error: string | null) {}

  public get error(): string | null {
    return this._error;
  }

  public get data(): T | null {
    return this._data;
  }
}

class Thing {}

class User extends Thing {
  constructor(private _username: string) {
    super();
  }

  public get username(): string {
    return this._username;
  }
}

let myUserResult: Result<User> = new Result<User>(
  new User('some username'),
  ''
);
console.log(`myUserResult: ${JSON.stringify(myUserResult)}`);

class Product extends Thing {
  constructor(private _title: string) {
    super();
  }

  public get title(): string {
    return this._title;
  }
}
let myProductResult: Result<Product> = new Result<Product>(
  new Product('some product'),
  ''
);
console.log(`myProductResult: ${JSON.stringify(myProductResult)}`);

function callUrl<T extends Thing>(
  url: string | null,
  data: T | null
): Result<T> {
  console.log(`making call to ${url}`);
  return new Result<T>(data, '');
}

console.log(
  `callUrl: ${JSON.stringify(
    callUrl('http://users/1', new User('David Crespo'))
  )}`
);
console.log(
  `callUrl: ${JSON.stringify(
    callUrl('http://products/1', new Product('my Product'))
  )}`
);
console.log(`callUrl: ${JSON.stringify(callUrl(null, null))}`);

//my generic interface
console.log('\n\nmy generic interface');

interface FlyBehaviour {
  fly(): void;
}

class FlyHigh implements FlyBehaviour {
  fly(): void {
    console.log('I can fly high');
  }
}

class CannotFly implements FlyBehaviour {
  fly(): void {
    console.log('I cannot fly');
  }
}
class Bird {
  constructor(private _name: string, private _flyBehaviour: FlyBehaviour) {}

  public get name(): string {
    return this._name;
  }

  public get flyBehaviour(): FlyBehaviour {
    return this._flyBehaviour;
  }

  fly(): void {
    this._flyBehaviour.fly();
  }
}
let chicken: Bird = new Bird('chicken', new CannotFly());
chicken.fly();
let eagle: Bird = new Bird('eagle', new FlyHigh());
eagle.fly();

//generic constraints
console.log('\n\ngeneric constraints');

function echo<T extends Thing>(value: T): T {
  return value;
}
console.log(`echo: ${JSON.stringify(echo(new User('some user')))}`);
console.log(`echo: ${JSON.stringify(echo(new Product('some product')))}`);

let listOfThings: Thing[] = [
  new User('some user'),
  new Product('some product'),
];

listOfThings.forEach((thing) => console.log(`thing: ${JSON.stringify(thing)}`));

// extending generic classes
console.log(`\n\n extending generic classes`);
interface ProductForStore {
  name: string;
  price: number;
  description: string;
}

class Store<T> {
  protected _objectList: T[] = [];

  add(object: T): void {
    console.log(`adding object: ${JSON.stringify(object)}`);
    this._objectList.push(object);
  }

  findByProperty(property: keyof T, value: unknown): T | undefined {
    return this._objectList.find((obj) => obj[property] === value);
  }
}

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

class SearchableStore<T extends { name: string }> extends Store<T> {
  findByName(name: string): T | undefined {
    return this._objectList.find((obj) => obj.name === name);
  }
}

class ProductStore extends Store<ProductForStore> {
  filterByCategory(category: string): ProductForStore[] {
    return this._objectList.filter((p) => p.name === category);
  }
}

// the keyof operator
console.log(`\n\n the keyof operator`);
let store = new Store<ProductForStore>();
store.add({ name: 'some product', price: 100, description: 'some desc' });
store.add({
  name: 'some product2',
  price: 200,
  description: 'some other desc',
});
console.log(
  `findByProperty: ${JSON.stringify(
    store.findByProperty('name', 'some product')
  )}`
);
console.log(
  `findByProperty: ${JSON.stringify(store.findByProperty('price', 200))}`
);

// the type mapping
console.log(`\n\n the type mapping`);
type ReadOnly<T> = {
  readonly [key in keyof T]: T[key];
};

let readOnlyProductForStore: ReadOnly<ProductForStore> = {
  name: 'laptop',
  price: 3000,
  description: 'laptop description',
};

console.log(
  `readOnlyProductForStore: ${JSON.stringify(readOnlyProductForStore)}`
);

type Optional<T> = {
  [key in keyof T]?: T[key];
};

//check out the TS utility types: https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html

//exercises
console.log('\n\n exercises');
function echo2<T>(arg: T): T {
  return arg;
}

function printName2<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

interface Entity<T> {
  id: T;
}

let numberIdEntity: Entity<number> = { id: 2 };
console.log(`numberIdEntity: ${numberIdEntity.id}`);

interface UserExercise {
  userId: number;
  username: string;
}

let keyOfUserExercise: keyof UserExercise;

keyOfUserExercise = 'userId';
keyOfUserExercise = 'username';
