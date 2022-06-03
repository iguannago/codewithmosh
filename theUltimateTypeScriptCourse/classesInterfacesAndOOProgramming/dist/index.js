"use strict";
console.log('Classes, Interfaces and OO programming module');
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get nickname() {
        var _a;
        return (_a = this._nickname) !== null && _a !== void 0 ? _a : 'no nickname defined';
    }
    set nickname(value) {
        this._nickname = value;
    }
    get balance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error(`invalid amount: ${amount}`);
        this._balance += amount;
    }
}
let myAccount = new Account(1, 'David', 0);
console.log(`myAccount: ${JSON.stringify(myAccount)}`);
myAccount.deposit(20);
console.log(`myAccount: ${JSON.stringify(myAccount)}`);
myAccount.balance;
console.log(myAccount.balance);
myAccount.nickname = 'Iguannago';
console.log(myAccount.nickname);
//# sourceMappingURL=index.js.map