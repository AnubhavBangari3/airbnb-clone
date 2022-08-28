import React from 'react'

export default function Card(props){
    return (
        <div className="all-card">
            <div className="card">
            <img src={`../images/${props.img}`} className="peoples" alt="people"/>
            <div className="desc">
                <span>{props.place}</span>
                <p>Life lesson from {props.name} </p>
            <p><span className="st"><b>From ${props.price} /</b></span> per person</p>
            </div>
            
            
        </div>
        </div>
    )
}