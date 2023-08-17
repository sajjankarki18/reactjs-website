import React from 'react'
import nightmode from './images/nightmode.png'

export default function Navbar(props) {
  return (
    <nav style={{position: 'fixed', top: '0', left: '0', right: '0'}}
     className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">MyPortfolio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#home">{props.home}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">{props.about}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">{props.skills}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact" tabindex="-1" aria-disabled="true">{props.contact}</a>
                  </li>
              </ul>
            </div>
            <div className="dropdown" style={{marginRight: '10px'}}>
              <button style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black'}} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={nightmode} style={{height: '24px'}} alt="" />
              </button>
              <ul style={{cursor: 'pointer'}} className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li onClick={props.handleDarkmode} className='dropdown-item'>Dark</li>
                <li onClick={props.handleLightmode} className='dropdown-item'>Light</li>
              </ul>
            </div>
        </div>
    </nav>
  )
}
