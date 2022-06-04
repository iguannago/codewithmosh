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
class SeatAssignment {
}
let mySeat = new SeatAssignment();
mySeat.A1 = 'David Crespo';
console.log(`mySeat: ${JSON.stringify(mySeat)}`);
class Ride {
    static get activeRides() {
        return Ride._activeRides;
    }
    start() {
        Ride._activeRides++;
    }
    stop() {
        if (Ride._activeRides > 0) {
            Ride._activeRides--;
        }
        else {
            Ride._activeRides = 0;
        }
    }
}
Ride._activeRides = 0;
let myRide1 = new Ride();
myRide1.start();
myRide1.start();
let myRide2 = new Ride();
myRide2.start();
myRide2.stop();
console.log(`Ride.activeRides: ${Ride.activeRides}`);
//# sourceMappingURL=index.js.map