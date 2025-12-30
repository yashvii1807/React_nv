import React, { Component } from "react";

class ClassState extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            textcolor: "black",
            backcolor: "white"
        };
    }

    setTextColor = (color) => {
        this.setState({ textcolor: color });
    };

    setBackColor = (color) => {
        this.setState({ backcolor: color });
    };

    render() {
        return (
            <>
                {}
                <button onClick={() => this.setTextColor("green")}>Green</button>
                <button onClick={() => this.setTextColor("blue")}>Blue</button>
                <button onClick={() => this.setTextColor("yellow")}>Yellow</button>
                <button onClick={() => this.setTextColor("red")}>Red</button>
                <br />

                {}
                <button onClick={() => this.setBackColor("green")}>Green</button>
                <button onClick={() => this.setBackColor("blue")}>Blue</button>
                <button onClick={() => this.setBackColor("yellow")}>Yellow</button>
                <button onClick={() => this.setBackColor("red")}>Red</button>
                <br />

                <p style={{color: this.state.textcolor, backgroundColor: this.state.backcolor }}>
                    Sample Text
                </p>
            </>
        );
    }
}

export default ClassState;
