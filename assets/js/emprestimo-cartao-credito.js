const nameEl                 = document.getElementById('nome_completo');
const emailEl                = document.getElementById('email');
const phoneEl                = document.getElementById('telefone');
const valueEl                = document.getElementById('valor');
const btnSimular             = document.getElementById('btnSimular');
const formSimulacaoMessageEl = document.getElementById('formSimulacaoMessage');

const phoneMaskOptions = {
    mask: '(00) [0]0000-0000'
};
const currencyMaskOptions = {
    mask: 'R$ num',
    blocks: {
        num: {
            mask: Number,
            thousandsSeparator: '.'
        }
    }
};

const phoneMask    = IMask(phoneEl, phoneMaskOptions);
const currencyMask = IMask(valueEl, currencyMaskOptions);

function buildWhatsAppURL() {
    const mainURL = 'https://api.whatsapp.com/send?phone=5511964316542';
    let text      = 'Olá! Quero simular um empréstimo no cartão';
    text         += '\n\nSegue meus dados pessoais:';
    text         += `\n*Nome*: ${nameEl.value}`;
    text         += `\n*E-mail*: ${emailEl.value}`;
    text         += `\n*Telefone*: ${phoneMask.value}`;
    text         += `\n*Valor desejado*: ${currencyMask.value}`;

    const encondedText = encodeURIComponent(text);
    
    return `${mainURL}&text=${encondedText}`;
}

function validateFields() {
    const errors = [];

    if (isEmpty(nameEl.value)) {
        errors.push("Por favor, informe o seu nome.");
        nameEl.focus();
    }
    
    if (isEmpty(emailEl.value)) {
        if (errors.length === 0)
            emailEl.focus();

        errors.push("Por favor, informe o seu e-mail.")
    }
    else if (!isEmail(emailEl.value)) {
        if (errors.length === 0)
            emailEl.focus();

        errors.push("E-mail inválido.");   
    }


    if (isEmpty(phoneEl.value)) {
        if (errors.length === 0)
            phoneEl.focus();

        errors.push("Por favor, informe o seu telefone.");
    }
    else if (!isPhone(phoneEl.value)) {
        if (errors.length === 0)
            phoneEl.focus();
        
        errors.push('Telefone inválido.');
    }

    if (isEmpty(valueEl.value)) {
        if (errors.length === 0)
            valueEl.focus();

        errors.push('Por favor, informe o valor.');

    } else if (!isCurrency(valueEl.value)) {
        if (errors.length === 0)
            valueEl.focus();

        errors.push('Valor inválido.');
    }

    return errors;
}

/* Validators */

function isEmpty(str) {
    return str.length === 0;
}

function isEmail(str) {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    return pattern.test(str);
}

function isPhone(str) {
    const pattern = /\([0-9]{2}\) ([0-9]\s?)?[0-9]{4}\-[0-9]{4}/g;

    return pattern.test(str);
}

function isCurrency(str) {
    const pattern = /(?:[1-9]\d{0,2}(?:\,\d{3})*|0)(?:.\d{1,2})?/;

    return pattern.test(str);
}

/* Validators */


function openWhatsAppTab() {

    const errors = validateFields();

    if (errors.length === 0) {
        hideMessage();
        window.open(buildWhatsAppURL(), 'blank');
    } else {
        showMessage(errors[0], "error");
    }
}

function showMessage(content, type='success') {
    let className = type === 'sucess' ? 'messageSuccess' : 'messageError';

    formSimulacaoMessageEl.innerHTML = content;
    formSimulacaoMessageEl.classList.remove('messageSuccess');
    formSimulacaoMessageEl.classList.remove('messageError');

    formSimulacaoMessageEl.classList.add(className);
}

function hideMessage() {
    formSimulacaoMessageEl.innerHTML = '';
    formSimulacaoMessageEl.classList.remove('messageSuccess');
    formSimulacaoMessageEl.classList.remove('messageError');
}

btnSimular.addEventListener('click', openWhatsAppTab);
