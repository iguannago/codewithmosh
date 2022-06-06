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
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log('walking...');
    }
}
class Student extends Person {
    constructor(studentId, firtName, lastName) {
        super(firtName, lastName);
        this.studentId = studentId;
    }
    takeExam() {
        console.log('taking an exam...');
    }
}
let student = new Student(1, 'David', 'Crespo');
console.log(student.fullName);
student.walk();
student.takeExam();
class Teacher extends Person {
    get fullName() {
        return `professor: ${super.fullName}`;
    }
}
let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName);
function printNames(people) {
    people.forEach((p) => {
        console.log(p.fullName);
    });
}
printNames([
    new Teacher('David', 'Crespo'),
    new Person('Fatima', 'Lozano'),
    new Student(1, 'David Jr', 'Crespo'),
    new Student(2, 'Juan', 'Crespo'),
]);
class Shape {
    constructor(_colour) {
        this._colour = _colour;
    }
    get colour() {
        return this._colour;
    }
}
class Circle extends Shape {
    constructor(_radious, colour) {
        super(colour);
        this._radious = _radious;
    }
    get radious() {
        return this._radious;
    }
    render() {
        console.log(`Circle: radious is: ${this.radious} and colour is: ${this.colour}`);
    }
}
let myCircle = new Circle(10, 'red');
myCircle.render();
class Calendar {
    constructor(name) {
        this.name = name;
    }
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error('Method not implemented.');
    }
    removeEvent() {
        throw new Error('Method not implemented.');
    }
}
let myGoogleCalendar = new GoogleCalendar('my google calendar');
console.log(myGoogleCalendar.name);
class Logger {
    constructor(_fileName) {
        this._fileName = _fileName;
    }
    get fileName() {
        return this._fileName;
    }
    writeMessage(message) {
        console.log(`writting message: ${message} into filename: ${this._fileName}`);
    }
}
let myLogger = new Logger('org.expressjs');
myLogger.writeMessage('DEBUG');
console.log(`\n\nExercise2`);
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `fullName: ${this.firstName} ${this.lastName}`;
    }
}
let myPerson2 = new Person2('David', 'Crespo');
console.log(myPerson2.fullName);
class Employee extends Person2 {
    constructor(_salary, firstName, lastName) {
        super(firstName, lastName);
        this._salary = _salary;
    }
    get salary() {
        return this._salary;
    }
}
let myEmployee = new Employee(100, 'Fatima', 'Lozano');
console.log(myEmployee.fullName);
console.log(myEmployee.salary);
let myPeopleList = [myPerson2, myEmployee];
myPeopleList.forEach((p) => {
    if (p instanceof Employee) {
        console.log('employee');
        console.log(`${p.fullName} with ${p.salary} salary`);
    }
    else {
        console.log('person2');
        console.log(p.fullName);
    }
});
//# sourceMappingURL=index.js.map