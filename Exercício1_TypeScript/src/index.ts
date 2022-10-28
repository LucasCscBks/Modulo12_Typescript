class Validator {
    _data: number | string | boolean | void | null | undefined;
    constructor (data: any) {
        this._data = data
    }
}

class StringValidator extends Validator {
    constructor (data: any) {
        try {
            super(data)
            if (typeof(data) === 'string') {
                console.log(`${data} : É uma string!`)
            } else {
                throw new Error(`O tipo está errado`)
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}

class NumberValidator extends Validator {
    constructor (data: any) {
        try {
            super(data)
            if (typeof(data) === 'number') {
                console.log(`${data} : É um número!`)
            } else {
                throw new Error(`O tipo está errado`)
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}

class BooleanValidator extends Validator {
    constructor (data: any) {
        try {
            super(data)
            if (typeof(data) === 'boolean') {
                console.log(`${data} : É booleano`)
            } else {
                throw new Error(`O tipo está errado`)
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}

let stringError = new StringValidator(22);
let numberError = new NumberValidator(true);
let booleanError = new BooleanValidator('teste');

let string = new StringValidator('Teste correto');
let number = new NumberValidator(77);
let boolean = new BooleanValidator(true);