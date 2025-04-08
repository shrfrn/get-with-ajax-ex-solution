'use strict'

function onAsk(ev) {
	ev.preventDefault()

	document.querySelector('.ans-container').hidden = true
	const query = document.querySelector('.user-query').value

	if (query.length > 3 && query.endsWith('?')) {
		getAnswer(renderAnswer)
	} else {
		alert('Ask something')
	}
}

function renderAnswer({ answer, image }) {
	const elAns = document.querySelector('.ans-container')

	elAns.querySelector('p').innerText = answer
	elAns.querySelector('img').src = image

	if (answer === 'yes') getJoke(renderJoke)
	else getDog(renderDog)
}

function onYesNoImgReady() {
	document.querySelector('.ans-container').hidden = false
}

function renderJoke({ value }) {
	const el = document.querySelector('.joke-or-dog')
	el.innerHTML = `<p>${value}</p>`
}

function renderDog({ message: src }) {
	const el = document.querySelector('.joke-or-dog')
	el.innerHTML = `<img src="${src}" />`
}
