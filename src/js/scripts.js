
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
        },
        {
            text: "Litecoin",
            value: 3,
            selected: false,
            description: "LTC",
            imageSrc: "/images/currencies/ltc.svg"
        },
        {
            text: "Monero",
            value: 4,
            selected: false,
            description: "XMR",
            imageSrc: "/images/currencies/xmr.svg"
        },
        {
            text: "Dash",
            value: 5,
            selected: false,
            description: "DASH",
            imageSrc: "/images/currencies/dash.svg"
        },
        {
            text: "ZCash",
            value: 6,
            selected: false,
            description: "ZEC",
            imageSrc: "/images/currencies/zec.svg"
        }
    ];
    $('#exchangeDropdownFrom').ddslick({
        data: ddData.map(d => {
            if(d.description === 'BTC'){
                d.selected = true;
            }
            return d;
        }),
        background: 'transparent',
        defaultSelectedIndex:2
    });
    $('#exchangeDropdownTo').ddslick({
        data: ddData.map(d => {
            if(d.description === 'LTC'){
                d.selected = true;
            }
            return d;
        }),
        background: 'transparent',
        defaultSelectedIndex:2
    });

    $('.exchange-block__swap-btn').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('swapped');
    });

})