import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'
import { Link } from 'react-router-dom'

const handleClick =() => {
  window.scrollTo(0,0);
}
function Footer() {
  
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="" />
              </div>
              <h2>EduMate</h2>
            </div>
            <p>Embrace the future of innovation and technology with our cutting-edge tech business solution</p>
          </div>
          <div className="footer-box">
            <h4 className='footer_title'>Company</h4>
            <ul className='footer_links'>
              <li>
              <Link to='/courses' onClick={handleClick}>Our Program</Link>
              </li>
              <li>
              <Link to='/services' onClick={handleClick}>Our Plan</Link>
              </li>
              <li>
              <Link to='/member' onClick={handleClick}>Become a Member</Link>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h4 className='footer_title'>Quick Links</h4>
            <ul className='footer_links'>
              <li>
                <Link to='/about' onClick={handleClick}>About Us</Link>
              </li>
              <li>
                <Link to='/contact' onClick={handleClick}>Contact Us</Link>
              </li>
              <li>
                <Link to='/support' onClick={handleClick}>Support Us</Link>
              </li>
          
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
