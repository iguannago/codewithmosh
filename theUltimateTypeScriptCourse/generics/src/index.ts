console.log('Generic class');
class KeyValuePair<T, V> {
  constructor(public key: T, public value: V) {}

  wrapInArray<T>(value: T) {
    return [value];
  }
}

let myKeyValuePair: KeyValuePair<number, string> = new KeyValuePair(1, 'a');
console.log(myKeyValuePair);
console.log(myKeyValuePair.wrapInArray(1));
console.log(myKeyValuePair.wrapInArray('1'));

//generic function
console.log('\n\nGeneric function');

function wrapInArray<T>(value: T): [T] {
  return [value];
}
console.log(wrapInArray(1));
console.log(wrapInArray('1'));
