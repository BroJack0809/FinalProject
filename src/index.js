import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'
import ToDo from './ToDo';
import SignIn from './Signin';

ReactDOM.render(
  <Router>
    <div>
      <Route  exact path="/" component={SignIn}/>
      <Route  path="/about" >
      <ToDo/>
      </Route>
    </div>
  </Router>,
  document.getElementById('root'));
  reportWebVitals();
