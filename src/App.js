import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Thisweek from './components/Thisweek';
import Popular from './components/Popular';
import Mylist from './components/Mylist';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <ul>
              <li><Link to="/">This week</Link></li>
              <li><Link to="/popular/">popular</Link></li>
              <li><Link to="/mylist/">my list</Link></li>
            </ul>
            <Route path="/" exact component={Thisweek} />
            <Route path="/popular" component={Popular} />
            <Route path="/mylist" component={Mylist} />
        </div>
      </Router>
    );
  }
}

export default App;
