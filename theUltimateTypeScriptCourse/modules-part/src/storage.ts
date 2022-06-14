export default class Store {
  store() {
    let compress: Compressor = new Compressor();
    console.log(compress);

    let encryptor: Encryptor = new Encryptor();
    console.log(encryptor);
  }
}

class Compressor {}
class Encryptor {}

export enum Format {
  Raw,
  Compressed,
}
