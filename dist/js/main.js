// alert(window.innerHeight + 'px')

// const baseWidth = 1920
const baseWidth = 1200
const baseFontSize = 16

const calculationVw = (px) => {
   const res = (px / baseWidth) * 100
   return +res.toFixed(4)
}
const calculationRem = (px) => {
   const res = px / baseFontSize
   return +res.toFixed(4)
}

const clampFonts = (min, max, text = '') => {
   const res = `clamp(${calculationRem(min)}rem, ${calculationVw(max)}vw, ${calculationRem(max)}rem) - font size`
   console.log(res, text)
}

const clampSizesBlock = (min, max, text = '') => {
   const res = `clamp(${min}px, ${calculationVw(max)}vw, ${max}px) - size box`
   console.log(res, text)
}

// console.log(calculationVw(202))
// console.log(calculationVw(166))

// clampSizesBlock(19, 82)
// clampSizesBlock(122, 220)
clampSizesBlock(315, 1338)
clampFonts(21, 32)

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
