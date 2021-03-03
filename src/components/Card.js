import React from 'react';
import './Card.css'

const Card = (props) => {
    const {name, email, id} = props;
    return(
        <div className="card-container">
            <img className="move imgSize" src={`https://robohash.org/${id}`} alt="image"/>
            <div>
                <h2 className="name">{name}</h2>
                <p className="email">{email}</p>
            </div>
        </div>
    );
}

export default Card;