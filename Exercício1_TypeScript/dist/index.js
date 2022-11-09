var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        return new RegExp(/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim);
    }
}
class PasswordValidator extends RegexValidator {
    constructor(data) {
        super(data);
    }
    get regex() {
        return new RegExp(/^\w{1,}$/gim);
    }
}
class NameValidator extends RegexValidator {
    constructor(data) {
        super(data);
    }
    get regex() {
        return new RegExp(/^([a-z]{1,})([ ]{1}[a-z]{1,}){0,}$/gim);
    }
}
class EmailInput extends HTMLElement {
    constructor() {
        super();
        console.log('classe email instanciada');
        const shadow = this.attachShadow({ mode: "closed" });
        this.emailInput = document.createElement('input');
        this.emailInput.type = 'email';
        this.emailInput.style.border = 'none';
        this.emailInput.onchange = (e) => this.onChangedEmail(e);
        shadow.appendChild(this.emailInput);
    }
    onChangedEmail(e) {
        try {
            console.log(this.emailInput.value);
            let test = new EmailValidator('').regex.test(this.emailInput.value);
            console.log(test);
            if (test === false) {
                throw new Error(`Email não validado`);
            }
        }
        catch (err) {
            console.log(err);
            this.emailInput.value = '';
        }
    }
    get value() {
        return this.emailInput.value;
    }
}
class PasswordInput extends HTMLElement {
    constructor() {
        super();
        console.log('classe password instanciada');
        const shadow = this.attachShadow({ mode: "closed" });
        this.passwordInput = document.createElement('input');
        this.passwordInput.type = 'password';
        this.passwordInput.style.border = 'none';
        this.passwordInput.onchange = (e) => this.onChangedPassword(e);
        shadow.appendChild(this.passwordInput);
    }
    onChangedPassword(e) {
        try {
            console.log(this.passwordInput.value);
            let test = new PasswordValidator('').regex.test(this.passwordInput.value);
            console.log(test);
            if (test === false) {
                throw new Error(`Password não validado`);
            }
        }
        catch (err) {
            console.log(err);
            this.passwordInput.value = '';
        }
    }
    get value() {
        return this.passwordInput.value;
    }
}
class NameInput extends HTMLElement {
    constructor() {
        super();
        console.log('classe instanciada');
        const shadow = this.attachShadow({ mode: "closed" });
        this.nameInput = document.createElement('input');
        this.nameInput.type = 'text';
        this.nameInput.style.border = 'none';
        this.nameInput.onchange = (e) => this.onChangedName(e);
        shadow.appendChild(this.nameInput);
    }
    onChangedName(e) {
        try {
            console.log(this.nameInput.value);
            let test = new NameValidator('').regex.test(this.nameInput.value);
            console.log(test);
            if (test === false) {
                throw new Error(`Name não validado`);
            }
        }
        catch (err) {
            console.log(err);
            this.nameInput.value = '';
        }
    }
    get value() {
        return this.nameInput.value;
    }
}
customElements.define("email-input", EmailInput);
customElements.define("password-input", PasswordInput);
customElements.define("name-input", NameInput);
let register = document.querySelector('#register');
let login = document.querySelector('#login');
let update = document.querySelector('#update');
register === null || register === void 0 ? void 0 : register.addEventListener('click', () => {
    let checkName = document.querySelector('#name_input');
    let checkPassword = document.querySelector('#password_input');
    let checkEmail = document.querySelector('#email_input');
    if (checkName.value != '' && checkEmail.value != '' && checkPassword.value != '') {
        console.log('campos preenchidos');
        let userData = {
            email: checkEmail.value,
            name: checkName.value,
            password: checkPassword.value
        };
        function doReq() {
            return __awaiter(this, void 0, void 0, function* () {
                let reqs = yield fetch('localhost:8000/accounts', {
                    method: 'POST',
                    body: JSON.stringify(userData),
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })
                    .then(res => res.json())
                    .catch(err => console.log(err));
            });
        }
        doReq();
    }
});
login === null || login === void 0 ? void 0 : login.addEventListener('click', () => {
    let checkName = document.querySelector('#name_input');
    let checkPassword = document.querySelector('#password_input');
    let checkEmail = document.querySelector('#email_input');
    if (checkName.value != '' && checkEmail.value != '' && checkPassword.value != '') {
        console.log('campos preenchidos');
        let userData = {
            email: checkEmail.value,
            password: checkPassword.value
        };
        function doReq() {
            return __awaiter(this, void 0, void 0, function* () {
                let reqs = yield fetch('localhost:8000/accounts/login', {
                    method: 'POST',
                    body: JSON.stringify(userData),
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })
                    .then(res => res.json())
                    .catch(err => console.log(err));
            });
        }
        doReq();
    }
});
update === null || update === void 0 ? void 0 : update.addEventListener('click', () => {
    let checkName = document.querySelector('#name_input');
    let checkPassword = document.querySelector('#password_input');
    let checkEmail = document.querySelector('#email_input');
    if (checkName.value != '' && checkEmail.value != '' && checkPassword.value != '') {
        console.log('campos preenchidos');
        let userData = {
            email: checkEmail.value,
            name: checkName.value,
            password: checkPassword.value
        };
        function doReq() {
            return __awaiter(this, void 0, void 0, function* () {
                let reqs = yield fetch('localhost:8000/accounts', {
                    method: 'PATCH',
                    body: JSON.stringify(userData),
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })
                    .then(res => res.json())
                    .catch(err => console.log(err));
            });
        }
        doReq();
    }
});
export {};
