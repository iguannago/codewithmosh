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

//generic interfaces
console.log('\n\nGeneric interfaces');
class Result<T> {
  constructor(private _data: T | null, private _error: string | null) {}

  public get error(): string | null {
    return this._error;
  }

  public get data(): T | null {
    return this._data;
  }
}
class User {
  constructor(private _username: string) {}

  public get username(): string {
    return this._username;
  }
}

let myUserResult: Result<User> = new Result<User>(
  new User('some username'),
  null
);
console.log(`myUserResult: ${JSON.stringify(myUserResult)}`);

class Product {
  constructor(private _title: string) {}

  public get title(): string {
    return this._title;
  }
}
let myProductResult: Result<Product> = new Result<Product>(
  new Product('some product'),
  null
);
console.log(`myProductResult: ${JSON.stringify(myProductResult)}`);
