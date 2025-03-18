// alert(window.innerHeight + 'px')

const baseWidth = 1024
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

// console.log(calculationVw(-40))
// clampFonts(13, 25)
// clampSizesBlock(24, 34, 'width')
// clampSizesBlock(61, 82, 'height')
clampFonts(15, 31, '1')
clampFonts(17, 33, '2')
clampFonts(9, 18, '3')
clampFonts(14, 27, '4')
clampFonts(12, 24, '5')
clampFonts(20, 40, '6')
clampFonts(15, 31, '7')
clampFonts(12, 24, '8')
clampFonts(14, 28, '9')
clampFonts(12, 24, '10')
clampFonts(12, 24, '11')
clampFonts(14, 27, '12')
clampFonts(12, 24, '13')
clampFonts(15, 33, '14')

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
