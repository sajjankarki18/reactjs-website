import React from 'react'
import iconfacebook from './images/iconfacebook.png'
import icongithub from './images/github.png'
import icontwitter from './images/icontwitter.png'
import iconinsta from './images/iconinsta.png'

export default function Contact(props) {
  return (
    <div id='contact' className="container" style={{marginTop: '200px', color: props.mode === 'dark'?'white':'black', border: props.color==='dark'?'gray':'black'}}>
       <h1 className='text-center'>Contact Me</h1>
       <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start mb-4">
                <h1 className="fw-bold lh-1 mb-3">Contact me Here</h1>
                <p className="col-lg-10 fs-4">
                 Thank you for visiting my portfolio! If you have any questions, inquiries, or opportunities you would like to discuss, please feel free to get in touch with me using the form or contact details below.
                </p>
                <div>
                  <a href="https://www.facebook.com/profile.php?id=100010436882553" style={{marginRight: '15px'}} target='_blank'><img style={{width: '40px'}} src={iconfacebook} alt="" /></a>
                  <a href="https://github.com/sajjankarki18" target='_blank' style={{marginRight: '15px'}}><img style={{width: '35px'}} src={icongithub} alt="" /></a>
                  <a href="https://twitter.com/karki_sajan008" target='_blank' style={{marginRight: '15px'}}><img style={{width: '40px'}} src={icontwitter} alt="" /></a>
                  <a href="https://www.instagram.com/_sajjankarki_/" target='_blank' style={{marginRight: '15px'}}><img style={{width: '40px'}} src={iconinsta} alt="" /></a>
                </div>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
                <form action='' method='POST' className="px-5 py-5 border rounded shadow-lg">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Write for us</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className='mt-5'>
                      <button type="button" className="btn btn-outline-success">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
