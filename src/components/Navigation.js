import React from 'react'
import {Link } from "@reach/router";

export default function Navigation() {
  return (
       <>
        <Link to ="/aboutme">
          <p>about me</p>
        </Link>
        <Link to ="/resume">
          <p>resume</p>
        </Link>
        <Link to="/projects">
          <p>projects</p>
        </Link>
        <Link to ="/contactme">
          <p>contact me</p>
        </Link>
     </>
  )
}
