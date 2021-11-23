import React from 'react';
import CalculatorBtn from './CalculatorBtn.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-body">
        <div className="calc-screen">
          0
        </div>
        <div className="keyboard">
          <div className="key-digits">
            <CalculatorBtn text="AC" />
            <CalculatorBtn text="+/-" />
            <CalculatorBtn text="%" />
            <CalculatorBtn text="7" />
            <CalculatorBtn text="8" />
            <CalculatorBtn text="9" />
            <CalculatorBtn text="4" />
            <CalculatorBtn text="5" />
            <CalculatorBtn text="6" />
            <CalculatorBtn text="1" />
            <CalculatorBtn text="2" />
            <CalculatorBtn text="3" />
            <CalculatorBtn text="0" />
            <div className="key-dot">
              <CalculatorBtn text="." />
            </div>
          </div>
          <div className="operators">
            <CalculatorBtn text="÷" />
            <CalculatorBtn text="x" />
            <CalculatorBtn text="-" />
            <CalculatorBtn text="+" />
            <CalculatorBtn text="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
