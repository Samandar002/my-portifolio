import React from 'react'
import Navbar from './Navbar';
import './Images/antonio-janeski-KpIpjje1Mxk-unsplash.jpg';

 function Header() {
  return (
    <div className='header'>
        <div className='header-box'>
        <Navbar />
     <div className='header-wrapp'>
     <h5  className='text'>Welcome to my website</h5>
  <h2  className='text'>My name is Samandar</h2>
  <button type='submit' className=' btn-warning'>Help me!</button>
     </div>
        </div>
  
    </div>
  )
}

export default Header
