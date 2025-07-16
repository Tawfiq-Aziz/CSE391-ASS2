let min = document.getElementById("min")
let sec = document.getElementById("sec")
let milsec = document.getElementById("milsec")

let startBtn = document.getElementById("Start")
let stopBtn = document.getElementById("Stop")
let resetBtn = document.getElementById("Reset")

let startTime = 0
let timerId = null

startBtn.addEventListener("click", () => {
  if (timerId) return

  startTime = Date.now()
  timerId = setInterval(() => {
    let elapsed = Date.now() - startTime // elapsed time in ms

    if (elapsed >= 30000) { // stop at 30 seconds
      clearInterval(timerId)
      timerId = null
      elapsed = 30000 // cap at 30s
    }

    // Only show seconds in multiples of 3
    let totalSeconds = Math.floor(elapsed / 1000)
    let displaySeconds = totalSeconds - (totalSeconds % 3)

    let minutes = Math.floor(displaySeconds / 60)
    let seconds = displaySeconds % 60
    let milliseconds = elapsed % 1000

    min.innerText = String(minutes).padStart(2, "0")
    sec.innerText = String(seconds).padStart(2, "0")
    milsec.innerText = String(milliseconds).padStart(3, "0")
  }, 50)
})

stopBtn.addEventListener("click", () => {
  clearInterval(timerId)
  timerId = null
})

resetBtn.addEventListener("click", () => {
  clearInterval(timerId)
  timerId = null
  min.innerText = "00"
  sec.innerText = "00"
  milsec.innerText = "000"
})



