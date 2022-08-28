import React from 'react';

export default function Hero(){
    return (
        <div className="hero-component">
            <div className="hero-images">
            <img src='../images/p6.jpg' alt="hero" className="hero" />
            <img src='../images/p7.jpg' alt="hero" className="hero" />
            <img src='../images/p8.jpg' alt="hero" className="hero" />
            <img src='../images/p9.jpg' alt="hero" className="hero" />
            </div>
            <div className="info">
                <h1 className="hero-heading">Online Experiences</h1>
                <p classname="hero-description">
                    Join unique interactive activitiesle by one-of-a-kind hosts-all without leaving home.
                </p>
            </div>
        </div>
    )
}