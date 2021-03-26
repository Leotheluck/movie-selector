import './Movie.css'

function Movie(props) {
    const posterPath = "https://image.tmdb.org/t/p/w500"+props.movie.poster_path

    let divStyle = {
        backgroundImage: 'url(' + posterPath + ')'
    }

    return (
        <div className="movie-card" style={divStyle}>
            {/* {props.movie.title} */}
            {/* <img src={posterPath}></img> */}
        </div>
    );
}

export default Movie
  