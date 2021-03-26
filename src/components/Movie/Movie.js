import './Movie.css'

function Movie(props) {
    const posterPath = "https://image.tmdb.org/t/p/w500"+props.movie.poster_path

    let divStyle = {
        backgroundImage: 'url(' + posterPath + ')'
    }

    return (
        <button className="movie-card" style={divStyle}>
            <p className="movie-card-title">{props.movie.vote_average / 2}/5</p>
        </button>
    );
}

export default Movie
  