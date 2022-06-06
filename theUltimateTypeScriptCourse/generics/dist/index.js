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
console.log('\n\nGeneric interfaces');
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
//# sourceMappingURL=index.js.map