$(function () {

    $(".rate-star").rateYo({
        starWidth: "12px",
    });

    $(".catalog-star").rateYo({
        starWidth: "17px"
    });

    $(".follower__items").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '.follower__arrows-left',
        nextArrow: '.follower__arrows-right',
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
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
    $('.license__title').on('click', function () {
        $('.license__text').removeClass('off');
        $('.license__title').addClass('active');
        $('.license__title-off').removeClass('active');
        $('.license__text--off').removeClass('on');
    });
    $('.license__title-off').on('click', function () {
        $('.license__text').addClass('off');
        $('.license__title').removeClass('active');
        $('.license__title-off').addClass('active');
        $('.license__text--off').addClass('on');
    });

    $('.product__box-tabs .tab, .blog_aside-tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.product__box-tabs, .blog_aside-tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product__box-tabs .tabs, .blog_aside-tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('input, select').styler();

    var mixer = mixitup('.release__items');
});