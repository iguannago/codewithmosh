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

@Component
class ProfileComponent {}
