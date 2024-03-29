//what are decorators
console.log('what are decorators');

//class decorator
function Component(constructor: Function) {
  console.log('component decorator called');
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDom = () => {
    console.log('Inserting the component in the DOM');
  };
}

function Pipe(constructor: Function) {
  console.log('my pipe decorator');
  constructor.prototype.pipe = true;
}

@Pipe
@Component
class ProfileComponent {}

// method decorators
console.log('\n\n method decorators');

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  console.log('Log decorator...');
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log('before...');
    original.call(this, ...args);
    console.log('after...');
  };
}

// accesor decorators
console.log('\n\n method decorators');

function Capitalise(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === 'string' ? result.toUpperCase() : result;
  };
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalise
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @Log
  say(message: string) {
    console.log(`another message: ${message}`);
  }
}

let myPerson: Person = new Person('David', 'Crespo');
myPerson.say('hello world!');
console.log(myPerson.fullName);

// property decorator
console.log('\n\nproperty decorator');

function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(
            `${propertyName} should be at least ${length} chars long.`
          );
        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let myUser: User = new User('12df4d');
console.log(myUser.password);

// exercises
console.log('\n\nexercises');

function Sauce(sauce: string) {
  return (constructor: Function) => {
    console.log(sauce);
    constructor.prototype.sauce = sauce;
  };
}

@Sauce('pesto')
class Pizza {}

let myPizza: Pizza = new Pizza();
console.log(myPizza);
