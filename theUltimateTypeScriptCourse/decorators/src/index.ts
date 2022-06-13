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
