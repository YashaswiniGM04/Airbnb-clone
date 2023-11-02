import React from "react"
import head from "../assets/headPic.png"

export default function HeadBar() {
    return (
        <>
            <div className="head-div">
                <img className="head-img" src={head}></img>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
                
        
        </>
    )
}