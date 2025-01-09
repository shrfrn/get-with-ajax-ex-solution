'use strict'

function getPokemons(onSuccess) {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=15'
	getData(url, ({ results }) => {
		const pokemons = results.sort((p1, p2) => p1.name.localeCompare(p2.name))
		onSuccess(pokemons)
	})
}

function getPokemon(pokemonUrl, cb) {
	getData(pokemonUrl, res => {
		const { name, weight, sprites } = res
		const imgs = Object.values(sprites).filter(sprite => typeof sprite === 'string')
		const pokemon = { name, weight, imgs }

		cb(pokemon)
	})
}