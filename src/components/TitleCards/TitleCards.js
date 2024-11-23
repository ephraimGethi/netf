import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title,category}) => {
  const [apiData,setApiData]=useState([])
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2EwZjk4OWRjNWZlZmU2ODViMzM5ZDVlMjVmZWI4MCIsIm5iZiI6MTczMTI5MTg2Ny41OTc1NjA2LCJzdWIiOiI2NzMxNjg2MWIzZmUwNWUwMzgxNGUyOGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.p1kOxif8aVyLm1T1HqvzYBY8zZb0uzd8hzP_eO3cT1k'
    }
  };
useEffect(()=>{
   
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel',handleWheel)
},[])

function handleWheel(event){
event.preventDefault()
cardsRef.current.scrollLeft += event.deltaY;
}
  return (
    <div className='title-cards'>
      <h2>{title?title:'Popular on Netflix'}</h2>
      <div className='card-list' ref={cardsRef}>
          {apiData.map((card,index)=>{
            return (
              <Link to={`/player/${card.id}`} key={index}>
              <div className='card' key={index}>
              {/* const src = `https://image.tmdb.org/t/p/w500${card.backdrop_path}`; */}
              <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt=''/>
              <p>{card.original_title}</p>
            </div></Link>
            )
          })}
      </div>
    </div>
  )
}

export default TitleCards