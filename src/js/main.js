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

clampSizesBlock(315, 1004)
// clampFonts(20, 40)
clampFonts(25, 64)
clampFonts(15, 32)
clampFonts(30, 64)

const resultItems = document.querySelectorAll('.result-item')
resultItems.forEach((el) => {
   el.addEventListener('click', (e) => {
      const el = e.currentTarget
      el.classList.add('active')
   })
})
