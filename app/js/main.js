$(function () {

    $(".rate-star").rateYo({
        starWidth: "12px",
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

    var mixer = mixitup('.release__items');
});