import React, {Component} from "react";
class StringState extends Component{
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            age: "",
        };
    }
    handleChange = (e) => {
        this.setState({name : e.target.value});
    };
    handleEmailChange = (e) => {
        this.setState({email : e.target.value});
    };
    handleAgeChange = (e) => {
        this.setState({age : e.target.value});
    };
    Consolelog = () => {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.age);
    };

    render(){
        
            const{name, email, age} = this.state;
            return(
            <>
            
                <input type="text" value={name} onChange={this.handleChange}  placeholder="Enter Your Name"/>
                <input type="email" value={email} onChange={this.handleEmailChange} placeholder="Enter Your Email"/>
                <input type="number" value={age} onChange={this.handleAgeChange} placeholder="Enter Your Age"/>
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
                <h2>Age: {age}</h2>
            </>
            );
    }
}
export default StringState;