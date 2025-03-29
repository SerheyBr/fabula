// alert(window.innerHeight + 'px')

// const baseWidth = 1920
const baseWidth = 1920
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

// clampSizesBlock(50, 183)
// clampFonts(20, 40)
// clampFonts(30, 64)
// clampFonts(16, 20)
clampFonts(20, 32)

//проверка работы слайдера
const swiper = new Swiper('.slider-customers__slider', {
   slidesPerView: 9,
   spaceBetween: 0,
   loop: true,
   speed: 5000,
   allowTouchMove: false,

   autoplay: {
      delay: 0,
      disableOnInteraction: false,
   },
   freeMode: {
      enabled: true,
      momentum: false,
   },
   breakpoints: {
      340: {
         speed: 500,
      },
      768: {
         speed: 1500,
      },
      1024: {
         speed: 9000,
      },
   },
})

const swiper2 = new Swiper('.ribbons-slider-1', {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   speed: 15000,
   allowTouchMove: false,
   autoplay: {
      delay: 0,
      disableOnInteraction: false,
   },
   freeMode: {
      enabled: true,
      momentum: false,
   },
   // breakpoints: {
   //    340: {
   //       speed: 500,
   //    },
   //    768: {
   //       speed: 1500,
   //    },
   //    1024: {
   //       speed: 5000,
   //    },
   // },
})

const swiper3 = new Swiper('.ribbons-slider-2', {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   speed: 15000,
   allowTouchMove: false,
   autoplay: {
      delay: 0,
      disableOnInteraction: false,
   },
   freeMode: {
      enabled: true,
      momentum: false,
   },
   // breakpoints: {
   //    340: {
   //       speed: 500,
   //    },
   //    768: {
   //       speed: 1500,
   //    },
   //    1024: {
   //       speed: 5000,
   //    },
   // },
})

//# sourceMappingURL=main.js.map
