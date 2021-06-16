import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'
import SignIn from './Signin';
import User from './Main';
import ToDo from './ToDo';

ReactDOM.render(
  <Router>
    <div>
      <Route  exact path="/" component={SignIn}/>
      <Route  path="/about" >
      <User/>
      </Route>
    </div>
    <div>
      <Route>
        <ToDo/>
      </Route>
    </div>
  </Router>,
  document.getElementById('root'));
  reportWebVitals();
