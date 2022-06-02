console.log('Advanced types module');

let user: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'David',
  retire: (date: Date) => console.log(date),
};

type User = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let userType: User = {
  id: 1,
  name: 'David2',
  retire: (date: Date) => console.log(date),
};

console.log(`user type: ${JSON.stringify(userType)}`);

function kgToLbs(weight: number | string): number {
  if (typeof weight === 'number') return weight;
  return 10;
}

console.log(`kgToLbs: ${kgToLbs('David')}`);

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type widget = Draggable & Resizable;

let uiWidget: widget = {
  drag: () => {},
  resize: () => {},
};

let quantity: 50 | 100 = 100;
type Quantity = 50 | 100;

let myQuantity: Quantity = 100;

function greet(name: string) {
  if (name) console.log(name.toLowerCase());
  else console.log('Hola');
}

greet('David');

type Customer = {
  birthday: Date;
};

// the nullish coaelscing operator

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

console.log(`getCustomer: ${getCustomer(0)?.birthday}`);

let speed: number | null = 0;

let ride = {
  speed: speed ?? 30,
};

console.log(ride.speed);

// type assertions

// let phone = document.getElementById('phone') as HTMLInputElement;
// let phone2 = <HTMLInputElement>document.getElementById('phone');

// prefer the Unknown type before the any type because it has some type checking features

function handleUnkownType(someParam: unknown) {
  let someParamIsValid = someParam ?? 'DEFAULT';
  if (typeof someParamIsValid === 'string') {
    console.log(someParamIsValid.toLowerCase());
  }
  if (typeof someParamIsValid === 'number') {
    console.log(someParamIsValid);
  }
}

handleUnkownType(100);

// handle unreachable code witht the never type

function someInfiniteLoop(someMessage: string): never {
  while (true) {
    console.log(`some message: ${someMessage}`);
  }
}

// someInfiniteLoop('hello');
// console.log('some unreachable message...');
