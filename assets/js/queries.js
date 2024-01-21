$(function() {
    $('.query').hide();

    $('.QueryButton').on('click', function() {
        const $this = $(this);
        const target = $($this.data('target'));

        $('.QueryButton').each((_, el) => {
            $(el).removeClass('active');
        });

        $this.addClass('active');

        $('.query').hide();
        target.show();

        document.querySelector($this.data('target')).scrollIntoView();
    });
})