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
//# sourceMappingURL=index.js.map