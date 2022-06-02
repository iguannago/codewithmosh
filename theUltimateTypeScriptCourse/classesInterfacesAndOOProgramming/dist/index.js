"use strict";
console.log('Classes, Interfaces and OO programming module');
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error(`invalid amount: ${amount}`);
        this.balance += amount;
    }
}
let myAccount = new Account(1, 'David', 100);
console.log(`myAccount: ${JSON.stringify(myAccount)}`);
myAccount.deposit(20);
console.log(`myAccount: ${JSON.stringify(myAccount)}`);
//# sourceMappingURL=index.js.map