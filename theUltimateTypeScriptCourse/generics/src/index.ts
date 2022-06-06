class KeyValuePair<T, V> {
  constructor(public key: T, public value: V) {}
}

let myKeyValuePair: KeyValuePair<number, string> = new KeyValuePair(1, 'a');
console.log(myKeyValuePair);
