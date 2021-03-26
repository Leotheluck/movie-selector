import React, { useState } from 'react';
// import Details from '../Details/Details';
import Modal from '../../services/Modal';
import './Movie.css'
import Films from '../Films/Films';

import close from '../close.png';

function Movie(props) {
    const posterPath = "https://image.tmdb.org/t/p/w500"+props.movie.poster_path

<<<<<<< HEAD
    let divStyle = {
        backgroundImage: 'url(' + posterPath + ')'
    }

    const [showModal, setShowModal] = useState(false)

    return (
        // <button onClick={() => {return <Details id={props.movie.id}/>}} className="movie-card" style={divStyle}>
        //     {/* {props.movie.title} */}
        //     {/* <img src={posterPath}></img> */}
        // </button>
        <div>
            <button onClick={() => setShowModal(true)} className="movie-card" style={divStyle}>
                <p className="movie-card-title">{props.movie.vote_average / 2}/5</p>
            </button>
            { 
                showModal &&
                <Modal onClose={() => setShowModal(false)}>
                {
                    closeModal =>
                    <div>
                        <div className="exit">
                            <button onClick={closeModal}><img src={close} alt="cross-close"/></button>
                        </div>
                        <div onClick={closeModal} className="exitbis"></div>
                        <Films id={props.movie.id}/>
                    </div>
                }
                </Modal>
            }
=======
    return (
        <div>
            {props.movie.title}
            <img src={posterPath}></img>
>>>>>>> parent of 2ee90ab (Merge branch 'main' of https://github.com/Leotheluck/movie-selector into main)
        </div>
    );
}

export default Movie
  