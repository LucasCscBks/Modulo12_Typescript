class Validator {
    data: number | string | boolean | void | null | undefined;
    constructor (data: number | string | boolean | void | null | undefined) {
        this.data = data
    }

    dataSum(value: number) {
        if (typeof(this.data) === "number") {
            return `A soma foi: ${this.data + value}` 
        } else {
            return this.data + ' Não foi possível somar!'
        }
    }
}

let validate1 = new Validator(100)
console.log(validate1.dataSum(55))

let validate2 = new Validator('Concurso')
console.log(validate2.dataSum(33))