import React from 'react'
import myImg from './Images/my-photo.jpg';
 function Hero() {
  return (
    <div className='Hero container-fluid'>
  <h1 className='text-hero'>About</h1> 
  <p className='text-hero'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, asperiores!</p>
  <div className='Hero-box'>
   <div>
    <img className='hero-img' src={myImg} alt={'log'} />
   </div>
   <div>
       <h1 data-aos="fade-up" className='hero-text1'>Samandar developer</h1>
       <p className='hero-text2'>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus tenetur neque enim voluptates voluptatum fugit molestias quasi quia, magnam quidem.
       </p>
       <ul className='hero-list'>
           <li>
               <h5 className='hero-textx'>Name:</h5>
               <h5 className='hero-textx'>Samandar developer</h5>
           </li>
           <li>
               <h5 className='hero-textx'> Birthday:</h5>
               <h5 className='hero-textx'>13 may 2002</h5>
           </li>
           <li>
               <h5 className='hero-textx'>Address:</h5>
               <h5 className='hero-textx'>Tashkent, Uzbekistan</h5>
           </li>
       </ul>
   </div>
  </div>
    </div>
  )
}

export default Hero;
