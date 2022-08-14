import React from 'react'
import bgImage from "../images/heroImg.png"

export default function HeroSection() {
  return (
    <section className="hero">
        <img src={bgImage} alt="background image" className="hero--logo"/>
        <h1 className="hero--title">Online Experiences</h1>
        <h5 className="hero--subtitle">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h5>
    </section>
  )
}
