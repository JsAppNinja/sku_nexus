import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const UserItem = (props) => {
    const history = useHistory();
    const onDetailClick = () => {
        history.push(`/user/${props.user.cc_number}`);
    };
    return (
        <div className="card-container">
            <section>
                <h3>{props.user.first_name}</h3>
                <h3>{props.user.last_name}</h3>
            </section>
            <section>
                <p>{props.user.email}</p>
            </section>
            <section>
                <p>{props.user.cc_number}</p>
                <p>{props.user.cc_type}</p>
            </section>
            <button onClick={onDetailClick}>
                {/* <a
                    href={`/user/${props.user.cc_number}`}
                    className="d-block w-100 text-uppercase"
                > */}
                Details
                {/* </a> */}
            </button>
        </div>
    );
};

export default UserItem;
