import React from 'react';
import './layout.scss';

function Layout(props) {
  return (
    <div className="app">      
        <div className="app__container">
            {props.children}
       </div>
    </div>
  );
}

export default Layout;
