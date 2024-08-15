$(function () {

  Fancybox.bind()
  var mixer = mixitup('.directions__list');
  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })

  $('.team__slider').slick({
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    draggable: false,
  })

  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })

  $('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })

  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
  })

  $('.testimonials__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })

  $('.testimonials__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  $('.course__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('course__acc-link--active')) {
      $(this).removeClass('course__acc-link--active')
      $(this).children('.course__acc-text').slideUp()
    }
    else {
      $('.course__acc-link').removeClass('course__acc-link--active')
      $('.course__acc-text').slideUp()
      $(this).addClass('course__acc-link--active')
      $(this).children('.course__acc-text').slideDown()
    }
  })

  window.onscroll = function showHeader() {
    let header = document.querySelector('.header__top')
    if (window.pageYOffset > 600) {
      header.classList.add('header__fixed')
    } else {
      header.classList.remove('header__fixed')
    }
    let burger = document.querySelector('.burger')
    if (window.pageYOffset > 600) {
      burger.classList.add('burger__fixed')
    } else {
      burger.classList.remove('burger__fixed')
    }
  }

  $(".header__nav-list a, .header__top-btn, .footer__scr-btn").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top - 90
    $('body,html').animate({ scrollTop: top }, 800)
  });

  $('.burger, .overlay, .header__nav-info a').on('click', function (e) {
    e.preventDefault()
    $('.header__nav-info').toggleClass('header__nav-info_open')
    $('.overlay').toggleClass('overlay_active')
    $('body').toggleClass('lock')
  })

$('.footer__col-slide .footer__col-title').on('click', function () {
  $(this).next().slideToggle()
  $(this).toggleClass('footer__col-title_active')
})

})

$(function blog() {
  $('.blog__row').slick({
    arrows: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 550,
        settings: {
          // centerMode: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })
})