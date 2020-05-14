import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './landing/main/main';
import Article from './landing/article/article';
import Search from '../components/search/search';

function Pages() {    
  return (    
    <Switch>
      <Route path='/' exact component={Main}/>
      <Route path='/article/:id' component={Article} />
      <Route path='/search' component={Search} />
    </Switch>
  );
}

export default Pages;
