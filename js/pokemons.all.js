'use strict'

function onInit() {
    getPokemons(pokemons => renderPokemons(pokemons))
}

function renderPokemons(pokemons) {
    const elPokinonList = document.querySelector('.pokemons-container')
    const strHTMLs = pokemons.map(pokemon =>`
        <article class="card info-${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <div class="info-${pokemon.name}">
                <p>Weight: <span>${pokemon.weight}</span></p>
                <img src="${pokemon.imgs[0]}" />
            </div>
        </article>`)

    elPokinonList.innerHTML = strHTMLs.join('')
    animateSprites(pokemons)
}

function animateSprites(pokemons) {
    pokemons.forEach(pokemon => {

        const { name, weight, sprites: imgs } = pokemon
        let currImgIdx = 0

        setInterval(() => {
            let currImg = pokemon.imgs[currImgIdx++]
            document.querySelector(`.info-${name} img`).src = currImg

            if (currImgIdx === pokemon.imgs.length) currImgIdx = 0
        }, 300)
    })
}