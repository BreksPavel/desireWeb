$(function () {

    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });

    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.top__slider').slick({
        arrows: false,
        fade: true,
        dots: true,
        autoplay: true
    });

    $('.contact-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 10,
        slidesToScroll: 10
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.category-bedroom'
        }
    });
})