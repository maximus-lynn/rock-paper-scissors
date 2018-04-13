import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Results from '../../../components/atoms/Results/ResultsComponent';

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
        result:'Looks like a tie'
    }
    this.options = ['rock', 'paper', 'scissors']
    this.compsChoice;
    this.usersChoice;
  }

  componentWillMount() {
    this.calculateComputerScore()
  }

  calculateComputerScore() {
    // Fetch users choice from query string
    let urlParams = new URLSearchParams(window.location.search);
    // Creates random number between 0 - 2
    this.compsChoice = Math.floor(Math.random() * 3)
    this.usersChoice = urlParams.get('choice')

    // Calculate the winner
    let winner = (3 + this.usersChoice - this.compsChoice) % 3;

    // Set the state message for the user to see
    if (winner === 1) {
      this.setState({result: 'Wooo you won!'})
    }

    if (winner === 2) {
      this.setState({result: 'Ah no, you lost'})
    }
  }

  render() {
    return (
      <section>
        <Results compsChoice={this.options[this.compsChoice]}
                 usersChoice={this.options[this.usersChoice]}>
        </Results>

        <h1 className="heading">{this.state.result}</h1>
        
        <div>
          <NavLink to="/"
                   className="button">
            Play again
          </NavLink>
        </div>
      </section>
    );
  }
}

export default Score;
