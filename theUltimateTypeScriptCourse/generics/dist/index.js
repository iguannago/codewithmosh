"use strict";
console.log('Generic class');
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    wrapInArray(value) {
        return [value];
    }
}
let myKeyValuePair = new KeyValuePair(1, 'a');
console.log(myKeyValuePair);
console.log(myKeyValuePair.wrapInArray(1));
console.log(myKeyValuePair.wrapInArray('1'));
console.log('\n\nGeneric function');
function wrapInArray(value) {
    return [value];
}
console.log(wrapInArray(1));
console.log(wrapInArray('1'));
console.log('\n\nmy generic classes');
class Result {
    constructor(_data, _error) {
        this._data = _data;
        this._error = _error;
    }
    get error() {
        return this._error;
    }
    get data() {
        return this._data;
    }
}
class User {
    constructor(_username) {
        this._username = _username;
    }
    get username() {
        return this._username;
    }
}
let myUserResult = new Result(new User('some username'), null);
console.log(`myUserResult: ${JSON.stringify(myUserResult)}`);
class Product {
    constructor(_title) {
        this._title = _title;
    }
    get title() {
        return this._title;
    }
}
let myProductResult = new Result(new Product('some product'), null);
console.log(`myProductResult: ${JSON.stringify(myProductResult)}`);
console.log('\n\nmy generic interface');
class FlyHigh {
    fly() {
        console.log('I can fly high');
    }
}
class CannotFly {
    fly() {
        console.log('I cannot fly');
    }
}
class Bird {
    constructor(_name, _flyBehaviour) {
        this._name = _name;
        this._flyBehaviour = _flyBehaviour;
    }
    get name() {
        return this._name;
    }
    get flyBehaviour() {
        return this._flyBehaviour;
    }
    fly() {
        this._flyBehaviour.fly();
    }
}
let chicken = new Bird('chicken', new CannotFly());
chicken.fly();
let eagle = new Bird('eagle', new FlyHigh());
eagle.fly();
//# sourceMappingURL=index.js.map