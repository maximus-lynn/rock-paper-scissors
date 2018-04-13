import React, { Component } from 'react';

import './Results.css';

class App extends Component {
  render() {
    return (
      <section className="results">
        <div>
          <h3 className="results-heading">Your Choice</h3>
          <img src={require(`../../../assets/${this.props.usersChoice.toLowerCase()}.png`)} alt="" className="results-image"/>
        </div>
          
        <div>
          <h3 className="results-heading">Computers Choice</h3>
          <img src={require(`../../../assets/${this.props.compsChoice.toLowerCase()}.png`)} alt="" className="results-image"/>
        </div>
      </section>
    );
  }
}

export default App;
