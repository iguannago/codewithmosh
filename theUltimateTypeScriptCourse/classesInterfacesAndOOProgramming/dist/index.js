"use strict";
console.log('Classes, Interfaces and OO programming module');
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error(`invalid amount: ${amount}`);
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let myAccount = new Account(1, 'David', 0);
console.log(`myAccount: ${JSON.stringify(myAccount)}`);
myAccount.deposit(20);
console.log(`myAccount: ${JSON.stringify(myAccount)}`);
myAccount.balance;
//# sourceMappingURL=index.js.map