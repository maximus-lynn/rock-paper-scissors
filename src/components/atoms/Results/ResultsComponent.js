import React, { Component } from 'react';

import './Results.css';

class App extends Component {
  render() {
    return (
      <section className="results">
        <div>
          <h3 className="results__heading">Your Choice</h3>
          <img src={require(`../../../assets/${this.props.usersChoice.toLowerCase()}.png`)} alt="" className="results__image"/>
        </div>
          
        <div>
          <h3 className="results__heading">Computers Choice</h3>
          <img src={require(`../../../assets/${this.props.compsChoice.toLowerCase()}.png`)} alt="" className="results__image"/>
        </div>
      </section>
    );
  }
}

export default App;
