import React, { Component } from 'react'
import book from './img/book.png'
import certeficate from './img/certficat.png'
import man from'./img/man.png'
import ab from './img/ab.jpg'
import calendar from './img/calendar.png'
import suc from './img/suc.png'
import lap from  './img/lap.png'

import './About.css'
export class Ab extends Component {
  render() {
    return (
      <div>
      <div className='more'>
  <img src={ab}  alt=''/>
  
  <div className='contain'>

  <div className='mo'>
  <h6>LEARN ANYTHING</h6>
  <p>Benefits About Online Learning</p>
  </div>

  
  <div className='part1'>
  
  <img src={book}  alt=''/>
 
 <p><h5> Online Courses</h5>Far far away behind the word mountains , far from the countries Vokalia and Consonantiia , there live the blind texts.</p>
  </div>
  
<div className='part2'>
<img src={certeficate}  alt=''/>

<p><h5>Earn A Certificates</h5>Far far away behind the word mountains , far from the countries Vokalia and Consonantiia , there live the blind texts.</p>
</div>

<div className='part3'>
<img src={man}  alt=''/>

<p><h5>Learn with Expert</h5>Far far away behind the word mountains , far from the countries Vokalia and Consonantiia , there live the blind texts.</p>
</div>
</div>
</div>
<div className='margin'>
  <div>
<img src={suc}  alt=''/>
  <h2>3000</h2>
  <p>success stories</p>
  </div>
  <div>
  <img src={man}  alt=''/>
  <h2>250</h2>
  <p>Trusted Tutors</p>
  </div>

  <div>
  <img src={calendar}  alt=''/>
  <h2>1500</h2>
  <p>Schedules</p>
  </div>
  <div>
  <img src={lap}  alt=''/>
  <h2>320</h2>
  <p>Courses</p>
  </div>
</div>








</div>




      
    )
  }
}

export default Ab