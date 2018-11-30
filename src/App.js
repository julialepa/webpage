import React, { Component } from 'react';
import './css/App.css';
import Home from './components/Home/Home'
import Contacts from './components/Contacts/Contacts'
import About from './components/About/About'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Contacts} />
        </div>
      </Router>

    );
  }
}

export default App;
