// DOM Elements
const modalBox = document.querySelector('.modal')
const codeCountry = document.getElementById('code__country')
const labelChecked = document.querySelectorAll('.modal-body input')
const textAnim = document.querySelector('h2')

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
sr.reveal(`.link__1`, { origin: 'top', delay: 600 })
sr.reveal(`.link__3`, { origin: 'top', delay: 600 })
sr.reveal(`.link__2`, { origin: 'bottom', delay: 700 })
sr.reveal(`.link__4`, { origin: 'bottom', delay: 700 })


// ============== Text Writer ============== //
new Typewriter(textAnim, {
  // Speed delete
  deleteSpeed: 20
})
.typeString('Bienvenue sur Chap<span style="color: #ff4444;">Money</span>')
.pauseFor(1000)
.deleteChars(23)
.pauseFor(800)
.typeString('Bienvenue sur Chap<span style="color: #ff4444;">Money</span>')
.start()