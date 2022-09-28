$(function() {
    const answerHeader = $('.questionHeader')
    answerHeader.on('click', function() {
        const $this = $(this);
        const parent = $this.parent();

        const answer = parent.children('.answerWrapper');
        const btn    = $this.children('.buttonCollapse');

        if (answer.hasClass('hidden')) {
            answer.removeClass('hidden');
            btn.html('<i class="icon fa-solid fa-angle-down"></i>');
        } else {
            answer.addClass('hidden');
            btn.html('<i class="icon fa-solid fa-angle-right"></i>');
        }
    })
})