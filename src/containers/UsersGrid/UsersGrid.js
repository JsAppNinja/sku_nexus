import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/actions';
import UserList from 'components/UserList';
import SearchBox from 'components/SearchBox';

import './styles.css';

const UsersGrid = () => {
    const [mount, setMount] = useState(false);
    const users = useSelector((state) => state.global.userList);
    const dispatch = useDispatch();

    const fetchUsers = () => {
        dispatch(actions.getAllUsers());
    };

    const searchUsers = (e) => {
        const ccNumber = e.target.value;

        if (ccNumber === '') {
            dispatch(actions.getAllUsers());
        } else {
            dispatch(actions.searchUser(ccNumber));
        }
    };

    useEffect(() => {
        if (!mount) {
            setMount(true);
            fetchUsers();
        }
        console.log(users);
    }, [fetchUsers]);

    return (
        <div className="user-management">
            <SearchBox placeholder="search users" handleChange={searchUsers} />
            {users && <UserList users={users} />}
        </div>
    );
};

export default UsersGrid;
