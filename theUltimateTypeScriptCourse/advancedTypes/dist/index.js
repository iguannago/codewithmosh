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
//# sourceMappingURL=index.js.map