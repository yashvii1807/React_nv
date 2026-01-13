import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      previousValue: null,
      operation: null,
      waitingForOperand: false,
    };
  }

  handleNumberClick = (num) => {
    const { display, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        display: String(num),
        waitingForOperand: false,
      });
    } else {
      this.setState({
        display: display === "0" ? String(num) : display + num,
      });
    }
  };

  handleOperator = (op) => {
    const { display, previousValue, operation } = this.state;
    const input = parseFloat(display);

    if (previousValue == null) {
      this.setState({
        previousValue: input,
        operation: op,
        waitingForOperand: true,
      });
    } else if (operation) {
      const result = this.calculate(previousValue, input, operation);
      this.setState({
        display: String(result),
        previousValue: result,
        operation: op,
        waitingForOperand: true,
      });
    }
  };

  calculate = (a, b, op) => {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") return a / b;
    return b;
  };

  handleEquals = () => {
    const { display, previousValue, operation } = this.state;
    if (previousValue != null && operation) {
      const result = this.calculate(previousValue, parseFloat(display), operation);
      this.setState({
        display: String(result),
        previousValue: null,
        operation: null,
        waitingForOperand: true,
      });
    }
  };

  handleClear = () => {
    this.setState({
      display: "0",
      previousValue: null,
      operation: null,
      waitingForOperand: false,
    });
  };

  render() {
    return (
      <div className="calculator">
        <input type="text" value={this.state.display} readOnly />

        <div>
          <button onClick={this.handleClear}>AC</button>
          <button onClick={() => this.handleOperator("/")}>÷</button>
        </div>

        <div>
          <button onClick={() => this.handleNumberClick(7)}>7</button>
          <button onClick={() => this.handleNumberClick(8)}>8</button>
          <button onClick={() => this.handleNumberClick(9)}>9</button>
          <button onClick={() => this.handleOperator("*")}>×</button>
        </div>

        <div>
          <button onClick={() => this.handleNumberClick(4)}>4</button>
          <button onClick={() => this.handleNumberClick(5)}>5</button>
          <button onClick={() => this.handleNumberClick(6)}>6</button>
          <button onClick={() => this.handleOperator("-")}>−</button>
        </div>

        <div>
          <button onClick={() => this.handleNumberClick(1)}>1</button>
          <button onClick={() => this.handleNumberClick(2)}>2</button>
          <button onClick={() => this.handleNumberClick(3)}>3</button>
          <button onClick={() => this.handleOperator("+")}>+</button>
        </div>

        <div>
          <button onClick={() => this.handleNumberClick(0)}>0</button>
          <button onClick={this.handleEquals}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
