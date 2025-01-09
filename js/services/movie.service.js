'use strict'

const apiKey = '096316ccf97d9bb07f660988be9d01ed'
const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`

const genres_key = 'genres'
const movies_key = 'movies'

function getGenres(onSuccess) {
    let genres = loadFromStorage(genres_key) || []
    if (genres.length) onSuccess(genres)

    getData(genresURL, ({ genres }) => {
        saveToStorage(genres_key, genres)
        onSuccess(genres)
    })
}

function getMoviesByGenre(genre, onSuccess) {
    let movies = loadFromStorage(movies_key) || {}
    if (movies[genre.name]) return onSuccess(movies[genre.name])

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre.id}`
    getData(url, res => {
        const moviesData = prepareData(res)

        movies[genre.name] = moviesData
        saveToStorage(movies_key, movies)
        
        onSuccess(moviesData)
    })
}

function prepareData({ results }) {
    return results.map(({ title, overview, backdrop_path }) => 
        ({ title, overview, backdrop_path }))
}

function getGenreById(id) {
    const genres = loadFromStorage(genres_key)
    return genres.find(g => g.id === id)
}


// It's good to keep some data for cases when API not working
const keepGeneres = 
[
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 18,
        "name": "Drama"
    }
]

const keepMovies = 
[
    {
        "title": "Deadpool & Wolverine",
        "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
        "backdrop_path": "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"
    },
    {
        "title": "Twisters",
        "overview": "As storm season intensifies, the paths of former storm chaser Kate Carter and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed. The pair and their competing teams find themselves squarely in the paths of multiple storm systems converging over central Oklahoma in the fight of their lives.",
        "backdrop_path": "/58D6ZAvOKxlHjyX9S8qNKSBE9Y.jpg"
    },
    {
        "title": "Despicable Me 4",
        "overview": "Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
        "backdrop_path": "/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg"
    }
]