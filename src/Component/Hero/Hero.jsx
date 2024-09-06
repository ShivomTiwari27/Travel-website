import React from 'react'
import './Hero.css';


function Hero(props) {
  return (
    <div className={props.cName}>
      <img src={props.img} alt="hero Image" />

      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.btnText}</a>
      </div>
    </div>
  )
}

export default Hero
