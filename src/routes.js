import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import WordCountPage from './components/WordCountPage/WordCountPage.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={WordCountPage} />
  </Route>
);
