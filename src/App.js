import React, { Component } from 'react';
import './App.css';

// Images
import rock from './assets/rock.png';
import paper from './assets/paper.png';
import scissors from './assets/scissors.png';

import RadioButton from './components/atoms/RadioButton/RadioButtonComponent';

class App extends Component {
  render() {
    return (
      <section>
        <header className="header">
          <h1 className="heading">Welcome to Rock, Paper, Scissors.</h1>
          <p className="paragraph">Select your weapon:</p>
        </header>

        <form>
          <RadioButton image={rock}
                       title="Rock">
          </RadioButton>

          <RadioButton image={paper}
                       title="Paper">
          </RadioButton>

          <RadioButton image={scissors}
                       title="Scissors">
          </RadioButton> 

          <button type="submit"
                  className="button">
            Start the round
          </button>
        </form>
      </section>
    );
  }
}

export default App;
