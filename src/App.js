import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

import MakeYourChoice from './components/pages/MakeYourChoice/MakeYourChoiceComponent';
import Score from './components/pages/Score/ScoreComponent';

class App extends Component {
  render() {
    return (
      <section>
        <Router>
          <main>
            <Route path="/" exact component={MakeYourChoice} />
            <Route path="/score" component={Score} />
          </main>
        </Router>
      </section>
    );
  }
}

export default App;
