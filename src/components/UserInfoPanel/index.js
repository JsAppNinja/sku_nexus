import React from 'react';
import './styles.css';

const UserInfoPanel = ({ user }) => (
    <div className="userinfo-container">
        <div className="userinfo-left">
            <p>{user.email}</p>
            <p>{user.cc_number}</p>
            <p>{user.cc_type}</p>
        </div>
        <div className="userinfo-right">
            <div className="text-center pt-2">
                <h1>{user.cost}</h1>
                <h5>{user.currency}</h5>
            </div>
        </div>
    </div>
);

export default UserInfoPanel;
