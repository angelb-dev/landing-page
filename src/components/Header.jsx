import React from 'react'
import '../css/Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <a href='#' className='logo'>Landing Page</a>
        <nav className='main-nav'>
          <ul className='nav-list'>
            <li><a href='#' className='nav-link'>Features</a></li>
            <li><a href='#' className='nav-link'>Pricing</a></li>
            <li><a href='#' className='nav-link'>About</a></li>
            <li><a href='#' className='nav-link'>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header