import React from 'react'
import IconFooter from "./IconFooter"
import ScrollBtns from "./ScrollBtns"
import "./MainSection.css"

export default function MainSection() {
  return (
    <section className= "descriptionBlock">
   <div className="description">
   <h1>Glebs Maklasins</h1>
   <h4>Junior Software Developer</h4>
    <h5>I am a junior full stack software developer soon to graduate from Northcoders bootcamp, I like building websites, apps, plugins, bots.</h5>
   </div>
   <footer>
     <IconFooter/>
    
   </footer>
   </section>
  )
}
