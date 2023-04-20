import React,{useState} from 'react';
import './Navbar.css';
import Logo from '../assets/images/logo.png'
import Search from '../assets/images/search.png'
import Person from '../assets/images/person.png'
import Account from '../assets/images/account.png'
import Box from '../assets/images/box.png'

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div className='nav'>
      <button className='box' onClick={handleShowNavbar}>
      <img src={Box}  />
      </button>
      <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul className='nav_links'>
            <li>New Drops 🔥</li>
            <li>Men</li>
            <li>Women</li>
        </ul> 
        </div>
        <div className='nav_logo'>
            <img src={Logo}/>
        </div> 
        <div className='nav_options'>
            <img src={Search} className='search'/>
            <img src={Person}/>
            <img src={Account}/>
        </div> 
    </div>
  )
}

export default Navbar
