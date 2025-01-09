'use strict'

function getPokemons(onSuccess) {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=15'
    const pokemons = []

	getData(url, ({ results }) => {
        results.forEach(pokemone => getData(pokemone.url, pokemon => {
            const { name, weight, sprites } = pokemon
            const imgs = Object.values(sprites).filter(url => typeof url === 'string')
            pokemons.push({ name, weight, imgs })

            if (pokemons.length === results.length) {
                pokemons.sort((p1, p2) => p1.name.localeCompare(p2.name))
                onSuccess(pokemons)
            }
        }))
	})
}