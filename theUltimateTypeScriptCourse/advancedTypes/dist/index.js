"use strict";
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
    if (typeof weight === 'number') {
        return weight;
    }
    return 10;
}
console.log(`kgToLbs: ${kgToLbs('David')}`);
//# sourceMappingURL=index.js.map