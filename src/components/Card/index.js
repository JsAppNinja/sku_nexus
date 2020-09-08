import React from 'react';
import './styles.css';

const Card = (props) => (
    <div className="card-container">
        <h3>{props.user.first_name}</h3>
        <h3>{props.user.last_name}</h3>
        <p>{props.user.email}</p>
        <p>{props.user.cc_number}</p>
        <p>{props.user.cc_type}</p>
        <button>Details</button>
    </div>
);

export default Card;
