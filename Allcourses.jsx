import React, { Component } from 'react'
import './Allcourses.css'
import lap from  './img/lap.png'
import html from  './img/html.png'
import opr from  './img/op.jpg'
import Testimonial from "./Testimonial"



export class Allcourses extends Component {
  render() {
    return (
      <div  className="course">
    <div className="cour">
    <p className='ab'>Home/Course</p>
        <h1 className='abus'>Explore Courses</h1>

    </div>
    <div className="maintitle">
    <h2 >COURSES</h2>
    <p >BROWSE OUR ONLINE COURSES</p>
    </div>
       <div className="coursename">
        <div  className='cour1'>
        <img src={lap} alt=''/>
         <h2>Introduction to Software Engineering</h2>
         <div className="rate">
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         </div>
        <p>50 lectures (190 hrs)</p>
         <p>$100 All Course / $15 per month</p>

         <button type="button" className='btn'>ENROLL NOW</button>
        
       </div>
       
       <div    className='cour2'>
       <img src={opr} alt=''/>
         <h2>Introduction to Operating System</h2>
         <div className="rate">
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         </div>
         <p>50 lectures (190 hrs)</p>
         <p>$120 All Course / $15 per month</p>
         <button type="button" className='btn'>ENROLL NOW</button>
       </div>

       <div  className='cour3'>
       <img src={html} alt=''/>
         <h2>Introduction to Web Development</h2>
        <div className="rate">
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         </div>
         <p>50 lectures (190 hrs)</p>
         <p>$125 All Course / $15 per month</p>
         <button type="button" className='btn'>ENROLL NOW</button>
       </div>

       </div>
       <h2 className='title'>COURSES</h2>

         <div className="allcourse">
          <div className='half'>
          <div className='list'>
            <p>My Sql</p>
            <div className="rate">
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         </div>
         <p>50 lectures (190 hrs)</p>
         <p>$125 All Course / $15 per month</p>
         <button type="button" className='btn'>ENROLL NOW</button>
          </div>


          <div className='list'>
            <p>Javascript</p>
            <div className="rate">
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         </div>
         <p>50 lectures (190 hrs)</p>
         <p>$125 All Course / $15 per month</p>
         <button type="button" className='btn'>ENROLL NOW</button>
          </div>


          <div className='list'>
            <p>C++</p>
            <div className="rate">
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         </div>
         <p>50 lectures (190 hrs)</p>
         <p>$125 All Course / $15 per month</p>
         <button type="button" className='btn'>ENROLL NOW</button>
          </div>

          </div>
          <div className="half2">
          <div className='list'>
            <p>Music</p>
            <div className="rate">
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         </div>
         <p>50 lectures (190 hrs)</p>
         <p>$125 All Course / $15 per month</p>
         <button type="button" className='btn'>ENROLL NOW</button>
          </div>
          




          <div className='list'>
            <p>Design</p>
            <div className="rate">
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         </div>
         <p>50 lectures (190 hrs)</p>
         <p>$125 All Course / $15 per month</p>
         <button type="button" className='btn'>ENROLL NOW</button>
          </div>

          <div className='list'>
            <p>Art</p>
            <div className="rate">
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         </div>
         <p>50 lectures (190 hrs)</p>
         <p>$125 All Course / $15 per month</p>
         <button type="button" className='btn'>ENROLL NOW</button>
          </div>
         </div>
         </div>
       <Testimonial />


      </div>
    )
  }
}

export default Allcourses