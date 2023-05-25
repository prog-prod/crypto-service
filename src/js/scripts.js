
$(document).ready(() => {
    $(".reviews .slider").slick({
        infinite: false,
        arrows: false,
        autoplay:false,
        dots:false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]

    }).on('setPosition', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        $('.slider-arrows .arrow-left').click(function () {
            slick.slickPrev();
        });
        $('.slider-arrows .arrow-right').click(function () {
            slick.slickNext();
        });
    });

    var ddData = [
        {
            text: "Bitcoin",
            value: 1,
            selected: false,
            description: "BTC",
            imageSrc: "/images/currencies/btc.svg"
        },
        {
            text: "Ethereum",
            value: 2,
            selected: false,
            description: "ETH",
            imageSrc: "/images/currencies/eth.svg"
        }
    ];
    $('.custom-dropdown').ddslick({
        data: ddData,
        background: 'transparent',
        defaultSelectedIndex:2
    });
})