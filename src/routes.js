import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import WordCount from './components/WordCount/WordCount.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={WordCount} />
  </Route>
);
