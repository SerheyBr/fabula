//проверка работы слайдера
// const swiper = new Swiper('.slider-customers__slider', {
//    slidesPerView: 9,
//    spaceBetween: 0,
//    loop: true,
//    speed: 5000,
//    allowTouchMove: false,

//    autoplay: {
//       delay: 0,
//       disableOnInteraction: false,
//    },
//    freeMode: {
//       enabled: true,
//       momentum: false,
//    },
//    breakpoints: {
//       340: {
//          speed: 500,
//       },
//       768: {
//          speed: 1500,
//       },
//       1024: {
//          speed: 9000,
//       },
//    },
// })

const swiper4 = new Swiper('.give-floor-slider', {
   slidesPerView: 1,
   spaceBetween: 0,
   pagination: {
      el: '.give-floor-slider-pagination',
      clickable: true,
   },
})
