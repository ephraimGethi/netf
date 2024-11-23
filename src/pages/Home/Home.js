import React from 'react'
import "./Home.css"
import NavBar from '../../components/NavBar/NavBar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import playicon from '../../assets/play_icon.png'
import infoicon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='Home'>
    <NavBar/>
    <div className='hero'>
      <img src={hero_banner} alt='' className='banner-img'/>
      <div className='hero-caption'>
        <img src={hero_title} alt='' className='caption-img'/>
        <p>Discovering his strengths,the young man from karatina embarks on a journey to silicon valley to come up
          with softwares to aid in the daily works of his community and family.
        </p>
        <div className='hero-btns'>
            <button className='btn'><img src={playicon} alt=''/>play</button>
            <button className='btn dark-btn'><img src={infoicon} alt=''/>More Info</button>
        </div>
        <TitleCards/>
      </div>
    </div>
    <div className='more-cards'>
    <TitleCards title='Blockbuster Movies' category={"top_rated"}/>
    <TitleCards title='Only On Netflix' category={"popular"}/>
    <TitleCards title='Upcoming' category={"upcoming"}/>
    <TitleCards title='Top Pics For You' category={"now_playing"}/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home