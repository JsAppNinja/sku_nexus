import React from 'react';
import UserItem from 'components/custom/UserItem';
import './styles.css';

const UserList = ({ users }) => {
    return (
        <div className="user-list">
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
