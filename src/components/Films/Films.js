import { useEffect, useState } from 'react';
import './Films.css';
// import Modal from './Modal';

import starempty from '../starempty.png';
import starfull from '../starfull.png';
import starhalf from '../starhalf.png';
// import close from '../close.png';
import playbutton from '../playbutton.png';

const Films = (props) =>{
  const [movie, setMovie] = useState([])
  const [credits, setCredits] = useState([])
  const [providers, setProviders] = useState([])
  // const [showModal, setShowModal] = useState(false)

  const fetchMovies = () => {
        const url = `https://api.themoviedb.org/3/movie/${props.id}?api_key=f40b8233db44ef498baa757dacc5b165&language=fr`

        fetch(url)
            .then(response => response.json())
            .then(json => setMovie(json))
    }

    useEffect(() => {
        fetchMovies()
    }, [])
    const fetchCredits = () => {
      const url = `https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=f40b8233db44ef498baa757dacc5b165`
      fetch(url)
        .then(response => response.json())
        .then(json => setCredits(json))
    }
    useEffect(() => {
      fetchCredits()
    }, [])
  const fetchProviders = () => {
    const url = `https://api.themoviedb.org/3/movie/${props.id}/watch/providers?api_key=f40b8233db44ef498baa757dacc5b165`
    fetch(url)
      .then(response => response.json())
      .then(json => setProviders(json))
  }
  useEffect(() => {
    fetchProviders()
  }, [])
  const distribtab = function(){
    if (credits["cast"]){
      let actortab = []
      if (credits["cast"].length < 6){
        for (let i in credits["cast"]){
          if (i < credits["cast"].length){
            actortab.push(credits["cast"][i]["name"]+ ', ')
          } else {
            actortab.push(credits["cast"][i]["name"])
          }
        }
        return actortab
  
      }
      for (let y = 0; y <= 5; y++){
        if (y < 5){
          actortab.push(credits["cast"][y]["name"]+ ', ')
        } else {
          actortab.push(credits["cast"][y]["name"])
        }
      }
      return actortab
    }
  }
  const defprod = function(){
    if (credits["crew"]){
      let prod
      for (let v in credits['crew']){
        if(credits["crew"][v]["known_for_department"] === "Directing"){
          prod = credits["crew"][v]["name"]
        }
      }
      return prod
    }
  }
  const defscena = function (){
    if (credits["cast"]){
      let scenarists = []
      let scenaristsKey = []
      for (let v in credits['cast']){
        if(credits["cast"][v]["known_for_department"] === "Writing"){
          scenaristsKey.push(v)
        }
      }
      for (let o in scenaristsKey){
        if (o !== 0){
          scenarists.push(credits["cast"][scenaristsKey[o]]["name"]+', ')
        } else {
          scenarists.push(credits["cast"][scenaristsKey[o]]["name"])
        }
      }
      return scenarists
    }
  }
  let genrestab = [];
  if(movie.genres){
    for (let x in movie.genres){
      if(x < movie.genres.length - 1){
        genrestab.push(movie.genres[x]['name']+ ', ')
  
      } else{
        genrestab.push(movie.genres[x]['name'])
      }
    }
  }
  let fncGenre = function(){
    for (let v in genrestab){
      return genrestab
    }
  }
  const title = movie.original_title
  let lenTitle
  if(title){
    if (title.length > 10){
       lenTitle = "longTitle"
    } else{
      lenTitle = "shortTitle"
    }
  }
  const poster = "https://image.tmdb.org/t/p/w500" + movie.poster_path
  const date = movie.release_date
  const homepage = movie.homepage
  let datetab = []
  if (date){
    datetab = date.split('-')
  }
  const grade = movie.vote_average / 2
  let tab = []
  for (let i = 0.5; i <= 5; i+=0.5){
    if(i <= grade){
      tab.push(i)
    }
  }
  let starstate1 = starempty
  let starstate2 = starempty
  let starstate3 = starempty
  let starstate4 = starempty
  let starstate5 = starempty
  //ROLLERCOSTER ENTRY :D >>>>
  if (tab.includes(0.5)){
    starstate1 = starhalf
    if (tab.includes(1)){
      starstate1 = starfull
      if (tab.includes(1.5)){
        starstate2 = starhalf
        if (tab.includes(2)){
          starstate2 = starfull
          if (tab.includes(2.5)){
            starstate3 = starhalf
            if (tab.includes(3)){
              starstate3 = starfull
              if (tab.includes(3.5)){
                starstate4 = starhalf
                if (tab.includes(4)){
                  starstate4 = starfull
                  if (tab.includes(4.5)){
                    starstate5 = starhalf
                    if (tab.includes(5)){
                      starstate5 = starfull
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const defProviders = function(){
    let provArr = []
    if (providers['results']){
      try{
        for (let i in providers['results']["FR"]["flatrate"][0]["provider_name"]){
          if (i !== providers['results']["FR"]["flatrate"][0]["provider_name"].length-1){
            provArr.push(providers['results']["FR"]["flatrate"][0]["provider_name"][i]+', ')
          } else{
            provArr.push(providers['results']["FR"]["flatrate"][0]["provider_name"][i])
          }
        }
        return providers['results']["FR"]["flatrate"][0]["provider_name"]
      } catch(err){
        return "Aucune plateforme de streaming"
      }
    }
  }
  return(
    <div>
      {/* <button onClick={() => setShowModal(true)}>
        {title}
      </button>
      { 
        showModal &&
        <Modal onClose={() => setShowModal(false)}>
          {
            closeModal =>
              <div> */}
                <div className='popup'>
                  <div className="content">
                    <div className="text-content">
                    <h2 className={lenTitle}>{title}</h2>
                      <div className="infos">
                        <p className="date">{datetab[0]}</p>
                        <p className="genre">{fncGenre()}</p>

                      </div>
                      <div className="meta-rating">
                        <div className="rating">
                          <img className='star' src={starstate1} alt="rating"/>
                          <img className='star' src={starstate2} alt="rating"/>
                          <img className='star' src={starstate3} alt="rating"/>
                          <img className='star' src={starstate4} alt="rating"/>
                          <img className='star' src={starstate5} alt="rating"/>
                        </div>
                        <p className="meta">16+</p>
                        <p className="meta">{movie.runtime}min</p>
                      </div>
                        <div className="textFilm">
                          <div className="poster-placement phone-visibility">
                            <img src={poster} alt="movie-poster" className="poster"/>
                            <div className="movie-page"><a href={homepage}>Page du film</a></div>
                          </div>
                          <div className="synopsis">
                            <p className="details">{movie.overview}</p>
                          </div>
                          <div className="distrib">
                            <p className="category">Réalisateur</p>
                            <p className="details">{defprod()}</p>
                            <p className="category">Scénariste(s)</p>
                            <p className="details">{defscena()}</p>
                            <p className="category">Distribution</p>
                            <p className="details">{distribtab()}</p>
                          </div>
                          <div className="disponibility">
                            <p className="category">Disponible sur</p>
                            <p className="details">{defProviders()}</p>
                          </div>
                        </div>
                    </div>
                    <div className="poster-placement pc-visibility">
                      <img src={poster} alt="movie-poster" className="poster"/>
                      <div className="movie-page"><a href={homepage}>Page du film</a></div>
                    </div>
                  </div>
                  <div className="trailer">
                    <p>TRAILER</p>
                    <img src={playbutton} alt="playbutton"/>
                  </div>
                </div>
              </div>
      //     }
      //   </Modal>
      // }
    // </div>
  )
}


export default Films;