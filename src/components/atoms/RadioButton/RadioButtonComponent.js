import React, { Component } from 'react';

import './radioButton.css';


class RadioButton extends Component {

    // Start the game
    // Shows a button to for the user to see who won.
    displayStartButton() {
        document.querySelector('.button').classList.add('active')
    }

    render() {
        return (
            <label className="radio">
                <input type="radio" 
                       name="radio" 
                       value={this.props.value} 
                       className="radio-input"
                       onClick={this.displayStartButton} />
                <span className="radio-image">
                    <img src={this.props.image} alt={this.props.title} />
                </span>            
            </label>
        );
    }
}

export default RadioButton;
