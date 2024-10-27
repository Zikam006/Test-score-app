let score = 0
let scoreEl = document.getElementById("score-el")
let saveEl = document.getElementById("save-el")

function increase() {
  score = score + 1
  scoreEl.innerText = score
}

function decrease() {
  score = score - 1
  scoreEl.innerText = score
}
function save() {
  let scoreStr = score
  saveEl.innerText = scoreStr
  scoreEl.innerText = 0  
  score = 0
}

 