import React from 'react'
import sajan from './images/sajan.jpg'

export default function Header(props) {
  return (
    <div id='header' className="container" style={{marginTop: '50px', marginBottom: '50px'}}>
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img style={{marginLeft: '30px'}} src={sajan} className="text-center shadow-lg d-block mx-sm-auto img-fluid rounded" alt="Bootstrap Themes" width="450" height="450" loading="lazy"/>
                </div>
                <div className="col-lg-6" style={{color: props.mode === 'dark'?'white':'black'}}>
                    <h4 className="display-5 fw-norma lh-sm mb-3">Hi, My name is <span style={{color: 'red'}}>Sajan Karki</span></h4>
                    <h1 className="lead fs-2">I am a Front End developer</h1>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-outline-danger px-4 mt-4">Contact Me</button>
                    <button type="button" className="btn btn-outline-secondary px-4 mt-4">Blogs</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
