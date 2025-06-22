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

document.addEventListener('DOMContentLoaded', (event) => {
   //анимация курсора на hero
   // const cursorTl = gsap.timeline({})
   // cursorTl
   //    .from('.hero__code', {
   //       scale: 0,
   //       opacity: 0,
   //       delay: 1,
   //       duration: 1,
   //       ease: 'bounce',
   //    })
   //    .from('.hero__cursor', {
   //       // scale: 0,
   //       opacity: 0,
   //       x: '200px',
   //       y: '200px',
   //       delay: 1,
   //       duration: 1.5,
   //       ease: 'sine.inOut',
   //    })
   //    .from('.hero__cursor-title', {
   //       // scale: 0,
   //       opacity: 0,
   //       duration: 1,
   //    })

   //анимация тайтла на hero
   gsap.to('.hero__title--circle-right', {
      repeat: -1,
      // y: '-1000px',
      rotate: '360',
      duration: 5,
      ease: 'none',
      // delay: 1,
      // ease: 'bounce',
   })
   const titleAnimationTl = gsap.timeline({})

   titleAnimationTl
   // .from('.hero__title--top-word', {
   //    x: '-1000px',
   //    duration: 0.5,
   //    delay: 1,
   //    // ease: 'bounce',
   // })
   // .from('.hero__title--circle-right', {
   //    y: '-1000px',
   //    rotate: '-180',
   //    duration: 2,
   //    delay: 1,
   //    ease: 'bounce',
   // })
   // .from(
   //    '.hero__title--circle-left',
   //    {
   //       y: '-1000px',
   //       rotate: '-320',
   //       duration: 2,
   //       ease: 'bounce',
   //    },
   //    '<0.5',
   // )
   // .from('.hero__title--continued', {
   //    // y: '-1000px',
   //    rotate: '0',
   //    duration: 0.5,
   //    ease: 'bounce',
   // })

   //функция для разделения текста на буквы
   const splitText = (className, newClassName) => {
      let textElement = document.querySelector(className)
      let text = textElement.textContent
      textElement.innerHTML = '' // Очищаем текст

      text.split('').forEach((letter) => {
         let span = document.createElement('span')
         span.textContent = letter
         span.classList.add(newClassName)
         textElement.appendChild(span)
      })
   }

   splitText('.now-imagine__text', 'now-imagine__text--letter')
   splitText('.solution__text', 'solution__text--letter')

   // //анимируем плавное заполнение текста
   gsap.to('.now-imagine__text--letter', {
      color: '#FFFFFF', // Меняем цвет на яркий
      stagger: 0.03, // Поочередное появление букв
      scrollTrigger: {
         trigger: '.now-imagine__text',
         start: 'top 100%',
         toggleActions: 'play',
      },
   })
   gsap.to('.solution__text--letter', {
      color: '#FFFFFF', // Меняем цвет на яркий
      stagger: 0.03, // Поочередное появление букв
      scrollTrigger: {
         trigger: '.solution__text',
         start: 'top 80%',
         toggleActions: 'play',
      },
   })

   //липкая кнопка .hero-contact-us
   if (window.innerWidth > 485) {
      gsap.to('.hero-contact-us', {
         scrollTrigger: {
            trigger: '.btn-scroll', // Когда доскроллим до этого блока
            start: 'bottom 98%', // Когда верхняя часть блока достигнет центра экрана
            // end: 'top top',
            scrub: 1,
            onEnter: () =>
               document
                  .querySelector('.hero-contact-us')
                  .classList.add('sticky'),
            onLeaveBack: () =>
               document
                  .querySelector('.hero-contact-us')
                  .classList.remove('sticky'),
            // markers: true,
         },
      })
   }

   //блюр в с рандомной задержкой
   // document.querySelectorAll('.we-know__list-item').forEach((el) => {
   //    gsap.to(el, {
   //       filter: () => `blur(${gsap.utils.random(0, 8)}px)`,
   //       duration: gsap.utils.random(2, 5), // Разная скорость анимации
   //       repeat: -1, // Бесконечный цикл
   //       yoyo: true, // Возвращение к изначальному значению
   //       stagger: {
   //          // Рандомное время старта для каждого элемента
   //          each: gsap.utils.random(0, 1),
   //          repeatRefresh: true, // Генерирует новое значение для каждого повтора
   //       },
   //    })
   // })

   //анимация секции с мозгом
   const zippersLeftTl = gsap.timeline({
      repeat: -1,
   })
   const zippersRightTl = gsap.timeline({
      repeat: -1,
   })
   zippersLeftTl
      .to('.we-know__zipper--left', {
         x: '-10px',
         y: '-10px',
         duration: 3,
      })
      .to('.we-know__zipper--left', {
         rotate: -37,
         duration: 0.1,
      })
      .to('.we-know__zipper--left', {
         rotate: -33,
         duration: 0.1,
      })
      .to('.we-know__zipper--left', {
         rotate: -37,
         duration: 0.1,
      })
      .to('.we-know__zipper--left', {
         rotate: -33,
         duration: 0.1,
      })
      .to('.we-know__zipper--left', {
         rotate: -35,
         duration: 0.1,
      })
      .to('.we-know__zipper--left', {
         x: '0',
         y: '0',
         duration: 0.2,
      })

   zippersRightTl
      .to('.we-know__zipper--right', {
         x: '10px',
         y: '-10px',
         duration: 3,
      })
      .to('.we-know__zipper--right', {
         rotate: 37,
         duration: 0.1,
      })
      .to('.we-know__zipper--right', {
         rotate: 33,
         duration: 0.1,
      })
      .to('.we-know__zipper--right', {
         rotate: 37,
         duration: 0.1,
      })
      .to('.we-know__zipper--right', {
         rotate: 33,
         duration: 0.1,
      })
      .to('.we-know__zipper--right', {
         rotate: 35,
         duration: 0.1,
      })
      .to('.we-know__zipper--right', {
         x: '0',
         y: '0',
         duration: 0.2,
      })

   //запуск анимации заполнения круговой индикатор прогресса в секции you need
   gsap.from('.circle-progres', {
      strokeDashoffset: '511.82px',

      duration: 3,
      scrollTrigger: {
         trigger: '.circle-progres',
         start: 'top 100%',
         toggleActions: 'play',
      },
   })
   //анимация плашки в секции you need
   gsap.from('.you-need-facts__title', {
      y: '20px',
      duration: 1,
      rotate: '0',
      yoyo: true,
      scrollTrigger: {
         trigger: '.circle-progres',
         start: 'top bottom',
      },
   })

   //анимация списка с заполнением кружков
   const resultList = document.querySelectorAll('.result-item')
   const imgSection = document.querySelector('.result__img > img')
   let currentAnimationResultList

   const activeitItemFromResultList = (index = 0) => {
      if (currentAnimationResultList) {
         currentAnimationResultList.kill()
      }
      resultList.forEach((el) => {
         el.classList.remove('active')
      })

      if (index >= resultList.length) {
         index = 0
      }
      resultList[index].classList.add('active')

      const imgSrcEl = resultList[index].querySelector(
         '.result-item__img--mobil > img',
      ).src

      imgSection.src = imgSrcEl

      currentAnimationResultList = gsap.delayedCall(6, () => {
         activeitItemFromResultList(index + 1)
      })
   }

   if (window.innerWidth > 485) {
      ScrollTrigger.create({
         trigger: '.result', // замени на нужный тебе селектор
         start: 'top 70%', // когда верх секции достигнет 70% окна
         once: true, // запустится один раз
         // markers: true,
         // delay: 1,
         onEnter: () => {
            activeitItemFromResultList()
         },
      })

      resultList.forEach((el, index) => {
         el.addEventListener('click', (e) => {
            activeitItemFromResultList(index)
         })
      })
   } else {
      resultList[0].classList.add('active')

      resultList.forEach((el) => {
         el.addEventListener('click', (e) => {
            resultList.forEach((el) => {
               el.classList.remove('active')
            })
            e.currentTarget.classList.toggle('active')
         })
      })
   }

   //анимация мушек
   function moveRandomly(spot) {
      gsap.to(spot, {
         x: `+=${Math.floor(gsap.utils.random(-90, 90))}`, // Случайное смещение по X
         y: `+=${Math.floor(gsap.utils.random(-90, 90))}`, // Случайное смещение по Y
         // rotation: gsap.utils.random(-180, 180), // Случайный поворот
         duration: Math.floor(gsap.utils.random(1, 5)), // Случайная скорость
         ease: 'power1.inOut',
         onComplete: () => moveRandomly(spot), // Повторяем движение с новыми параметрами
      })
   }
   const arraySpot = [
      ...document.querySelectorAll('.projects-bg__el--animation'),
      ...document.querySelectorAll('.hero__bg-crcl'),
   ]

   document
   arraySpot.forEach((spot) => moveRandomly(spot))

   //анимация облаков
   gsap.from('.nom-imagine-moon', {
      x: -100,
      opacity: 0.3,
      scale: 0.8,
      rotate: 20,
      duration: 7,
      ease: 'power3',
      scrollTrigger: {
         trigger: '.now-imagine',
         start: 'top center',
      },
   })
   gsap.from('.now-imagine-clouds__top-center', {
      x: 100,
      opacity: 0.7,
      scale: 0.8,
      duration: 5,
      ease: 'power3',
      scrollTrigger: {
         trigger: '.now-imagine',
         start: 'top center',
      },
   })
   gsap.from('.now-imagine-clouds__top-left', {
      x: '-100%',
      y: '-50px',
      scale: 0,
      duration: 5,
      ease: 'power3',
      scrollTrigger: {
         trigger: '.now-imagine',
         start: 'top center',
      },
   })
   gsap.from('.now-imagine-clouds__top-right', {
      x: '+100%',
      y: '+50px',
      scale: 0,
      duration: 5,
      ease: 'power3',
      scrollTrigger: {
         trigger: '.now-imagine',
         start: 'top center',
      },
   })
   gsap.from('.now-imagine-clouds__bottom-left', {
      x: '-100%',
      duration: 3,
      ease: 'power3',
      scrollTrigger: {
         trigger: '.now-imagine',
         start: 'top center',
      },
   })
   gsap.from('.now-imagine-clouds__bottom-right', {
      x: '+100%',
      duration: 3,
      ease: 'power3',
      scrollTrigger: {
         trigger: '.now-imagine',
         start: 'top center',
      },
   })
   gsap.from('.now-imagine-clouds__bottom-center', {
      x: '-200%',
      duration: 7,
      ease: 'power3',
      scrollTrigger: {
         trigger: '.now-imagine',
         start: 'top center',
      },
   })

   //анимация звезд
   document.querySelectorAll('.nom-imagine-star').forEach((el) => {
      gsap.to(el, {
         scale: 0.2,
         duration: gsap.utils.random(3, 5), // Разная скорость анимации
         opacity: gsap.utils.random(0.7, 1),
         repeat: -1, // Бесконечный цикл
         yoyo: true, // Возвращение к изначальному значению
         stagger: {
            // Рандомное время старта для каждого элемента
            each: gsap.utils.random(0, 1),
            repeatRefresh: true, // Генерирует новое значение для каждого повтора
         },
      })
   })

   //анимация projects-item
   const sectionProjects = document.querySelector('.projects__wrapper')
   const projectItems = document.querySelectorAll('.projects-item')
   if (window.innerWidth > 485) {
      let st = ScrollTrigger.create({
         trigger: '.projects__wrapper',
         pin: '.projects__title--wrapper',
         start: 'top top',
         end: `95% center`,
         scrub: 1,
         // markers: true,
      })

      projectItems.forEach((el) => {
         gsap.from(el, {
            y: '300px',
            duration: 1,
            scrollTrigger: {
               trigger: el,
               start: 'top bottom',
               // markers: true,
               scrub: 1,
            },
         })
      })
   } else {
      projectItems.forEach((el) => {
         gsap.from(el, {
            opacity: 0,
            // duration: 1,
            scrollTrigger: {
               trigger: el,
               start: 'top bottom',
               end: 'bottom center',
               scrub: 1,
            },
         })
      })
   }

   //анимация цифр
   const animateCount = (element, targetValue) => {
      const count = { value: 0 }

      gsap.to(count, {
         value: targetValue,
         duration: 3,
         scrollTrigger: {
            trigger: element,
            start: 'top center',
            toggleActions: 'play none none none',
         },
         onUpdate: () => {
            element.textContent = `${Math.round(count.value)}`
         },
      })
   }

   document.querySelectorAll('.we-fabula-column__title--num').forEach((el) => {
      const targetValue = parseInt(el.getAttribute('data-target')) || 100

      animateCount(el, targetValue)
   })

   //анимация секции we offer
   const lottieElements = document.querySelectorAll('.offer-item__img')
   if (window.innerWidth > 485) {
      const sectionOffer = document.querySelector('.offer')
      const offerElementsInfo = document.querySelectorAll('.offer-item__info')

      const scrollDistanceOffer = 3000
      const nextSection = document.querySelector('.we-fabula')
      nextSection.style.marginTop = `${scrollDistanceOffer}px`

      const tlOffer = gsap.timeline({
         scrollTrigger: {
            trigger: sectionOffer,
            start: 'top top',
            end: `+=${scrollDistanceOffer}`,
            pin: true,
            scrub: 1,
         },
      })

      tlOffer
         .to({}, { duration: 1 })
         .to(lottieElements[0], { opacity: 0 })
         .to(offerElementsInfo[0], { y: '-50vh', opacity: 0 })
         .to(offerElementsInfo[1], { y: '0' })
         .to(lottieElements[1], { opacity: 1 })
         .to({}, { duration: 1 })
         .to(lottieElements[1], { opacity: 0 })
         .to(offerElementsInfo[1], { y: '-50vh', opacity: 0 })
         .to(offerElementsInfo[2], { y: '0' })
         .to(lottieElements[2], { opacity: 1 })
         .to({}, { duration: 1 })
         .to(lottieElements[2], { opacity: 0 })
         .to(offerElementsInfo[2], { y: '-30vh', opacity: 0.1 })
   } else {
      lottieElements.forEach((el) => {
         gsap.from(el, {
            opacity: 0,
            // duration: 1.2,
            scrollTrigger: {
               trigger: el,
               start: 'top bottom',
               end: 'bottom center',
               scrub: 1,
            },
         })
      })
   }

   //footer анимация
   const footerBg = document.querySelector('.footer__bg')
   const footer = document.querySelector('.footer')

   gsap.from(footerBg, {
      y: 0,
      // scale: 0,
      duration: 2,
      scrollTrigger: {
         trigger: footer,
         start: 'top bottom',
      },
   })

   //анимация плашки в секции while-thinking
   const whileThinkingTl = gsap.timeline({
      scrollTrigger: {
         trigger: '.while-thinking',
         start: 'center bottom',
      },
   })
   whileThinkingTl
      .from('.while-thinking-decor__bottom-left', {
         scale: 0,
         opacity: 0,
         duration: 1.3,
      })
      .from(
         '.while-thinking-decor__top-right',
         {
            scale: 0,
            opacity: 0,
            duration: 1.3,
         },
         '-=1',
      )
      .from(
         '.while-thinking-decor__top-left',
         {
            scale: 0,
            opacity: 0,
            duration: 1.3,
         },
         '-=1',
      )
      .from(
         '.while-thinking-decor__bottom-right',
         {
            scale: 0,
            opacity: 0,
            duration: 1.3,
         },
         '-=1',
      )

   // анимация лампочки вкл выкл
   const blobOn = document.querySelector('.now-imagine__bg-blob--on')
   const blobOff = document.querySelector('.now-imagine__bg-blob--off')

   const blobTl = gsap.timeline({
      scrollTrigger: {
         trigger: '.now-imagine__bg-blob--on',
         start: 'center bottom',
      },
   })
   blobTl
      .to(blobOn, {
         opacity: 0.4,
         duration: 0.1,
         delay: 0.5,
      })
      .to(blobOn, {
         opacity: 0,
         duration: 0.1,
      })
      .to(blobOn, {
         opacity: 0.4,
         duration: 0.1,
      })
      .to(blobOn, {
         opacity: 0,
         duration: 0.1,
      })
      .to(blobOn, {
         opacity: 0.4,
         duration: 0.1,
      })
      .to(blobOn, {
         opacity: 0,
         duration: 0.1,
      })
      .to(blobOn, {
         opacity: 1,
         duration: 1,
      })
})

//проверка работы слайдера

const swiper4 = new Swiper('.give-floor-slider', {
   slidesPerView: 1,
   loopedSlides: 1,
   centeredSlides: true,
   spaceBetween: 0,
   loop: true,
   pagination: {
      el: '.give-floor-slider-pagination',
      clickable: true,
   },
})

//# sourceMappingURL=main.js.map
