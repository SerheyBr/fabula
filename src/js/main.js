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

// открытие / закрытие popup
const popup = document.querySelector('.popup')
const select = new SlimSelect({
   select: '#popup-select',
   settings: {
      showSearch: false,
      hideSelected: false,
      placeholderText: 'choose a package',
   },
})

const togglePopup = (nameOption) => {
   if (popup.classList.contains('active')) {
      popup.classList.remove('active')
      document.body.style.overflow = 'visible'
      document.body.style.overflowX = 'hidden'
   } else {
      nameOption ? select.setSelected(nameOption) : select.setSelected(null)
      popup.classList.add('active')
      document.body.style.overflow = 'hidden'
   }
}

document
   .querySelector('.hero-contact-us__btn')
   .addEventListener('click', () => togglePopup())

document
   .querySelector('.popup__close-btn')
   .addEventListener('click', () => togglePopup())

document.querySelectorAll('.fixed-price-item__btn').forEach((el) => {
   // console.log(el.dataset.plan)
   el.addEventListener('click', () => {
      togglePopup(el.dataset.plan)
   })
})

// валидация форм
const validate = new window.JustValidate('#popup__form')

validate
   .addField('#popup-name', [
      {
         rule: 'required',
         errorMessage: 'введите свое имя',
      },
   ])
   .onSuccess((event) => {
      // Важно! Разрешаем отправку формы
      const form = document.getElementById('popup__form')
      form.submit()
   })

// маска для телефона и имени
Inputmask({ mask: '+375 (99) 999-99-99', showMaskOnHover: false }).mask(
   '#popup-number',
)

Inputmask({
   regex: '[а-яА-ЯёЁa-zA-Z\\s]+',
   placeholder: '',
   showMaskOnHover: false,
}).mask('#popup-name')
