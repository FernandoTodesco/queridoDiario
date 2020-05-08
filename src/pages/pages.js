import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './landing/main/main';
import Article from './landing/article/article';

function Pages() {    
  return (    
    <Switch>
      <Route path='/' exact component={Main}/>
      <Route path='/article/:id' component={Article} />
    </Switch>
  );
}

export default Pages;
