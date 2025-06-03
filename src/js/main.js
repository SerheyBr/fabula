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

//action slider toggle before after

const sliderItems = document.querySelectorAll('.give-floor-item')
if (window.innerWidth <= 1024) {
   sliderItems.forEach((el, index) => {
      const images = [
         ...el.querySelector('.give-floor-item-mobil__img').children,
      ]
      const btnBefore = el.querySelector(`#exemple${index + 1}-before`)
      const btnAfter = el.querySelector(`#exemple${index + 1}-after`)

      // console.log(btnAfter)
      btnBefore.addEventListener('click', (e) => {
         images[0].style.display = 'block'
      })
      btnAfter.addEventListener('click', (e) => {
         images[0].style.display = 'none'
      })
   })
}

// расчет высоты фиксированной кнопки и padding-bottom у секции активности кнопки
const contactUsBtn = document.querySelector('.hero-contact-us')
const contactUsBtnScrollZone = document.querySelector('.btn-scroll')
const contactUsBtnHeight = contactUsBtn.clientHeight
contactUsBtnScrollZone.style.paddingBottom = `${contactUsBtnHeight + 20}px`
