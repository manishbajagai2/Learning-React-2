import React from 'react'

export default function Cards(props) {
  return (
    <div className="card">
        <div className="card--topText" >SOLD OUT</div>
        <img src={`/images/${props.img}`} alt='card image' className="card--pic" />
        <div className="stat">
            <img src="/images/star.png" alt='rating' className="star" />
            <p> {props.rating} <span className="gray" >({props.reviews}) • </span></p>
            <p className="gray" >{props.country}</p>
        </div>
        <div className="wordings">
            <p>{props.text} </p>
            <p><span className="bold" >From ${props.price}</span> / person </p>
        </div>
    </div>
  )
}
