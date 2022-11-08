"use strict";
class Validator {
    constructor(data) {
        this._data = data;
    }
}
class StringValidator extends Validator {
    constructor(data) {
        try {
            super(data);
            if (typeof (data) === 'string') {
                console.log(`${data} : É uma string!`);
            }
            else {
                throw new Error(`O tipo está errado`);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}
class NumberValidator extends Validator {
    constructor(data) {
        try {
            super(data);
            if (typeof (data) === 'number') {
                console.log(`${data} : É um número!`);
            }
            else {
                throw new Error(`O tipo está errado`);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}
class BooleanValidator extends Validator {
    constructor(data) {
        try {
            super(data);
            if (typeof (data) === 'boolean') {
                console.log(`${data} : É booleano`);
            }
            else {
                throw new Error(`O tipo está errado`);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}
// let stringError = new StringValidator(22);
// let numberError = new NumberValidator(true);
// let booleanError = new BooleanValidator('teste');
// let string = new StringValidator('Teste correto');
// let number = new NumberValidator(77);
// let boolean = new BooleanValidator(true);
class RegexValidator extends StringValidator {
    constructor(data) {
        super(data);
    }
    get regex() {
        return new RegExp('');
    }
}
class EmailValidator extends RegexValidator {
    constructor(data) {
        super(data);
    }
    get regex() {
        return new RegExp('/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim');
    }
}
let a = new EmailValidator('');
console.log('AQUI', a.regex);
class PasswordValidator extends RegexValidator {
    constructor(data) {
        super(data);
    }
}
class NameValidator extends RegexValidator {
    constructor(data) {
        super(data);
    }
}
class EmailInput extends HTMLElement {
    constructor() {
        super();
        console.log('classe instanciada');
        const shadow = this.attachShadow({ mode: "closed" });
        this.emailInput = document.createElement('input');
        this.emailInput.type = 'email';
        this.emailInput.style.border = 'none';
        this.emailInput.onchange = (e) => this.onChangedEmail(e);
        shadow.appendChild(this.emailInput);
    }
    onChangedEmail(e) {
        console.log(this.emailInput.value);
        let test = new RegexValidator(this.emailInput.value);
    }
}
customElements.define("email-input", EmailInput);
