$(function() {

    $('.btnTab').on('click', function(){
        $('.ValueCard').hide();
        $('.btnTab').removeClass('active');
        $(this).addClass('active');
        const target = $(`#${$(this).val()}`);
        target.show();
    });
});