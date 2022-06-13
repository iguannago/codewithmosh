"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('what are decorators');
function Component(constructor) {
    console.log('component decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDom = () => {
        console.log('Inserting the component in the DOM');
    };
}
function Pipe(constructor) {
    console.log('my pipe decorator');
    constructor.prototype.pipe = true;
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Pipe,
    Component
], ProfileComponent);
console.log('\n\n method decorators');
function Log(target, methodName, descriptor) {
    console.log('Log decorator...');
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log('before...');
        original.call(this, ...args);
        console.log('after...');
    };
}
function Capitalise(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof result === 'string' ? result.toUpperCase() : result;
    };
}
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    say(message) {
        console.log(`another message: ${message}`);
    }
}
__decorate([
    Capitalise
], Person.prototype, "fullName", null);
__decorate([
    Log
], Person.prototype, "say", null);
let myPerson = new Person('David', 'Crespo');
myPerson.say('hello world!');
console.log(myPerson.fullName);
//# sourceMappingURL=index.js.map