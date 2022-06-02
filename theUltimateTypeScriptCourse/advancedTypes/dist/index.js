"use strict";
var _a;
console.log('Advanced types module');
let user = {
    id: 1,
    name: 'David',
    retire: (date) => console.log(date),
};
let userType = {
    id: 1,
    name: 'David2',
    retire: (date) => console.log(date),
};
console.log(`user type: ${JSON.stringify(userType)}`);
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight;
    return 10;
}
console.log(`kgToLbs: ${kgToLbs('David')}`);
let uiWidget = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
let myQuantity = 100;
function greet(name) {
    if (name)
        console.log(name.toLowerCase());
    else
        console.log('Hola');
}
greet('David');
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
console.log(`getCustomer: ${(_a = getCustomer(0)) === null || _a === void 0 ? void 0 : _a.birthday}`);
let speed = 0;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
console.log(ride.speed);
function handleUnkownType(someParam) {
    let someParamIsValid = someParam !== null && someParam !== void 0 ? someParam : 'DEFAULT';
    if (typeof someParamIsValid === 'string') {
        console.log(someParamIsValid.toLowerCase());
    }
    if (typeof someParamIsValid === 'number') {
        console.log(someParamIsValid);
    }
}
handleUnkownType(100);
function someInfiniteLoop(someMessage) {
    while (true) {
        console.log(`some message: ${someMessage}`);
    }
}
let myCustomUser = {
    name: 'David',
    age: 43,
    occupation: 'Senior developer',
};
let myOtherCustomUser = {
    name: 'Fatima',
    age: 39,
};
console.log(`myCustomUser: ${JSON.stringify(myCustomUser)}`);
console.log(`myOtherCustomUser: ${JSON.stringify(myOtherCustomUser)}`);
let myBird = {
    fly: (msg) => console.log(msg),
};
myBird.fly('birds can fly');
let myFish = {
    swim: (msg) => console.log(msg),
};
myFish.swim('fish can swim');
let myPet = {
    fly: (msg) => console.log(msg),
    swim: (msg) => console.log(msg),
};
myPet.fly('pet can fly');
myPet.swim('pet can also swim');
console.log("Friday");
//# sourceMappingURL=index.js.map