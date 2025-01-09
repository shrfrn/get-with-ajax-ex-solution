'use strict'

function onInit() {
  console.log('Init')
}

function onAsk(ev) {
  ev.preventDefault()
  document.querySelector('.ans-container').hidden = true
  const query = document.querySelector('.user-query').value

  // regex validation:
  // check if it starts with A-z chars (3 or more chars) and if it ends with question mark.
  // if (/(^[A-z]{3,}\?$)/.test(query)) {
  //   getAnswer(renderAnswer)
  // }

  // // readable option:
  if (query.length > 3 && query.endsWith('?')) {
    getAnswer(renderAnswer)
  } else {
    alert('Ask something')
  }
}

function renderAnswer({ answer, image }) {
  const el = document.querySelector('.ans-container')
  el.querySelector('h3').innerText = answer
  el.querySelector('img').src = image

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

function renderDog({ message }) {
  const el = document.querySelector('.joke-or-dog')
  el.innerHTML = `<img src="${message}" />`
}
