import React from "react"
import starImg from "../assets/star.png"

export default function card(props) {

    let badge;
    if(props.openSpots == 0) {
        badge = "SOLD OUT"
    }
    else if(props.location === "Online") {
        badge = "ONLINE"
    }
    return (
        <div className="card-div" >
           {badge && <p className="sold-out">{badge}</p>} 
            <img className="card-img" src={props.coverImg}></img>
            <div className="info-sec">
                <div className="star-div">
                    <img src={starImg}></img>
                    <span id="rating">{props.stats.rating} </span>
                    <span className="grey-txt">({props.stats.reviewCount}) - </span>
                    <span className="grey-txt">{props.location}</span>
                </div>
                <p id="quote">{props.title}</p>
                <p><span id="dollar">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}

