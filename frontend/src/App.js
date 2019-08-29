import React, { Component } from 'react';
import NUMERAL_VALUES from './romanNumeralTable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { inputField: '', result: '' };
  }

  updateField = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  checkString = romanString => {
    const numeralCount = {};
    let romanNumerals = Object.keys(NUMERAL_VALUES);
    let string = romanString.toUpperCase();
    for (let char of string) {
      if (romanNumerals.indexOf(char) < 0) {
        return false;
      } else {
        if (!numeralCount[char]) {
          numeralCount[char] = 1;
        } else {
          numeralCount[char] += 1;
        }
      }
    }

    if (
      numeralCount.I > 3 ||
      numeralCount.X > 3 ||
      numeralCount.C > 3 ||
      numeralCount.M > 3
    ) {
      return false;
    } else {
      return true;
    }
  };

  convertString = romanString => {
    const string = romanString.toUpperCase();
    const numeralArray = string.split('');
    const isValidString = this.checkString(romanString);
    if (!isValidString) {
      this.setState({
        result: 'Not a valid roman numeral string',
      });
    } else {
      let result = 0;
      for (let i = 0; i < numeralArray.length; i++) {
        let current = numeralArray[i];
        let next = numeralArray[i + 1];
        if (NUMERAL_VALUES[current] < NUMERAL_VALUES[next]) {
          result += NUMERAL_VALUES[next] - NUMERAL_VALUES[current];
          i += 1;
        } else {
          result += NUMERAL_VALUES[current];
        }
      }
      this.setState({ result });
    }
  };

  render() {
    const result = this.state.result;
    return (
      <div class='main'>
        <h1>Roman Numeral Converter</h1>
        <input
          name='inputField'
          type='text'
          onChange={event => this.updateField(event)}
        />
        <button onClick={() => this.convertString(String(this.state.inputField))}>
          Convert
        </button>
        <div id='result'>{result}</div>
      </div>
    );
  }
}

export default App;
