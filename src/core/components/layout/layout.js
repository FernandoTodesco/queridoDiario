import React from 'react';
import './layout.scss';

import { AppProvider } from '../../../contexts/AppContext';

function Layout(props) {
  return (
    <div className="app">      
        <div className="app__container">
            <AppProvider>
                {props.children}
            </AppProvider>
       </div>
    </div>
  );
}

export default Layout;
