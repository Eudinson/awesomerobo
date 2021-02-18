import React from 'react';
import './Card.css';

const SearchBox = ({ searchChange }) => {
    return (
        <input className="input" type="search" placeholder="search robot" onChange={searchChange}/>
    );
}

export default SearchBox;