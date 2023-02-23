import React from "react";
import './Restaurant.css';

const Restaurant = (props) => {
    return (
        <div className="Restaurant">
            <img src={props.image} alt="Picture of a restaurant" />
            <div className="info">
                <h1><u>{props.name}</u></h1>
                <h2>Food: {props.food}</h2>
                <h4>{props.number}</h4>
                <h4>{props.address}</h4>
            </div>
            <a href={props.link}>Website</a>
        </div>
    );
};

export default Restaurant;