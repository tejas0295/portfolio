new Swiper(".roomSwiper", {
  loop: true,
  speed: 800,
  spaceBetween: 16,
  grabCursor: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1.1,
    },
    768: {
      slidesPerView: 1.25,
    },
    992: {
      slidesPerView: 1.45,
    },
    1200: {
      slidesPerView: 1.6,
    },
  },
});
