import React from 'react';
import { Link } from 'react-router-dom';

 function Navbar() {
  return (
    <div className='navbar  container-fluid'> 
     <nav >
    <div className="nav-wrapper grey  darken-4">
      <Link to='sdfas' className="brand-logo">bren</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="sass.html">Sass</Link></li>
        <li><Link to="badges.html">Components</Link></li>
        <li><Link to="collapsible.html">JavaScript</Link></li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
