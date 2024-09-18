import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>About Us</h3>
          <p>We are dedicated to providing the best subscription plans for your needs.</p>
        </div>
        <div className='footer-section'>
          <h3>Links</h3>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#features'>Features</a></li>
            <li><a href='#pricing'>Pricing</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>Contact Us</h3>
          <p>Email: info@myapp.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 Landing Page. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer