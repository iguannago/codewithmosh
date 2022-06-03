console.log('Classes, Interfaces and OO programming module');

class Account {
  readonly id: number;
  readonly owner: string;
  private _balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error(`invalid amount: ${amount}`);
    this._balance += amount;
  }

  public get balance(): number {
    return this._balance;
  }
}

let myAccount: Account = new Account(1, 'David', 0);

console.log(`myAccount: ${JSON.stringify(myAccount)}`);
myAccount.deposit(20);
console.log(`myAccount: ${JSON.stringify(myAccount)}`);
myAccount.balance;
