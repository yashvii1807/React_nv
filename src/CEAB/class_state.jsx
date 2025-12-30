import React, { Component } from "react";

class ClassState extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            count: 0,
            counter: 10,
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1,
        }));
    };

    render() {
        return (
            <>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.incrementCount}>Increment Count</button>
                <button onClick={this.decrementCount}>Decrement Counter</button>
            </>
        );
    }
}

export default ClassState;
