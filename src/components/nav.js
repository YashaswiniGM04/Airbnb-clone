import React from "react"
import img from "../assets/airbnb.png"

export default function NavBar() {
    return (
        <div className="nav-div">
            <img className="img-logo" src={img}/>
        </div>
    )
}