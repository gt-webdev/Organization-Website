import React from 'react';
import {render} from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Root from './components/root'
import Home from './pages/home'
import Events from './pages/events'
import Event from './pages/event'

// Used for client-side and server-side rendering
var router = (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="events" component={Events} />
      <Route path="events/:id" component={Event} />
    </Route>
  </Router>
);

// Attach handlers when page is opened in browser
if (typeof document !== "undefined") {
  document.addEventListener('DOMContentLoaded', function() {
    render(router, document.getElementById("root"));
  });
}

module.exports = router;