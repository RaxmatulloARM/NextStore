let elButton = document.querySelector(".header__btn")
let elModal = document.querySelector(".header__modal")
let elKirish = document.querySelector('.header__btn--kirish')
let elform = document.querySelector('.form__div')
let elTelKirish = document.querySelector('.form__kirish')
let elKirishDiv =document.querySelector('.kirish__div')
let elKirishPass = document.querySelector('.kirish__parol')
let elPassnan = document.querySelector('.passnan')
let elNewpass = document.querySelector('.kirish__2')
let elNewpassword = document.querySelector('.newpassword')
let elFormRuyxat = document.querySelector('.form__ruyxat');
let elRuyxat = document.querySelector('.ruyxat')
let elHamburger = document.querySelector('.hamburger')



elButton.addEventListener('click',function(evt) {
  evt.preventDefault()

  elModal.classList.toggle('blok')
})

elHamburger.addEventListener('click', function(evt) {
  evt.preventDefault

  elModal.classList.toggle('blok')
})



elKirish.addEventListener('click',function(evt) {
  evt.preventDefault()

  elform.classList.toggle('item')
  elModal.classList.remove('blok')
})

elTelKirish.addEventListener('click',function(evt) {
  evt.preventDefault()

  elKirishDiv.classList.toggle('blok')
  elform.classList.remove('item')
})

elKirishPass.addEventListener('click', function(evt) {
  evt.preventDefault

  elPassnan.classList.toggle('booom')
  elKirishDiv.classList.remove('blok')
})

elNewpass.addEventListener('click', function(evt) {
  evt.preventDefault()

  elNewpassword.classList.toggle('neww')
  elPassnan.classList.remove('booom')
})

elFormRuyxat.addEventListener('click', function(evt) {
  evt.preventDefault()

  elRuyxat.classList.toggle('aaa')
  elform.classList.remove('item')
})

