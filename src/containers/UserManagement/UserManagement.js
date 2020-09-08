import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import CardList from 'components/CardList';
import SearchBox from 'components/SearchBox';

const UserManagement = (props) => {
    const [users, setUserList] = useState(props.usersList);
    const [searchField, setSearchField] = useState('');

    const handleChange = (e) => {
        setSearchField(e.target.value);
    };

    return (
        <div className="user-management">
            <h1>Users List</h1>
            <SearchBox placeholder="search users" handleChange={handleChange} />
            <CardList users={users} />
        </div>
    );
};

UserManagement.propTypes = {
    usersList: PropTypes.object.isRequired,
    getSearchResult: PropTypes.func.isRequired,
};

export default UserManagement;
