$(function(){
    $('.alert-close').on('click', function() {
        const parent = $(this).parent('.alert');

        if (parent && !parent.hasClass('fade-out')) {
            parent.addClass('fade-out');
            setTimeout(function() {
                parent.remove();
            }, 300);
        }
    });
});