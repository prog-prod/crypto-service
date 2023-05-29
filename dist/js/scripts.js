$(document).ready(() => {
  $(".reviews .slider").slick({
    infinite: false,
    arrows: true,
    autoplay: false,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }).on('setPosition', function (event, slick) {
    setTimeout(() => {
      slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    }, 100);
    if (slick.$prevArrow.hasClass('slick-disabled')) {
      $('.slider-arrows .arrow-left').addClass('slick-disabled');
    }
    $('.slider-arrows .arrow-left').click(() => slick.slickPrev());
    $('.slider-arrows .arrow-right').click(() => slick.slickNext());
  }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
    const arrows = $('.slider-arrows .btn');
    arrows.removeClass('slick-disabled');
    if (slick.$prevArrow.hasClass('slick-disabled')) {
      arrows.filter('.arrow-left').addClass('slick-disabled');
    }
    if (slick.$nextArrow.hasClass('slick-disabled')) {
      arrows.filter('.arrow-right').addClass('slick-disabled');
    }
  });
  var ddData = [{
    text: "Bitcoin",
    value: 1,
    selected: false,
    description: "BTC",
    imageSrc: "/images/currencies/btc.svg"
  }, {
    text: "Ethereum",
    value: 2,
    selected: false,
    description: "ETH",
    imageSrc: "/images/currencies/eth.svg"
  }, {
    text: "Litecoin",
    value: 3,
    selected: false,
    description: "LTC",
    imageSrc: "/images/currencies/ltc.svg"
  }, {
    text: "Monero",
    value: 4,
    selected: false,
    description: "XMR",
    imageSrc: "/images/currencies/xmr.svg"
  }, {
    text: "Dash",
    value: 5,
    selected: false,
    description: "DASH",
    imageSrc: "/images/currencies/dash.svg"
  }, {
    text: "ZCash",
    value: 6,
    selected: false,
    description: "ZEC",
    imageSrc: "/images/currencies/zec.svg"
  }];
  $('#exchangeDropdownFrom').ddslick({
    data: ddData.map(d => {
      if (d.description === 'BTC') {
        d.selected = true;
      }
      return d;
    }),
    background: 'transparent',
    defaultSelectedIndex: 2
  });
  $('#exchangeDropdownTo').ddslick({
    data: ddData.map(d => {
      if (d.description === 'LTC') {
        d.selected = true;
      }
      return d;
    }),
    background: 'transparent',
    defaultSelectedIndex: 2
  });
  $('.exchange-block__swap-btn').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('swapped');
  });
  $('.exchange-block__address-cp-btn').click(function () {
    const copyText = $(this).closest('.exchange-block__address-blocks').find('.exchange-block__address-value').text(); // Replace with the text you want to copy
    const textarea = $('<textarea>', {
      val: copyText,
      css: {
        position: 'fixed',
        opacity: 0
      }
    }).appendTo('body');
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    const toastLiveExample = document.getElementById('liveToast');
    $(toastLiveExample).find('.toast-body').text("Текст скопирован.");
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  });
});