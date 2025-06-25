const toggleLaoding = (isShow = false) => {
   const laoding = document.querySelector('.laoding')
   if (isShow) {
      laoding.classList.add('active')
   } else {
      laoding.classList.remove('active')
   }
}

const closePopup = () => {
   document.querySelector('.popup').classList.remove('active')
   document.body.style.overflow = 'visible'
   document.body.style.overflowX = 'hidden'
}

const showMessage = (status, message) => {
   const boxMessage = document.querySelector('.window-message')

   let element = document.createElement('p')

   if (status === 'error') {
      element.classList.add('error-message')
   } else {
      element.classList.add('sucsses-message')
   }

   element.innerHTML = message
   boxMessage.append(element)
   setTimeout(() => {
      element.remove()
   }, 5000)
}
// маска для телефона и имени
Inputmask({ mask: '+375 (99) 999-99-99', showMaskOnHover: false }).mask(
   '#popup-number',
)

Inputmask({
   regex: '[а-яА-ЯёЁa-zA-Z\\s]+',
   placeholder: '',
   showMaskOnHover: false,
}).mask('#popup-name')

// функция отправки
const fetchFn = (form) => {
   const popupForm = document.querySelector('.popup__form')
   return fetch('send.php', {
      method: 'post',
      body: new FormData(form),
   })
      .then((response) => response.json())
      .then((data) => {
         if (data.success) {
            toggleLaoding(false)
            showMessage('sucsses', data.message)

            if (form === popupForm) {
               closePopup()
               form.querySelector('#popup-name').value = null
               form.querySelector('#popup-number').value = null
               form.querySelector('#popup-select').value = null
            } else {
               form.querySelector('#section-form-name').value = null
               form.querySelector('#section-form-phone').value = null
            }
         } else {
            showMessage('error', data.message)
            toggleLaoding(false)
            if (form === popupForm) {
               closePopup()
            }
         }
      })
      .catch((error) => {
         console.log(error)
         if (form === popupForm) {
            closePopup()
         }
         if (form === popupForm) {
            closePopup()
            form.querySelector('#popup-name').value = null
            form.querySelector('#popup-number').value = null
            form.querySelector('#popup-select').value = null
         } else {
            form.querySelector('#section-form-name').value = null
            form.querySelector('#section-form-phone').value = null
         }
         toggleLaoding(false)
         showMessage('error', 'ошибка отправки')
      })
}
// валидация форм
const validationForms = (formId, fields) => {
   const form = document.querySelector(formId)
   const validate = new window.JustValidate(formId, {
      validateBeforeSubmitting: true,
      errorLabelStyle: { display: 'none' },
   })

   fields.forEach((el) => {
      validate.addField(el.selector, [
         {
            rule: 'required',
            errorMessage: el.errorMessage,
         },
      ])
   })
   validate
      .onFail((fields) => {
         for (const key in fields) {
            if (!fields[key].isValid) {
               showMessage('error', fields[key].errorMessage)
            }
         }
      })
      .onSuccess((event) => {
         console.log('asd')
         console.log(fields)
         event.preventDefault()
         toggleLaoding(true)
         fetchFn(form)
      })
}

const fieldsForPopup = [
   { selector: '#popup-name', errorMessage: 'введите свое имя' },
   { selector: '#popup-number', errorMessage: 'введите своц номер телефона' },
   { selector: '#popup-select', errorMessage: 'пакет не выбран' },
]

const fieldsForSection = [
   { selector: '#section-form-name', errorMessage: 'введите свое имя' },
   {
      selector: '#section-form-phone',
      errorMessage: 'введите своц номер телефона',
   },
]

if (document.querySelector('#popup__form')) {
   validationForms('#popup__form', fieldsForPopup)
}
if (document.querySelector('#leave-request__form')) {
   validationForms('#leave-request__form', fieldsForSection)
}
