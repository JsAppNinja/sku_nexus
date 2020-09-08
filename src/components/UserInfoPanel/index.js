import React from 'react';
import './styles.css';

const UserInfoPanel = (props) => (
    <div className="card-container">
        <p>{props.user.email}</p>
        <p>{props.user.cc_number}</p>
        <p>{props.user.cc_type}</p>
        <div className="text-center pt-2">
            <h1>{props.user.cost}</h1>
            <h5>{props.user.currency}</h5>
        </div>
    </div>
);

export default UserInfoPanel;
