import React, { useEffect, useState } from 'react'
import './Player.css'
import backarrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
const {id} = useParams()
const navigate = useNavigate()
  const[apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2EwZjk4OWRjNWZlZmU2ODViMzM5ZDVlMjVmZWI4MCIsIm5iZiI6MTczMTM4MjIzOS4wOTQ2NzQ4LCJzdWIiOiI2NzMxNjg2MWIzZmUwNWUwMzgxNGUyOGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LOqsxj_2MAusqC6Kl-48T7GPC6chjK7BdNzW4x-BzDE'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
    
  return (
    <div className='player'>
      <img src={backarrow} alt='' onClick={()=>{navigate('/')}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player