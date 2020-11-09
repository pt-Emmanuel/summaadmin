import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/index.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={Sidebar} />
        </Router>
      </div>
    );
  }
}

export default App;
