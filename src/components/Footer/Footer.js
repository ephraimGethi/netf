import React from 'react'
import './Footer.css'
import youtubeicon from '../../assets/youtube_icon.png'
import facebookicon from '../../assets/facebook_icon.png'
import twittericon from '../../assets/twitter_icon.png'
import instagramicon from '../../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
          <img src={facebookicon} alt=''/>
          <img src={instagramicon} alt=''/>
          <img src={twittericon} alt=''/>
          <img src={youtubeicon} alt=''/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>@ 1997 - 2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer