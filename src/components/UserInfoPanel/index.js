import React from 'react';
import './styles.css';

const UserInfoPanel = ({ user }) => (
    <div className="card-container">
        <p>{user.email}</p>
        <p>{user.cc_number}</p>
        <p>{user.cc_type}</p>
        <div className="text-center pt-2">
            <h1>{user.cost}</h1>
            <h5>{user.currency}</h5>
        </div>
    </div>
);

export default UserInfoPanel;
