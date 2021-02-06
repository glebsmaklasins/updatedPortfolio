import React from 'react'
import {Link } from "@reach/router";
import "./ScrollBtns.css"

export default function ScrollBtns() {
  return (
    <div className="btnsBlock">
      <button><i className = "fa fa-arrow-right"  aria-hidden="true"></i></button>
      <button><i className = "fa fa-arrow-left"  aria-hidden="true"></i></button>
    </div>
  
  )
}
