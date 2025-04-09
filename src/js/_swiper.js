//проверка работы слайдера

const swiper4 = new Swiper('.give-floor-slider', {
   slidesPerView: 1,
   spaceBetween: 0,
   loop: true,
   pagination: {
      el: '.give-floor-slider-pagination',
      clickable: true,
   },
})

swiper4.on('init', () => {
   setTimeout(() => {
      swiper4.slideTo(1)
      swiper4.slideTo(0)
   }, 10)
})
