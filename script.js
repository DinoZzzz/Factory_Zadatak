$(function () {
    var slick = $('.img-top').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        appendArrows: $('#arrows')
    });

    $('.slick-prev').on('click', function () {
        slick.slickNext();
    });
    $('.slick-next').on('click', function () {
        slick.slickPrev();
    });
});