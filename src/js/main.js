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

// accordeon action
document.querySelectorAll('.faq-item').forEach((el) => {
   el.querySelector('.faq-item__trigger').addEventListener('click', (e) => {
      const trigger = e.currentTarget

      if (el.classList.contains('active')) {
         el.classList.remove('active')
      } else {
         document
            .querySelectorAll('.faq-item')
            .forEach((el) => el.classList.remove('active'))
         el.classList.add('active')
      }
   })
})

//ленивая подгрузка картинок
// function lazyLoadImages() {
//    const images = document.querySelectorAll('img[data-src]')

//    if ('IntersectionObserver' in window) {
//       const observer = new IntersectionObserver(
//          (entries, observer) => {
//             console.log(entries)
//             console.log(observer)
//             entries.forEach((entry) => {
//                if (entry.isIntersecting) {
//                   console.log('true')
//                   const img = entry.target
//                   img.src = img.getAttribute('data-src')
//                   img.removeAttribute('data-src')
//                   img.classList.add('loaded') // можно сделать fade-in в CSS
//                   observer.unobserve(img)
//                }
//             })
//          },
//          {
//             rootMargin: '0px 0px 200px 0px', // предварительная подгрузка
//             threshold: 0.1,
//          },
//       )
//       console.log(images)
//       images.forEach((img) => observer.observe(img))
//    } else {
//       // Fallback для старых браузеров
//       images.forEach((img) => {
//          img.src = img.getAttribute('data-src')
//          img.removeAttribute('data-src')
//       })
//       console.log('asdasd')
//    }
// }

// document.addEventListener('DOMContentLoaded', lazyLoadImages)
