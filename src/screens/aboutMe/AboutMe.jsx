import React from 'react'
import './aboutMe.css'
import dooley from "../../images/dooley.png"

function AboutMe() {
  return (
    <div className='about__container' id="about-me">
        <div>
            <img src={dooley} alt="dooley pic" />
        </div>
        <div className='about__text'>
            <h1>About Me</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
        </div>
    </div>
  )
}

export default AboutMe