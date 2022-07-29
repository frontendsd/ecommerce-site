import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, ducimus dolorum nemo repudiandae officia deleniti pariatur debitis provident asperiores rerum! Ratione, dolorum deserunt! Minus dicta quidem qui iste sed amet deserunt quae cum ut sunt ipsa ducimus laborum hic harum, nulla maiores! Odio repellat ad necessitatibus aliquam laboriosam voluptate doloremque perspiciatis et impedit excepturi alias est animi possimus sit quibusdam ut veritatis, iusto nemo, adipisci recusandae modi vel rem vitae quasi. Doloribus vero corrupti totam ducimus rerum molestiae quis numquam ipsum nobis quae at voluptatibus incidunt facere, et atque temporibus eveniet exercitationem assumenda ab nesciunt, ratione optio. Dolorem, expedita dolore.</p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px"/>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default About