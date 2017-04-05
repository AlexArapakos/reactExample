import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from "react-router";

// ex: http://www.blog.com/posts/5 or http://www.blog.com/#posts/5
// browserHistory -> check for any changes in 'posts/5/'
// hushHistory -> check for any changes after '#'
// memoryHistory -> ?

import store from './store';
import routes from'./routes/index';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
