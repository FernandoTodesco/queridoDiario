import React, { useContext } from 'react';
import './search.scss';

import { AppContext } from '../../contexts/AppContext';

function Search() {

    const { searchState } = useContext(AppContext);
    const [ search, setSearch ] = searchState;

    const updateSearch = (event) => setSearch(event.target.value)

    return (
        <input className="searchBar"        
            type="text"
            value={ search }            
            onChange={ updateSearch }
            placeholder="Search something..."/>
    )
}

export default Search
