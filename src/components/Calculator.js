import React from 'react';
// eslint-disable-next-line
import CalculatorBtn from './CalculatorBtn';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calcObj: {},
    };
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleCalculate(calcObj) {
    this.setState({ calcObj: calculate(calcObj) });
  }


  render() {

    const { calcObj } = this.state;

    let screen = '0';
    if (Object.keys(calcObj).length === 0 || (calcObj.total && calcObj.next && calcObj.operator === null)) {
      screen = '0';
    } else {
      screen = calcObj.next != null ? calcObj.next : calcObj.total;
    }

    return (
      <div className="calc-body">
        <div className="calc-screen">
        {screen}
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
