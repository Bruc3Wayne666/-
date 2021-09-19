import React, {useEffect} from 'react';
import "./city.css"
import {Link} from "react-router-dom";

const City = props => {

    return (
        <div>
            <div className="card">
                <a href={props.city.pageLink}>
                    <h1>{props.city.ru.name}</h1>
                    <img className='img' src={props.city.img} alt=""/>
                </a>
                <span className='desc'>
                    {props.city.ru.desc.text.slice(0, 840)}...
                </span>
            </div>
        </div>
    );
};

export default City;