// create a class based component named calculator
// it will take input from user inform of buttons
// prepare a button grid as per windows calculator
//layout and implement evaluation logic to show result on screen
// 4-> operator 1 , operator 2 , operation, result
// implement basic operations + - * / 

import React, { Component } from 'react';

class Calculator extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            displayValue: '',
        };
    }

    handleButtonClick = (value) => {
        this.setState((prevState) => ({
            displayValue: prevState.displayValue + value,
        }));
    }
    
    handleClear = () => {
        this.setState({ displayValue: '' });
    }

    handleEqual = () => {
        try {
            const result = eval(this.state.displayValue);
            this.setState({ displayValue: result });
        } catch (error) {
            this.setState({ displayValue: 'Error' });
        }
    }
    render() {
        const buttons = [
            '7', '8', '9', '/',
            '4', '5', '6', '*',
            '1', '2', '3', '-',
            '0', '.', '=', '+',
        ];

        return (
            <div className="calculator">
                <input type="text" value={this.state.displayValue} readOnly />
                <div className="button-grid">
                    {buttons.map((btn) => (
                        <button
                            key={btn}
                            onClick={() => 
                                btn == '=' ? this.handleEqual() : this.handleButtonClick(btn)  
                            }
                            
                        >
                            {btn}   
                        </button>
                    ))};
                    <button onClick={this.handleClear}>C</button>
                </div>
            </div>
        );
    }

    
} 
export default Calculator;