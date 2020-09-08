import React from 'react';
import './styles.css';

const SearchBox = ({ placeholder, handleChange }) => (
    <div className="search-box">
        <input
            className="search"
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
        />
    </div>
);

export default SearchBox;
