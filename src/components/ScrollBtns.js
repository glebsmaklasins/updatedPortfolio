import React from 'react'
import {Link } from "@reach/router";

export default function ScrollBtns() {
  return (
    <div className="socialLinks">
    <a href="https://www.linkedin.com/in/glebs-maklasins/">
        <i className = "fa fa-linkedin-square"  aria-hidden="true"></i>
    </a>
    <a href="https://github.com/glebsmaklasins">
        <i className = "fa fa-github-square"  aria-hidden="true"></i>
    </a>
    <a href="https://www.linkedin.com/in/glebs-maklasins/">
        <i className = "fa fa-instagram"  aria-hidden="true"></i>
    </a>
     <Link to="/contactme">
       <i className = "fa fa-envelope-square"  aria-hidden="true"></i>
    </Link>
 
   
    </div>
  )
}
