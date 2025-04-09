//проверка работы слайдера

const swiper4 = new Swiper('.give-floor-slider', {
   slidesPerView: 1,
   loopedSlides: 1,
   centeredSlides: true,
   spaceBetween: 0,
   loop: true,
   pagination: {
      el: '.give-floor-slider-pagination',
      clickable: true,
   },
})
