import React from 'react'
import {Link } from "@reach/router";
import "./Navigation.css"

export default function Navigation() {
  return (
       <nav className="nav">
        <Link to ="/aboutme">
          <p>about</p>
        </Link>
        <Link to ="/resume">
          <p>resume</p>
        </Link>
        <Link to="/projects">
          <p>projects</p>
        </Link>
        <Link to ="/contactme">
          <p>contact</p>
        </Link>
     </nav>
  )
}
