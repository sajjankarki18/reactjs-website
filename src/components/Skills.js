import React from 'react'
import './styles/skills.css'

export default function Skills(props) {
  return (
    <div id='skills' className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1 className='text-center mb-4'>Skills</h1>
      <div className="progressbar-div font-monospace rounded shadow px-5 py-5">
            <h5>Html</h5>
            <div className="progress mb-4" style={{height: '25px'}}>
              <div className="progress-bar bg-success animated" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
            <h5>Css</h5>
            <div className="progress mb-4" style={{height: '25px'}}>
              <div className="progress-bar bg-primary animated" role="progressbar" style={{width: '65%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">65%</div>
            </div>
            <h5>Javascript</h5>
            <div className="progress mb-4" style={{height: '25px'}}>
              <div className="progress-bar bg-warning animated" role="progressbar"style={{width: '50%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">55%</div>
            </div>
            <h5>React</h5>
            <div className="progress mb-4" style={{height: '25px'}}>
              <div className="progress-bar bg-info animated" role="progressbar" style={{width: '50%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
      </div>
    </div>
  )
}
