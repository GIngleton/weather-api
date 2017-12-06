import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/home.js';


//importing React Router Libraries
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>

    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
    </Route>

  </Router>,

  document.getElementById('root'));
registerServiceWorker();
