import React from 'react'
import Ab from  './Ab'
import "./Home.css"
import "./About.css"
import Footer from './Footer';
const Home = () => {
  return (
    <div className='hero'>
    <div className='main' >
      <p className='title1'>WELCOME TO BRIGHT</p>
      <p className='subtitle'>Best Online Education</p>
    </div>
<div className='row'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Excepturi corporis tempore perferendis rerum ea quas magni ipsum
           esse hic atque sunt repudiandae quisquam est cumque libero voluptas cum, dolor voluptate.</p>
    </div>
  
    <div className='button'>

<button type="button" className='btn' id="btn1"> <a href="/">GET STARTED NOW</a><i class="bi bi-arrow-right"></i></button>


<button type="button" className='btn'><a href="/allcourses">VIEW COURSE</a><i class="bi bi-arrow-right"></i></button>
    
</div>
<Ab />
<Footer />
</div>












  )
}

export default Home