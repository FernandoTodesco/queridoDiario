import React, { createContext, useEffect, useState } from 'react';

import newsData from '../services/newsData';

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState('');

    
    useEffect(()=> {
        loadData();        
    }, [news])

    const loadData = async () => await setNews(newsData());
    
    return (
        <AppContext.Provider value={{newsState: [news, setNews], searchState: [search, setSearch]}}>
            {props.children}
        </AppContext.Provider>
    )
}
