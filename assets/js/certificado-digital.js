const nameEl                 = document.getElementById('nome_completo');
const emailEl                = document.getElementById('email');
const phoneEl                = document.getElementById('telefone');
const valueEl                = document.getElementById('valor');
const btnParceiro             = document.getElementById('btnParceiro');
const formParceiroMessageEl = document.getElementById('formParceiroMessage');

const phoneMaskOptions = {
    mask: '(00) [0]0000-0000'
};

const phoneMask    = IMask(phoneEl, phoneMaskOptions);

function buildWhatsAppURL() {
    const mainURL = 'https://api.whatsapp.com/send?phone=5511964316542';
    let text      = 'Olá! Sou contador e tenho interesse em ser parceiro!';
    text         += '\n\nSegue meus dados pessoais:';
    text         += `\n*Nome*: ${nameEl.value}`;
    text         += `\n*E-mail*: ${emailEl.value}`;
    text         += `\n*Telefone*: ${phoneMask.value}`;

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

/* Validators */


function openWhatsAppTab() {

    const errors = validateFields();

    if (errors.length === 0) {
        clearForm();
        hideMessage();
        window.open(buildWhatsAppURL(), 'blank');
    } else {
        showMessage(errors[0], "error");
    }
}

function clearForm() {
    nameEl.value = '';
    emailEl.value = '';
    phoneEl.value = '';
}

function showMessage(content, type='success') {
    let className = type === 'sucess' ? 'messageSuccess' : 'messageError';

    formParceiroMessageEl.innerHTML = content;
    formParceiroMessageEl.classList.remove('messageSuccess');
    formParceiroMessageEl.classList.remove('messageError');

    formParceiroMessageEl.classList.add(className);
}

function hideMessage() {
    formParceiroMessageEl.innerHTML = '';
    formParceiroMessageEl.classList.remove('messageSuccess');
    formParceiroMessageEl.classList.remove('messageError');
}

btnParceiro.addEventListener('click', openWhatsAppTab);