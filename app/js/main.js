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

    var mixer = mixitup('.release__items');
});