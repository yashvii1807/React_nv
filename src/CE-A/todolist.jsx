import React, { Component } from "react";
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            inputValue: "",
        };
    }
    handleinput = (e) => {
        this.setState({
            inputValue: e.target.value,
        });
    };
    addtodo = () => {
        if (this.state.inputValue.trim() == "") return;
        const newtodo = {
            id: Date.now(),
            text: this.state.inputValue,
            completed: false,
        };
        this.setState((prevState) => ({
            todos: [...prevState.todos, newtodo], //spread operator ...
            inputValue: "",
        }));
    };

    deleteTodo = (id) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((x) => x.id !== id)
        }));
    }
    toggleTodo = (id) => {
        this.setState((prevState) => ({
            todos: prevState.to.map((x))
        }))
    };

    render() {
        const { todos, inputValue } = this.state;
        return (
            <>
                <input type="text" value={inputValue} onChange={this.handleinput} />
                <br />
                <button onClick={this.addtodo}>Add</button>
                <br />
                <ul>
                    {
                        todos.map((x) => (
                            <li key={x.id}>
                                <input type="checkbox" value={x.completed} />
                                {x.text}
                                <button onClick={() => this.deleteTodo(x.id)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </>
        );
    }
}
export default Todolist;