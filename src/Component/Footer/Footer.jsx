import React from 'react'
import './Footer.css'
import linkedin_logo from '../Assets/linkedin.png'
import youtube_logo from '../Assets/youtube.png'
import facebook_logo from '../Assets/facebook.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerlogo'>

        </div>
        <ul className='footer-links'>
            <Link to='/' style={{textDecoration:'none', color:'white'}} ><li>Company</li></Link>
            <Link to='/mens' style={{textDecoration:'none', color:'white'}}><li>Products</li></Link>
            <Link to='/offices' style={{textDecoration:'none', color:'white'}}><li>Offices</li></Link>
            <Link to='/contactus' style={{textDecoration:'none', color:'white'}}><li>Contact us</li></Link>
            <Link to='/aboutus' style={{textDecoration:'none', color:'white'}}><li>About</li></Link>

        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icon-container'>
                <img src={facebook_logo} alt=''/>
            </div>
            <div className='footer-icon-container'>
                <img src={youtube_logo} alt=''/>
            </div>
            <div className='footer-icon-container'>
                <img src={linkedin_logo} alt=''/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Copyright 2023 : All Right Reserved</p>
        </div>
        
    </div>
  )
}

export default Footer