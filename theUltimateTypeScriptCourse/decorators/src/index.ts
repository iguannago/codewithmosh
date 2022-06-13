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

class Person {
  @Log
  say(message: string) {
    console.log(`another message: ${message}`);
  }
}

let myPerson: Person = new Person();
myPerson.say('hello world!');
