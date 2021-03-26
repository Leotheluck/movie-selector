import React, { useState } from 'react';
// import Details from '../Details/Details';
import Modal from '../../services/Modal';
import '../Movie/Movie.css'
import Films from '../Films/Films';

import close from '../close.png';

function MovieRandomizer(props) {
    const [showModal, setShowModal] = useState(false)

    let randomizer = Math.floor(Math.random() * 20)

    return (
        <div>
            <button onClick={() => setShowModal(true)} className="movie-randomizer">
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
                        <Films id={props.movies.results[randomizer].id}/>
                    </div>
                }
                </Modal>
            }
        </div>
    );
}

export default MovieRandomizer