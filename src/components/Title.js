import React from 'react'
import {Link } from "@reach/router";


export default function Title() {
  return (
    <div className="pictureBlock">
        <Link to="/">
          <img src="./imgProfile/asd.png" alt="signature" className="signature"/>
        </Link>
        <div className="mainPic">
        <img src="./imgProfile/test_profile.jpg" alt="test" className="mainPic"/>
        </div>
    </div>
  )
}
