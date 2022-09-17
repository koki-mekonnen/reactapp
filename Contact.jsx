import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <div>
      <div className="contactus">
      <div className="cour">
    <p className='ab'>Home/Contact</p>
        <h1 className='abus'>Contact Us</h1>
     </div>
     <div className="contents">
     <div className="cus">
      <h3>Contact Us</h3>
      <p>Loremid dolores nostrum quia maxime quis eius eaque facere dsed!</p>
     </div>
     <div className="address">
      <div>
      <h3>Address</h3>
      <span>ADDIS ABABA ETHIOPIA</span>
      </div>
      <div>
     <h3>Emaill</h3>
      <p>bright@gmail.com</p>
      </div>
      <div>
      <h3>Phone</h3>
      <p>+2519456780</p>
      </div>
      
      </div>
      <div className="form">
        <form>
        <input type="text" placeholder="Name"  />
      <input type="email" placeholder="Email" className='email' />
      <textarea cols="30" rows="10">Create a message here</textarea>
      <button className='btn'>SEND MESSAGE</button>
      </form></div>
      <div className="follow">
      <h3>Follow us here</h3>
      <span>FACEBOOK   INSTAGRAM   YOUTUBE</span>
      </div>
      </div>
    </div></div>
  )
}

export default Contact