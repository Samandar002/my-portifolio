import React from 'react'
import img1 from './Images/1rasm.png';

function Section() {
  return (
    <div className='section  container-fluid'>
<h1 className='section-text'>SERVICES</h1>
<p className='section-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, asperiores!</p>
    <ul className='section-list'>
      <li>
        <img src={img1}  alt={'logo'}  className='img'/>
        <h2>Lorem ipsum</h2>
        <p>
        </p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, aspernatur. Molestias mollitia itaque hic unde placeat, reprehenderit vitae aperiam amet.
     </li>
     <li>
        <img src={img1}  alt={'logo'}  className='img'/>
        <h2>Lorem ipsum</h2>
        <p>
        </p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, aspernatur. Molestias mollitia itaque hic unde placeat, reprehenderit vitae aperiam amet.
     </li>
     <li>
        <img src={img1}  alt={'logo'}  className='img'/>
        <h2>Lorem ipsum</h2>
        <p>
        </p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, aspernatur. Molestias mollitia itaque hic unde placeat, reprehenderit vitae aperiam amet.
     </li>
    </ul>
    </div>
  )
}

export default  Section;
