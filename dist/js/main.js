// alert(window.innerHeight + 'px')

//проверка работы слайдера
const swiper = new Swiper('.mySlider', {
   slidesPerView: 1,
   spaceBetween: 30,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
})

//# sourceMappingURL=main.js.map
