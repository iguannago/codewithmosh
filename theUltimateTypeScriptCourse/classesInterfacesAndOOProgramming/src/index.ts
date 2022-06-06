console.log('Classes, Interfaces and OO programming module');

class Account {
  private _nickname?: string;
  constructor(
    public readonly id: number,
    public readonly owner: string,
    private _balance: number
  ) {}

  public get nickname(): string {
    return this._nickname ?? 'no nickname defined';
  }
  public set nickname(value: string) {
    this._nickname = value;
  }
  public get balance(): number {
    return this._balance;
  }
  deposit(amount: number): void {
    if (amount <= 0) throw new Error(`invalid amount: ${amount}`);
    this._balance += amount;
  }
}

let myAccount: Account = new Account(1, 'David', 0);

console.log(`myAccount: ${JSON.stringify(myAccount)}`);
myAccount.deposit(20);
console.log(`myAccount: ${JSON.stringify(myAccount)}`);
myAccount.balance;
console.log(myAccount.balance);
myAccount.nickname = 'Iguannago';
console.log(myAccount.nickname);

// index signatures

class SeatAssignment {
  [seatNumber: string]: string;
}

let mySeat: SeatAssignment = new SeatAssignment();
mySeat.A1 = 'David Crespo';
console.log(`mySeat: ${JSON.stringify(mySeat)}`);

//static members

class Ride {
  private static _activeRides: number = 0;
  public static get activeRides(): number {
    return Ride._activeRides;
  }

  public start(): void {
    Ride._activeRides++;
  }

  public stop(): void {
    if (Ride._activeRides > 0) {
      Ride._activeRides--;
    } else {
      Ride._activeRides = 0;
    }
  }
}

let myRide1: Ride = new Ride();
myRide1.start();
myRide1.start();

let myRide2: Ride = new Ride();
myRide2.start();
myRide2.stop();

console.log(`Ride.activeRides: ${Ride.activeRides}`);

// inheritance

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  walk(): void {
    console.log('walking...');
  }
}

class Student extends Person {
  constructor(public studentId: number, firtName: string, lastName: string) {
    super(firtName, lastName);
  }

  takeExam(): void {
    console.log('taking an exam...');
  }
}

let student = new Student(1, 'David', 'Crespo');
console.log(student.fullName);
student.walk();
student.takeExam();

class Teacher extends Person {
  override get fullName(): string {
    return `professor: ${super.fullName}`;
  }
}

let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName);
