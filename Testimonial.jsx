import React from 'react'
import { online, test } from './Data'
import './test.css'
import team3 from "./img/team3.jpg"
import team4 from "./img/team4.jpg"
import team6 from "./img/team6.jpg"
const Testimonial = () => {
  return (
 <div>
    <div className="maintitle">
        <h2>TESTIMONAL</h2>
        <p>Our Successful Students</p>
        </div>
        <div className="testimoniys">
        <div className="test1">
              <div className="te1">
              <img src={team3} alt=" " />
              <i class="bi bi-quote"></i>
              <h3>Tom Hardin</h3>
              </div>
              <p>The secret of getting ahead is getting started. 
                The secret of getting started is breaking your complex overwhelming tasks into small manageable tasks,
                 and then starting on the first one.</p>

           </div>
           <div className="test1">
              <div className="te2">
              <img src={team4} alt=" " />
              <i class="bi bi-quote"></i>
              <h3>Sara Jhon</h3>
              </div>
              <p>The secret of getting ahead is getting started. 
                The secret of getting started is breaking your complex overwhelming tasks into small manageable tasks,
                 and then starting on the first one.</p>

           </div>
           <div className="test1">
              <div className="te3">
              <img src={team6} alt=" " />
              <i class="bi bi-quote"></i>
              <h3>Maya Smith</h3>
              </div>
              <p>The secret of getting ahead is getting started. 
                The secret of getting started is breaking your complex overwhelming tasks into small manageable tasks,
                 and then starting on the first one.</p>

           </div>
           </div>
           </div>
            )}

export default Testimonial