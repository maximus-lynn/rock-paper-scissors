import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Images
import rock from '../../../assets/rock.png';
import paper from '../../../assets/paper.png';
import scissors from '../../../assets/scissors.png';

import RadioButton from '../../../components/atoms/RadioButton/RadioButtonComponent';
import Header from '../../../components/atoms/Header/HeaderComponent';

class MakeYourChoice extends Component {
  constructor (props) {
      super(props)
      this.updateUrl = this.updateUrl.bind(this);
  }  

  updateUrl() {
    let choice = '/score?choice=' + document.querySelector('.radio__input:checked').value
    this.props.history.push(choice)
  }

  render() {
    return (
      <React.Fragment>
        <Header></Header>

        <form>
          <RadioButton image={rock}
                      title="Rock"
                      value="0">
          </RadioButton>

          <RadioButton image={paper}
                      title="Paper"
                      value="1">
          </RadioButton>

          <RadioButton image={scissors}
                      title="Scissors"
                      value="2">
          </RadioButton>
          
          <div>
            <button className="button button-margin-top"
                    onClick={this.updateUrl}>
              Start the round
            </button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default withRouter(MakeYourChoice);
