import React, { useState } from 'react'
import "./Navbar.css"

function myfun(){
  var div=document.getElementsByClassName('menu')
  div.classList.toggle('menu')

}



const Navbar = () => {

 return (
    <div  >

   <nav   className='header'>
    <ul className='menu'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/allcourses">All Courses</a></li>
        <li><a href="/team">Team</a></li>
        <li><a href="/contact">Contact</a></li>
       
    </ul>
    <div className="start">
      <div className='button'>GET CERTIFICATE</div>
    </div>
    <button  onclick={myfun} className='bar'> <i class="bi bi-list"></i></button>

   </nav>



    </div>
  )
}

export default Navbar