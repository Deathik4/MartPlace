$(function () {

    $(".rate-star").rateYo({
        starWidth: "12px",
    });

    $(".catalog-star").rateYo({
        starWidth: "17px",
    });

    $(".follower__items").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '.follower__arrows-left',
        nextArrow: '.follower__arrows-right'
    });

    $(".week__content").slick({
        prevArrow: '.week__arrows-left',
        nextArrow: '.week__arrows-right'
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    $('.drop-down').on('click', function () {
        $(this).children('.drop-down__list').toggleClass('active');
        $(this).children('.drop-down__link').toggleClass('active');
    });
    $('.header__btn-menu').on('click', function () {
        $('.use__box').toggleClass('active');
    });

    var mixer = mixitup('.release__items');
});