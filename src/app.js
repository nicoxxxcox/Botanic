


const burgerIcon = document.querySelector(".burger-icon")
const navWrapper = document.querySelector(".nav-wrapper")

navWrapper.classList.remove('mobile-expanded')


burgerIcon.addEventListener('click', function(){
  navWrapper.classList.toggle('mobile-expanded')
})
