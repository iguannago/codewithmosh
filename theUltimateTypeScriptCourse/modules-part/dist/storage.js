"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Format = void 0;
class Store {
    store() {
        let compress = new Compressor();
        console.log(compress);
        let encryptor = new Encryptor();
        console.log(encryptor);
    }
}
exports.default = Store;
class Compressor {
}
class Encryptor {
}
var Format;
(function (Format) {
    Format[Format["Raw"] = 0] = "Raw";
    Format[Format["Compressed"] = 1] = "Compressed";
})(Format = exports.Format || (exports.Format = {}));
//# sourceMappingURL=Storage.js.map