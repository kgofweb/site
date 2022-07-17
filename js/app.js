// DOM Elements
const modalBox = document.querySelector('.modal')
const codeCountry = document.getElementById('code__country')
const labelChecked = document.querySelectorAll('.modal-body input')

// Event Listener
labelChecked.forEach(el => {
  if (el.checked) {
    codeCountry.innerHTML = `(${el.value})`
  }

  el.addEventListener('click', () => {
    if (el.checked) { 
      codeCountry.innerHTML = `(${el.value})`
    }
  })
})

// ============== Scroll Reveal ============== //
const sr = ScrollReveal({
  distance: '60px',
  duration: 1500,
})

sr.reveal(`.logo`, { origin: 'top', delay: 300 })
sr.reveal(`.title`, { origin: 'bottom', delay: 500 })
sr.reveal(`.link__1`, { origin: 'left', delay: 600 })
sr.reveal(`.link__2`, { origin: 'bottom', delay: 700 })
sr.reveal(`.link__3`, { origin: 'right', delay: 800 })
sr.reveal(`.link__4`, { origin: 'bottom', delay: 900 })