const modalBox = document.querySelector('.modal')
const labelChecked = document.querySelectorAll('.modal-body input')
const codeCountry = document.getElementById('code__country')

labelChecked.forEach(el => {
  if (el.checked) {
    codeCountry.innerHTML = `(${el.value})`
  }

  el.addEventListener('click', () => {
    if (el.checked) { 
      codeCountry.innerHTML = `(${el.value})`

      // modalBox.style.display = 'none'
      // document.querySelector('.modal-backdrop').style.display = 'none'
    }
  })
})