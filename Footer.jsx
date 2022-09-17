import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div>
       <div className="footer">
        <div className="news">
            <div>
            <h3>Newsletter Stay tune and get the latest updates</h3>
            <span> information is power</span>
            </div>
        <div >
         <form >
        <input type="email" placeholder="Email" className="input"  />
        
        </form>
        </div>
        </div>
        <div className="foo">
        <div className='logo'>
      <h4>BRIGHT</h4>
      <span >Best Online Education</span>
      <p> totam explicabo quis consequuntur quasi 
         commodi sint ex consectetur placeat, illo possimus aliquid quod.
         Iure eveniet dolores deserunt asperiores aperiam quidem. </p>
         
         <div className="ico">
         <div  className='ico'><i className="bi bi-facebook "></i></div>
      <div className='ico'> <i className="bi bi-instagram"></i></div>
      <div   className='ico'><i className="bi bi-twitter"></i></div>
      </div></div>
        <div className="links">
            <h3>Explore</h3>
            <ul>
                <li><i class="bi bi-arrow-right"></i>About us</li>
                <li><i class="bi bi-arrow-right"></i>Contact us</li>
                <li><i class="bi bi-arrow-right"></i>Courses</li>
                <li><i class="bi bi-arrow-right"></i>Teams</li>
            </ul>
        </div>
        <div className="qlinks">
            <h3>Quick Links</h3>
            <ul>
                <li><i class="bi bi-arrow-right"></i>About us</li>
                <li><i class="bi bi-arrow-right"></i>Contact us</li>
                <li><i class="bi bi-arrow-right"></i>Courses</li>
                <li><i class="bi bi-arrow-right"></i>Teams</li>
            </ul>
        </div>
        <div className="question">
            <h3>Have a Question</h3>
            <div className="">
            
          <p><i class="bi bi-map"></i> Bole Addis Ababa ETHIOPIA</p>
         </div>
         <div className="">
            <p><i class="bi bi-telephone-outbound"></i> +251945654050</p>
         </div>
         <div className=""> 
         <p> <i class="bi bi-telegram"></i>bright@gmail.com</p>
         </div>
        </div>
        </div>
       </div>

    </div>
  )
}

export default Footer