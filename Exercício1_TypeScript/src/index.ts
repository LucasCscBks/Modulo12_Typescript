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

// let stringError = new StringValidator(22);
// let numberError = new NumberValidator(true);
// let booleanError = new BooleanValidator('teste');

// let string = new StringValidator('Teste correto');
// let number = new NumberValidator(77);
// let boolean = new BooleanValidator(true);

class RegexValidator extends StringValidator {
    constructor (data: any) {
        super(data)
    }

    get regex() {
        return new RegExp('')
    }
}

class EmailValidator extends RegexValidator {
    constructor (data: any) {
        super(data)
    }

    get regex(): RegExp {
        return new RegExp('/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim')
    }
}

class PasswordValidator extends RegexValidator {
    constructor (data: any) {
        super(data)
    }

    get regex(): RegExp {
        return new RegExp('/^\w{1,}$/gim')
    }
}

class NameValidator extends RegexValidator {
    constructor (data: any) {
        super(data)
    }

    get regex(): RegExp {
        return new RegExp('/^([a-z]{1,})([ ]{1}[a-z]{1,}){0,}$/gim')
    }
}


class EmailInput extends HTMLElement {

    private emailInput : HTMLInputElement;

    constructor () {
        super()

        console.log('classe instanciada')
        const shadow = this.attachShadow( {mode: "closed"} );
        this.emailInput = document.createElement('input');
        this.emailInput.type = 'email';
        this.emailInput.style.border = 'none'
        this.emailInput.onchange = (e) => this.onChangedEmail(e);
        shadow.appendChild(this.emailInput)
    }

    onChangedEmail (e : Event) {
        console.log(this.emailInput.value)
        let validator = new EmailValidator('')
        let tnc = validator.regex
        console.log(tnc.test('lucas@gmail.com.br'))
        let vsf = new RegExp('/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim')
        let result = vsf.test('lucas@gmail.com')
        console.log('Resultado: ', result)
    }
}

class PasswordInput extends HTMLElement {

    private passwordInput : HTMLInputElement;

    constructor () {
        super()

        console.log('classe instanciada')
        const shadow = this.attachShadow( {mode: "closed"} );
        this.passwordInput = document.createElement('input');
        this.passwordInput.type = 'email';
        this.passwordInput.style.border = 'none'
        this.passwordInput.onchange = (e) => this.onChangedEmail(e);
        shadow.appendChild(this.passwordInput)
    }

    onChangedEmail (e : Event) {
        console.log(this.passwordInput.value)
        let test = new RegexValidator(this.passwordInput.value)
    }
}

class NameInput extends HTMLElement {

    private nameInput : HTMLInputElement;

    constructor () {
        super()

        console.log('classe instanciada')
        const shadow = this.attachShadow( {mode: "closed"} );
        this.nameInput = document.createElement('input');
        this.nameInput.type = 'email';
        this.nameInput.style.border = 'none'
        this.nameInput.onchange = (e) => this.onChangedEmail(e);
        shadow.appendChild(this.nameInput)
    }

    onChangedEmail (e : Event) {
        console.log(this.nameInput.value)
        let test = new RegexValidator(this.nameInput.value)
    }
}


customElements.define("email-input", EmailInput);
customElements.define("password-input", PasswordInput);
customElements.define("name-input", NameInput);