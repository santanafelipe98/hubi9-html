$(function() {
    const tabs = $('.Tab');

    const slider = $('.tabSlider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 300,
        autoplaySpeed: 0,
        cssEase: "linear",
    });

    tabs.on('click', function() {
        const $this = $(this);
        const index = parseInt(tabs.index(this));

        slider.slick('slickGoTo', index);

        tabs.removeClass('active');
        $this.addClass('active');
    })

    
});