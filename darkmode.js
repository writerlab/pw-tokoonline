let btn = document.getElementById('btn-darkmode')

btn.innerHTML = "☀️"
let defaultMode = "light"

function changeMode() {
  if (defaultMode === "light") {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    btn.innerHTML = "🌙"
    defaultMode = "dark"
  } else {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    btn.innerHTML = "☀️"
    defaultMode = "light" 
  }
}