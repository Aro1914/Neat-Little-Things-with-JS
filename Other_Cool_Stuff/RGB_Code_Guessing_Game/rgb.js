let bgColor = []
const banner = document.querySelector('h1')
const hidden = document.querySelector('h1 span#hue')
const message = document.querySelector('#message')
let tiles = 6
let goal
const choices = document.querySelectorAll('#choices div')
let hasLost = false
const gameSetup = (x) => {
	for (let index = 0; index < x; index++) {
		let r = Math.floor(Math.random() * 256)
		let g = Math.floor(Math.random() * 256)
		let b = Math.floor(Math.random() * 256)
		bgColor[index] = `rgb(${r}, ${g}, ${b})`
	}

	let random = () => Math.floor(Math.random() * x)
	goal = `${bgColor[random()]}`
	const randHue = `${goal.slice(3, goal.length)}`
	hidden.textContent = randHue.toUpperCase()
}

const setUpChoices = (x) => {
	hasLost = false
	for (let index = 0; index < x; index++) {
		choices[index].style.backgroundColor = `${bgColor[index]}`
		const handleClick = () => {
			if (hasLost) return
			let choicesMade = 0
			choices.forEach((element) =>
				element.style.backgroundColor === 'var(--bg-color)'
					? choicesMade++
					: null
			)
			hasLost = choicesMade === tiles - 1
			console.log({ hasLost, choicesMade })
			if (choices[index].style.backgroundColor === goal) {
				for (let i = 0; i < x; i++) {
					choices[i].style.backgroundColor = goal
					banner.style.backgroundColor = goal
					banner.style.transition = 'background-color 0.5s'
					message.textContent = 'CORRECT!'
					loadBtn.textContent = 'PLAY AGAIN?'
				}
			} else if (hasLost) {
				message.textContent = 'YOU LOST!'
				loadBtn.textContent = 'PLAY AGAIN?'
				choices[index].removeEventListener('click', handleClick)
			} else {
				choices[index].style.backgroundColor = 'var(--bg-color)'
				message.textContent = 'TRY AGAIN!'
			}
		}
		choices[index].addEventListener('click', handleClick)
	}
}
const loadGame = (x) => {
	gameSetup(x)
	setUpChoices(x)
}
loadGame(tiles)

const trimChoices = (x) => {
	if (x === 3) {
		for (let index = 3; index < 6; index++) {
			choices[index].style.display = 'none'
		}
	} else {
		for (let index = 0; index < 6; index++) {
			choices[index].style.display = 'block'
		}
	}
}

const loadBtn = document.querySelector('#tool-bar>button')
loadBtn.addEventListener('click', () => {
	if (loadBtn.textContent === 'PLAY AGAIN?') {
		loadBtn.textContent = 'NEW COLORS'
	}
	loadGame(tiles)
	banner.style.backgroundColor = 'var(--global-color)'
	message.textContent = 'TRY ONE!'
})
loadBtn.addEventListener('mouseover', () => {
	loadBtn.classList.add('selected')
})
loadBtn.addEventListener('mouseout', () => {
	loadBtn.classList.remove('selected')
})
loadBtn.onfullscreenchange = loadBtn.classList.remove('selected')

const modeSetters = document.querySelectorAll('#settings button')
modeSetters.forEach((element) => {
	element.addEventListener('click', () => {
		element.textContent === 'HARD' ? (tiles = 6) : (tiles = 3)
		if (!element.classList.contains('selected')) {
			modeSetters.forEach((setter) => {
				setter.classList.toggle('selected')
			})
			banner.style.backgroundColor = 'var(--global-color)'
			loadGame(tiles)
			trimChoices(tiles)
		}
		if (element.classList.contains('selection')) {
			element.classList.remove('selection')
		}
		if (loadBtn.textContent === 'PLAY AGAIN?') {
			loadBtn.textContent = 'NEW COLORS'
			message.textContent = 'TRY ONE!'
		}
	})
	element.addEventListener('mouseover', () => {
		if (!element.classList.contains('selected')) {
			element.classList.add('selection')
		}
	})
	element.addEventListener('mouseout', () => {
		if (element.classList.contains('selection')) {
			element.classList.remove('selection')
		}
	})
})
