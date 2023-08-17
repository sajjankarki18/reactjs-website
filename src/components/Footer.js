import React from 'react'

export default function Footer(props) {
  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <div className="py-4 my-4 border-top">
            <p style={{textAlign: "center", fontFamily: "monospace"}}>
            © 2023 Sajan Karki, Inc. All rights reserved.
            </p>
        </div>
    </div>
  )
}
