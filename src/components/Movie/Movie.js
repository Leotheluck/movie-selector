import './Movie.css'

function Movie(props) {
    const posterPath = "https://image.tmdb.org/t/p/w500"+props.movie.poster_path

    return (
        <div>
            {props.movie.title}
            <img src={posterPath}></img>
        </div>
    );
}

export default Movie
  