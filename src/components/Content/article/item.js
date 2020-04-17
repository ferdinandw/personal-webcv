import React, { Component } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
const Item = (props) => {
    const {_id, destinationName, address, city,images} = props.data
    const {url, path} = useRouteMatch();
        return (
            <div className="card">
                <img src={`http://35.240.201.155:3000/${images}`}/>
                <p>
                {destinationName} 
                </p>
                <p>
                {address}
                </p>
                <p>
                {city}
                </p>
                <Link className="btn btn-primary" to={`${url}/${_id}`}>Read More</Link>
            </div>
        )
}

export default Item;
