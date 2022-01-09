


const burgerIcon = document.querySelector(".burger-icon")
const navWrapper = document.querySelector(".nav-wrapper")

navWrapper.classList.remove('is-open')


burgerIcon.addEventListener('click', function(){
  navWrapper.classList.toggle('is-open')
})
