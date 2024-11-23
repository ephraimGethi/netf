import React, { useEffect, useRef } from 'react'
import logo from '../../assets/logo.png'
import searchicon from '../../assets/search_icon.svg'
import bellicon from '../../assets/bell_icon.svg'
import profileimg from '../../assets/profile_img.png'
import careticon from '../../assets/caret_icon.svg'
import './NavBar.css'
import { logout } from '../../firebase'

const NavBar = () => {
  const navRef = useRef()
  // useEffect(()=>{
  //   window.addEventListener('scroll',()=>{
  //     if(window.scrollY>=80){
  //       navRef.current.classList.add('nav-dark')
  //     }else{
  //       navRef.current.classList.remove('nav-dark')
  //     }
  //   })
  // },[])
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add('nav-dark');
        } else {
          navRef.current.classList.remove('nav-dark');
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; // Ensure cleanup
  }, []);
  
  return (
    <div ref={navRef} className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt=''/>
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className='navbar-right'>
          <img src={searchicon} alt='' className='icons'/>
          <p>Children</p>
          <img src={bellicon} alt='' className='icons'/>
          <div className='navbar-profile'>
            <img src={profileimg} alt='' className='profile'/>
            <img src={careticon} alt=''/>
            <div className='dropdown'>
              <p onClick={()=>{logout()}}>Sign Out Of Netflix</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NavBar