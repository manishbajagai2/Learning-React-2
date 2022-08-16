import React from "react";

export default function Cards(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "USA") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--topText">{badgeText}</div>}
      <img
        src={process.env.PUBLIC_URL + `/images/${props.item.coverImg}`}
        alt="card"
        className="card--pic"
      />
      <div className="stat">
        <img src={ process.env.PUBLIC_URL + "/images/star.png"} alt="rating" className="star" />
        <p>
          {props.item.stats.rating}
          <span className="gray">({props.item.stats.reviewCount}) • </span>
        </p>
        <p className="gray">{props.item.location}</p>
      </div>
      <div className="wordings">
        <p>{props.item.title} </p>
        <p>
          <span className="bold">From ${props.item.price}</span> / person{" "}
        </p>
      </div>
    </div>
  );
}
