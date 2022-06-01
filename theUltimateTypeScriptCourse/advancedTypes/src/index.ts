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
