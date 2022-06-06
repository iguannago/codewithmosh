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

//polymorphism

function printNames(people: Person[]) {
  people.forEach((p: Person) => {
    console.log(p.fullName);
  });
}

printNames([
  new Teacher('David', 'Crespo'),
  new Person('Fatima', 'Lozano'),
  new Student(1, 'David Jr', 'Crespo'),
  new Student(2, 'Juan', 'Crespo'),
]);

//private and protected members
// private can be accessed from withing the class where the method is defined
// protected is the same as private but they can also be accessed from the inherated classes.

//abstract classes and methods

abstract class Shape {
  constructor(private _colour: string) {}

  public get colour(): string {
    return this._colour;
  }

  abstract render(): void;
}

class Circle extends Shape {
  constructor(private _radious: number, colour: string) {
    super(colour);
  }
  public get radious(): number {
    return this._radious;
  }

  public override render(): void {
    console.log(
      `Circle: radious is: ${this.radious} and colour is: ${this.colour}`
    );
  }
}

let myCircle: Circle = new Circle(10, 'red');
myCircle.render();

//interfaces
abstract class Calendar {
  constructor(public name: string) {}

  abstract addEvent(): void;
  abstract removeEvent(): void;
}

interface ICalendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

class GoogleCalendar implements ICalendar {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error('Method not implemented.');
  }
  removeEvent(): void {
    throw new Error('Method not implemented.');
  }
}

let myGoogleCalendar: GoogleCalendar = new GoogleCalendar('my google calendar');
console.log(myGoogleCalendar.name);

// exercises

class Logger {
  constructor(private _fileName: string) {}
  public get fileName(): string {
    return this._fileName;
  }

  writeMessage(message: string): void {
    console.log(
      `writting message: ${message} into filename: ${this._fileName}`
    );
  }
}
let myLogger: Logger = new Logger('org.expressjs');
myLogger.writeMessage('DEBUG');

console.log(`\n\nExercise2`);
class Person2 {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `fullName: ${this.firstName} ${this.lastName}`;
  }
}
let myPerson2: Person2 = new Person2('David', 'Crespo');
console.log(myPerson2.fullName);

class Employee extends Person2 {
  constructor(private _salary: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  get salary(): number {
    return this._salary;
  }
}
let myEmployee: Employee = new Employee(100, 'Fatima', 'Lozano');
console.log(myEmployee.fullName);
console.log(myEmployee.salary);

let myPeopleList: Person2[] = [myPerson2, myEmployee];
myPeopleList.forEach((p) => {
  if (p instanceof Employee) {
    console.log('employee');
    console.log(`${p.fullName} with ${p.salary} salary`);
  } else {
    console.log('person2');
    console.log(p.fullName);
  }
});
