import React from 'react'
import sajan2 from './images/sajan2.jpg'

export default function About(props) {
  return (
    <div id='about' className="container">
        <div className="px-4 py-5 my-5 text-center">
          <img className="d-block mx-auto mb-4 rounded-circle" src={sajan2} alt="" width="150" height="150"/>
          <h1 className="display-5 fw-bold fs-1 font-monospace" style={{color: props.mode === 'dark'?'white':'black'}}>About Me</h1>
          <div className="col-lg-6 mx-auto" style={{color: props.mode === 'dark'?'white':'black'}}>
            <p className="lead mb-4 text-xl-start fw-normal fs-5 font-monospace">
              Hi, my name is Sajan karki, passionate web developer who enjoys building interactive and user friendly websites. With a keen eye for desiegn and a love for 
              problem -solving, I strive to create memorable online experiences through my work. I have good experience working in FrontEnd like Html, css , javascript and reactjs.
              
            </p>
            <p className="lead mb-4 text-xl-start fw-normal fs-5 font-monospace">
               Feel free to explore and get in touch with me if you have any inquiries or collaboration opportunities. Lets bring your ideas to together.
            </p>
          </div>
        </div>
    </div>
  )
}
