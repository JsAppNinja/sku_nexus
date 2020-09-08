import React from 'react';
import Card from 'components/Card';
import './styles.css';

const CardList = ({ users }) => {
    return (
        <div className="card-list">
            {users.map((user) => (
                <Card key={user.id} user={user} />
            ))}
        </div>
    );
};

export default CardList;
