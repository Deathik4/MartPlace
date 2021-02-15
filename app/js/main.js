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
    $('.icon-th-list').on('click', function () {
        $('.catalog__item').addClass('list');
        $('.catalog__item-list').addClass('list');
        $('.breadcrumbs__list-list').addClass('list');
        $('.breadcrumbs__list').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    });
    $('.icon-th-large').on('click', function () {
        $('.catalog__item').removeClass('list');
        $('.catalog__item-list').removeClass('list');
        $('.breadcrumbs__list-list').removeClass('list');
        $('.breadcrumbs__list').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
    });

    var mixer = mixitup('.release__items');
});