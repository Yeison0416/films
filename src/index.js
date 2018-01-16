const trigger = document.querySelector('.site-content__btn-Menu')
const btnrotated = document.querySelector('.site-content')
const container = document.querySelector('.container')
const contentnav = document.querySelector('.contentnav')

trigger.addEventListener('click', () => {
  container.classList.toggle('nav-active')
  trigger.classList.toggle('nav-active')
  btnrotated.classList.toggle('nav-active')
  contentnav.classList.toggle('nav-active')
})
