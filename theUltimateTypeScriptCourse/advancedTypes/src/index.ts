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



