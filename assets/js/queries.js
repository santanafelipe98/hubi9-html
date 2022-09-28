$(function() {
    $('.query').hide();

    $('.QueryButton').on('click', function() {
        const $this = $(this);
        const target = $($this.data('target'));

        $('.query').hide();
        target.show();

        document.querySelector($this.data('target')).scrollIntoView();
    })
})