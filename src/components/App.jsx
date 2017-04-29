import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
    Home,
    UserList
} from 'components';

let App = store => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>

                <hr/>

                <Route exact path="/" component={ Home }/>
                <Route path="/users" component={ UserList }/>
            </div>
        </Router>
    );
}

export default App;

