"use strict";
class Validator {
    constructor(data) {
        this.data = data;
    }
    dataSum(value) {
        if (typeof (this.data) === "number") {
            return `A soma foi: ${this.data + value}`;
        }
        else {
            return this.data + ' Não foi possível somar!';
        }
    }
}
let validate1 = new Validator(100);
console.log(validate1.dataSum(55));
let validate2 = new Validator('Concurso');
console.log(validate2.dataSum(33));
