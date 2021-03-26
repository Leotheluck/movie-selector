import { useEffect, useState } from 'react';

import Movie from '../Movie/Movie';
import MovieRandomizer from '../MovieRandomizer/MovieRandomizer';
import './List.css'
const genres = []
let fetchGenres = ''
let fetchRuntime = ''
let fetchProvider = ''
let fetchSearcher = ''

function List() {

    const [movies,setMovies] = useState([])
    const [searchDetails, setSearchDetails] = useState('')
    const [discoverElse, setDiscoverElse] = useState('discover')

    for (let i = 0; i < genres.length; i++) {
        if (genres[i] == undefined) {
            genres.slice(i,1)
        }
    }

    const addGenre = (genre, event) => {

        console.log(genre)

        if (event.target.checked == true) {
            console.log("checked")
            genres.push(genre)
        }

        console.log(genres)

        if (event.target.checked == false) {
            console.log("unchecked")
            for (let i = 0; i < genres.length; i++) {
                if (genres[i] == genre) {
                    genres.splice(i, 1)
                    i--
                }
            }
        }

        console.log(genres)

        let genresFormat = ''
        let genresComponent = ''
        
        if (genres.length > 0) {
            for (let i = 0; i < genres.length; i++) {
                if (genres[i] != undefined) {
                    genresFormat = genresFormat + genres[i] + ','   
                }
            }
            genresComponent = '&with_genres=' + genresFormat
        }  

        console.log(genres)

        console.log(genresComponent)

        fetchGenres = genresComponent
        console.log(movies.results)
        composeLink()
    }

    const addRuntime = (runtime) => {
        if (runtime == "none") {
            fetchRuntime = ""
        } else if (runtime == "short") {
            fetchRuntime = "&with_runtime.lte=90"
        } else if (runtime == "classic") {
            fetchRuntime = "&with_runtime.gte=90&with_runtime.lte=150"
        } else if (runtime == "long") {
            fetchRuntime = "&with_runtime.gte=150"
        }

        console.log(fetchRuntime)

        composeLink()
    }

    const addProvider = (watchProvider) => {
        if (watchProvider == "none") {
            fetchProvider = ""
        } else if (watchProvider == "netflix") {
            fetchProvider = "&with_watch_providers=8&watch_region=FR"
        } else if (watchProvider == "amazonprime") {
            fetchProvider = "&with_watch_providers=119&watch_region=FR"
        } else if (watchProvider == "disneyplus") {
            fetchProvider = "&with_watch_providers=337&watch_region=FR"
        }

        console.log(fetchProvider)

        composeLink()
    }

    const addSearcher = (event) => {
        if (event.target.value == "") {
            fetchSearcher = ""
            setDiscoverElse("discover")
        } else {
            fetchSearcher = "&query=" + event.target.value
            setDiscoverElse("search")
        }

        console.log(fetchSearcher)

        composeLink()
    }

    const composeLink = () => {
        console.log(movies.results)
        if (fetchSearcher == '') {
            setSearchDetails(fetchGenres + fetchRuntime + fetchProvider)
        } else {
            setSearchDetails(fetchSearcher)
        }
        console.log(movies.results)
        console.log(searchDetails)
    }

    const fetchMovies = () => {
        const url = `https://api.themoviedb.org/3/${discoverElse}/movie?api_key=f40b8233db44ef498baa757dacc5b165&language=fr${searchDetails}`   
            fetch(url)
            .then(response => response.json())
            .then(json => setMovies(json))
    }

    useEffect(() => {
        fetchMovies()
    }, [searchDetails])

    if(movies.results) {
        console.log(movies.results)
    }

    return(
        <div>
            <div className="genre-container">
                <div className="genre-title-container">
                    <h2 className="genre-title">Genres</h2>
                    <div className="genre-title-bar"></div>
                </div>
                <ul className="boxtags-container">
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="action" onChange={(event) => {addGenre(28, event)}}></input>
                        <label className="boxtag-label" for="action">Action</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="adventure" onChange={(event) => {addGenre(12, event)}}></input>
                        <label className="boxtag-label" for="adventure">Aventure</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="animation" onChange={(event) => {addGenre(16, event)}}></input>
                        <label className="boxtag-label" for="animation">Animation</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="comedy" onChange={(event) => {addGenre(35, event)}}></input>
                        <label className="boxtag-label" for="comedy">Comédie</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="crime" onChange={(event) => {addGenre(80, event)}}></input>
                        <label className="boxtag-label" for="crime">Crime</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="documentary" onChange={(event) => {addGenre(99, event)}}></input>
                        <label className="boxtag-label" for="documentary">Documentaire</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="drama" onChange={(event) => {addGenre(18, event)}}></input>
                        <label className="boxtag-label" for="drama">Drame</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="family" onChange={(event) => {addGenre(10751, event)}}></input>
                        <label className="boxtag-label" for="family">Famille</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="fantasy" onChange={(event) => {addGenre(14, event)}}></input>
                        <label className="boxtag-label" for="fantasy">Fantaisie</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="history" onChange={(event) => {addGenre(36, event)}}></input>
                        <label className="boxtag-label" for="history">Histoire</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="horror" onChange={(event) => {addGenre(27, event)}}></input>
                        <label className="boxtag-label" for="horror">Horreur</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="music" onChange={(event) => {addGenre(10402, event)}}></input>
                        <label className="boxtag-label" for="music">Musique</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="mystery" onChange={(event) => {addGenre(9648, event)}}></input>
                        <label className="boxtag-label" for="mystery">Mystère</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="romance" onChange={(event) => {addGenre(10749, event)}}></input>
                        <label className="boxtag-label" for="romance">Romance</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="sciencefiction" onChange={(event) => {addGenre(878, event)}}></input>
                        <label className="boxtag-label" for="sciencefiction">Science-Fiction</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="tvmovie" onChange={(event) => {addGenre(10770, event)}}></input>
                        <label className="boxtag-label" for="tvmovie">Film TV</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="thriller" onChange={(event) => {addGenre(53, event)}}></input>
                        <label className="boxtag-label" for="thriller">Thriller</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="war" onChange={(event) => {addGenre(10752, event)}}></input>
                        <label className="boxtag-label" for="war">Guerre</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="checkbox" id="western" onChange={(event) => {addGenre(37, event)}}></input>
                        <label className="boxtag-label" for="western">Western</label>
                    </li>
                </ul>
            </div>
            <div className="length-container">
                <div className="length-title-container">
                    <h2 className="length-title">Durée</h2>
                    <div className="length-title-bar"></div>
                </div>
                <ul className="boxtags-container">
                    <li className="boxtag">
                        <input className="boxtag-input" type="radio" id="none" name="length" onChange={() => {addRuntime("none")}}></input>
                        <label className="boxtag-label" for="none">Peu importe</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="radio" id="short" name="length" onChange={() => {addRuntime("short")}}></input>
                        <label className="boxtag-label" for="short">Court (1h30 ou moins)</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="radio" id="classic" name="length" onChange={() => {addRuntime("classic")}}></input>
                        <label className="boxtag-label" for="classic">Classique (1h30 - 2h30)</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="radio" id="long" name="length" onChange={() => {addRuntime("long")}}></input>
                        <label className="boxtag-label" for="long">Long (2h30 ou plus)</label>
                    </li>
                </ul>
            </div>
            <div className="providers-container">
                <div className="providers-title-container">
                    <h2 className="providers-title">Plateforme</h2>
                    <div className="providers-title-bar"></div>
                </div>
                <ul className="boxtags-container">
                    <li className="boxtag">
                        <input className="boxtag-input" type="radio" id="noProvider" name="provider" onChange={() => {addProvider("none")}}></input>
                        <label className="boxtag-label" for="noProvider">Peu importe</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="radio" id="netflix" name="provider" onChange={() => {addProvider("netflix")}}></input>
                        <label className="boxtag-label" for="netflix">Netflix</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="radio" id="amazonprime" name="provider" onChange={() => {addProvider("amazonprime")}}></input>
                        <label className="boxtag-label" for="amazonprime">Amazon Prime Video</label>
                    </li>
                    <li className="boxtag">
                        <input className="boxtag-input" type="radio" id="disneyplus" name="provider" onChange={() => {addProvider("disneyplus")}}></input>
                        <label className="boxtag-label" for="disneyplus">Disney +</label>
                    </li>
                </ul>
            </div>
            <div className="providers-container">
                <div className="providers-title-container">
                    <h2 className="providers-title">Recherche</h2>
                    <div className="providers-title-bar"></div>
                </div>
                <ul className="boxtags-container">
                    <li className="searchbar">
                        <input className="searchbar-input" placeholder="Rechercher..." type="text" onChange={(event) => {addSearcher(event)}}></input>
                        <MovieRandomizer movies={movies}/>
                    </li>
                </ul>
            </div>
            <div className="movie-list-container">
                <div className="movie-list">
                    {
                        movies.results
                            ? movies.results.map(movie => {
                                return <Movie movie={movie} key={movie.id}/>
                                })
                            : console.log("Loading movies...")
                    }
                </div>
            </div>
        </div>
    )
}

export default List