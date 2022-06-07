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
class Thing {
}
class User extends Thing {
    constructor(_username) {
        super();
        this._username = _username;
    }
    get username() {
        return this._username;
    }
}
let myUserResult = new Result(new User('some username'), '');
console.log(`myUserResult: ${JSON.stringify(myUserResult)}`);
class Product extends Thing {
    constructor(_title) {
        super();
        this._title = _title;
    }
    get title() {
        return this._title;
    }
}
let myProductResult = new Result(new Product('some product'), '');
console.log(`myProductResult: ${JSON.stringify(myProductResult)}`);
function callUrl(url, data) {
    console.log(`making call to ${url}`);
    return new Result(data, '');
}
console.log(`callUrl: ${JSON.stringify(callUrl('http://users/1', new User('David Crespo')))}`);
console.log(`callUrl: ${JSON.stringify(callUrl('http://products/1', new Product('my Product')))}`);
console.log(`callUrl: ${JSON.stringify(callUrl(null, null))}`);
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
console.log('\n\ngeneric constraints');
function echo(value) {
    return value;
}
console.log(`echo: ${JSON.stringify(echo(new User('some user')))}`);
console.log(`echo: ${JSON.stringify(echo(new Product('some product')))}`);
let listOfThings = [
    new User('some user'),
    new Product('some product'),
];
listOfThings.forEach((thing) => console.log(`thing: ${JSON.stringify(thing)}`));
console.log(`\n\n extending generic classes`);
class Store {
    constructor() {
        this._objectList = [];
    }
    add(object) {
        console.log(`adding object: ${JSON.stringify(object)}`);
        this._objectList.push(object);
    }
    findByProperty(property, value) {
        return this._objectList.find((obj) => obj[property] === value);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
class SearchableStore extends Store {
    findByName(name) {
        return this._objectList.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        return this._objectList.filter((p) => p.name === category);
    }
}
console.log(`\n\n the keyof operator`);
let store = new Store();
store.add({ name: 'some product', price: 100, description: 'some desc' });
store.add({
    name: 'some product2',
    price: 200,
    description: 'some other desc',
});
console.log(`findByProperty: ${JSON.stringify(store.findByProperty('name', 'some product'))}`);
console.log(`findByProperty: ${JSON.stringify(store.findByProperty('price', 200))}`);
console.log(`\n\n the type mapping`);
let readOnlyProductForStore = {
    name: 'laptop',
    price: 3000,
    description: 'laptop description',
};
console.log(`readOnlyProductForStore: ${JSON.stringify(readOnlyProductForStore)}`);
console.log('\n\n exercises');
function echo2(arg) {
    return arg;
}
function printName2(obj) {
    console.log(obj.name);
}
let numberIdEntity = { id: 2 };
console.log(`numberIdEntity: ${numberIdEntity.id}`);
//# sourceMappingURL=index.js.map