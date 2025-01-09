'use strict'

function onInit() {
    getPokemons(pokemons => {
        renderPokemons(pokemons)
        pokemons.forEach(pokemon => 
            getPokemon(pokemon.url, renderPokemon))
    })
}

function renderPokemons(pokemons) {
    const elPokinonList = document.querySelector('.pokemons-container')
    const strHTMLs = pokemons.map(pokemon => `
        <article class="card">
            <h2>${pokemon.name}</h2>
            <div class="info-${pokemon.name}">
                <p>Weight: <span></span></p>
                <img src="" />
            </div>
        </article>`)

    elPokinonList.innerHTML = strHTMLs.join('')
}

function renderPokemon(pokemon) {
    const { name, weight, imgs } = pokemon

    document.querySelector(`.info-${name} span`).innerText = weight
    document.querySelector(`.info-${name} img`).src = imgs[0]

    // Bonus - sprites interval

    let currImgIdx = 0
    setInterval(() => {
        let currImg = pokemon.imgs[currImgIdx++]
        document.querySelector(`.info-${name} img`).src = currImg

        if (currImgIdx === pokemon.imgs.length) currImgIdx = 0
    }, 300)
}