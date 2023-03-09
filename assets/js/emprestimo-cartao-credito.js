const nameEl     = document.getElementById('nome_completo');
const emailEl    = document.getElementById('email');
const phoneEl    = document.getElementById('telefone');
const valueEl    = document.getElementById('valor');
const btnSimular = document.getElementById('btnSimular');

function buildWhatsAppURL() {
    const mainURL = 'https://api.whatsapp.com/send?phone=5511964316542';
    let text      = 'Olá! Quero simular um empréstimo no cartão';
    text         += '\n\nSegue meus dados pessoais:';
    text         += `\n**Nome**: ${nameEl.value}`;
    text         += `\n**E-mail**: ${emailEl.value}`;
    text         += `\n**Telefone**: ${phoneEl.value}`;
    text         += `\n**Valor desejado**: ${valueEl.value}`;

    const encondedText = encodeURIComponent(text);
    
    return `${mainURL}&text=${encondedText}`;
}

function openWhatsAppTab() {
    window.open(buildWhatsAppURL(), 'blank');
}

btnSimular.addEventListener('click', openWhatsAppTab);
