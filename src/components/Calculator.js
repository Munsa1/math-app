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
          <CalculatorBtn text="AC" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="+/-" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="%" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="7" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="8" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="9" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="4" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="5" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="6" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="1" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="2" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="3" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="0" onClick={this.handleCalculate} mathObj={calcObj} />
            <div className="key-dot">
            <CalculatorBtn text="." onClick={this.handleCalculate} mathObj={calcObj} />
            </div>
          </div>
          <div className="operators">
          <CalculatorBtn text="÷" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="x" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="-" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="+" onClick={this.handleCalculate} mathObj={calcObj} />
          <CalculatorBtn text="=" onClick={this.handleCalculate} mathObj={calcObj} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
