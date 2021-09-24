Number.prototype.times = function (cb) {
  var i = -1

  while (++i < this) {
    cb(i)
  }

  return +this
}

console.log('Yo!')

let name = 'HSE'
name = 'ADC'
console.log(name)

const city = 'Moscow'
// city = "Так нельзя";
console.log(city)

const person = {
  firstName: 'Виктор',
  lastName: 'Пелевин'
}

person['firstName'] = 'Мы поменяли имя'
person['middleName'] = 'Олегович'
// person = { firstName: "Так нельзя" };
console.log(person)

let years = [2016, 2017, 2018, 2019, 2020, 2021]

// prettier-ignore
let groups = {
  group2016: "Поток 2020",
  group2017: "Название",
  group2018: "Название",
  group2019: [
    "Название 1",
    "Название 2"
  ],
  group2020: [
    "Название 1",
    "Название 2",
    "Название 3"
  ],
  group2021: [
    "Название 1",
    "Название 2",
    "Название 3"
  ]
}

years.push(2022)

years.forEach((item, i) => {
  console.log(item, i)

  if (item == 2019) {
    years[i] = '2019 Awesome'
  }
})

Object.keys(groups).forEach((key) => {
  console.log(groups[key])

  if (key == 'group2019') {
    groups[key][0] = 'Дизпрог'
    groups[key][1] = 'Дизпром'
  }
})

console.log(years)
console.log(groups)

function markAllAsAwesome() {
  let updatedYears = years.map((item) => {
    return item + ' Awesome'
  })

  console.log(updatedYears)
}

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed')

  // document.addEventListener("click", markAllAsAwesome);

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

  function initOscillator() {
    const oscillator = audioCtx.createOscillator()

    const startButton = document.createElement('div')
    const stopButton = document.createElement('div')
    const frequencyInput = document.createElement('input')
    startButton.innerText = 'START'
    stopButton.innerText = 'STOP'
    frequencyInput.type = 'range'
    frequencyInput.min = 0
    frequencyInput.max = 1320

    startButton.addEventListener('click', () => {
      start(oscillator)
    })

    stopButton.addEventListener('click', () => {
      stop(oscillator)
    })

    frequencyInput.addEventListener('input', (e) => {
      changeFrequency(e, oscillator)
    })

    const body = document.getElementsByTagName('body')[0]
    body.appendChild(startButton)
    body.appendChild(stopButton)
    body.appendChild(frequencyInput)

    createOscillator(oscillator)
  }

  function createOscillator(oscillator) {
    oscillator.type = 'square'
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime)
    oscillator.started = false
  }

  function start(oscillator) {
    oscillator.connect(audioCtx.destination)

    if (oscillator.started === false) {
      oscillator.start()
      oscillator.started = true
    }
  }

  function stop(oscillator) {
    // oscillator.stop(audioCtx.currentTime)
    oscillator.disconnect(audioCtx.destination)
  }

  function changeFrequency(e, oscillator) {
    const frequency = e.target.valueAsNumber
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime)
  }

  // prettier-ignore
  ;(10).times(() => {
    initOscillator()
  })
})

// Нативные компоненты, управление слайдером
// Рендеринг из базы данных
// Отправка в базу данных
// Поиск объекта в памяти по UUID
// Что даёт нам реакт, принципы
// Перенос осциллятора на реакт
// VCV Rack
