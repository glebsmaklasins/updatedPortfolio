import React from 'react'
import {Link } from "@reach/router";
import "./Title.css"

export default function Title() {
  return (
    <div className="signatureBlock">
        <Link to="/">
          <img src="./imgProfile/asd.png" alt="signature" className="signature"/>
        </Link>
           </div>
  )
}
