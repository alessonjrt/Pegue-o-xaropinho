const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const audio = new Audio('./audio/tuki.mp3');
const audio_b = new Audio('./audio/rapaiz.mp3')
const audio_c = new Audio('./audio/bumba.mp3')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null
let play = false



function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      audio.play()
      audio_b.play()
      score.textContent = result
      hitPosition = null
    }
  })
})

function move() {
 
  timerId = setInterval(randomSquare, 500)
}

 audio_c.play()
  move()
  function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
      clearInterval(countDownTimerId)
      clearInterval(timerId)
      alert('Acabou o tempo zé ruela, ai teus ponto: ' + result + ' se quiser falahar de novo reinicia a página!')
    }

  }





let countDownTimerId = setInterval(countDown, 1000)

