const allCards = document.querySelectorAll('.card')

const a = document.querySelectorAll('p a')
console.log(a)

a[0].addEventListener('click', function () {
  allCards[0].classList.toggle('d-none')
  allCards[1].classList.toggle('d-none')
  allCards[2].classList.toggle('d-none')
  allCards[3].classList.toggle('d-none')
})

a[1].addEventListener('click', function () {
  allCards[4].classList.toggle('d-none')
  allCards[5].classList.toggle('d-none')
  allCards[6].classList.toggle('d-none')
  allCards[7].classList.toggle('d-none')
  allCards[8].classList.toggle('d-none')
  allCards[9].classList.toggle('d-none')
})
