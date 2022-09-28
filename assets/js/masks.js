$(function() {
    $('.money').mask("#.##0,00", {reverse: true});
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
    $('.phone_with_ddd').mask('(00) 0000-0000', {
        onKeyPress: function(phone, e, field, options) {
            var masks = ['(00) 0000-0000', '(00) 00000-0000'];
            var mask = (phone.length>9) ? masks[1] : masks[0];
            $('.phone_with_ddd').mask(mask, options);
        }
    });
});