import React from 'react';
import './Details.css';
// import Modal from '../../services/Modal';
import Films from '../../services/Films';

// import poster from '../../testParasite.jpg';
// import starempty from '../../starempty.png';
// import starfull from '../../starfull.png';
// import close from '../../close.png';
// import playbutton from '../../playbutton.png';

const Details = () => {
  // const [showModal, setShowModal] = useState(false)

  return (
    <Films/>
    // <div>
    //   <Films/>
    //   <button onClick={() => setShowModal(true)}>
    //     Parasite
    //   </button>
    //   { 
    //     showModal &&
    //     <Modal onClose={() => setShowModal(false)}>
    //       {/* {
    //         closeModal =>
    //           <div>
    //             <div className='popup'>
    //               <div className="exit">
    //                 <button onClick={closeModal}><img src={close} alt="cross-close"/></button>
    //               </div>
    //               <div className="content">
    //                 <div className="text-content">
    //                 <h2>Parasite</h2>
    //                   <div className="infos">
    //                     <p className="date">2019</p>
    //                     <p>Thriller, Comédie noire</p>
    //                   </div>
    //                   <div className="meta-rating">
    //                     <div className="rating"><img src={starfull} alt="rating"/><img src={starempty} alt="rating"/><img src={starempty} alt="rating"/><img src={starempty} alt="rating"/><img src={starempty} alt="rating"/></div>
    //                     <p className="meta">16+</p>
    //                     <p className="meta">2h20</p>
    //                   </div>
    //                     <div className="textFilm">
    //                       <div className="synopsis">
    //                         <p className="details">Toute la famille de Ki-taek est au chômage, et s'intéresse fortement au train de vie de la richissime famille Park. Un jour, leur fils réussit à se faire recommander pour donner des cours particuliers d'anglais chez les Park. C'est le début d'un engrenage incontrôlable...</p>
    //                       </div>
    //                       <div className="distrib">
    //                         <p className="category">Réalisateur</p>
    //                         <p className="details">Bong Joon-ho</p>
    //                         <p className="category">Scénariste(s)</p>
    //                         <p className="details">Bong Joon-ho, Han Jin-won</p>
    //                         <p className="category">Distribution</p>
    //                         <p className="details">Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Jang Hye-jin, Choi Woo-sik, Park So-dam</p>
    //                       </div>
    //                       <div className="disponibility">
    //                         <p className="category">Disponible sur</p>
    //                         <p className="details">Netflix, Amazon Prime</p>
    //                       </div>
    //                     </div>
    //                 </div>
    //                 <div><img src={poster} alt="parasite-poster" className="poster"/></div>
    //               </div>
    //               <div className="trailer">
    //                 <p>TRAILER</p>
    //                 <img src={playbutton} alt="playbutton"/>
    //               </div>
    //             </div>
    //           </div>
    //       } */}
    //     </Modal>
    //   }
    // </div>
  )
}

export default Details;