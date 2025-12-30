import { Component } from "react";
import "./customcart.css";
// import PropTypes from "prop-types";

class ClassProps extends Component {
  render() {
    return (
        <>
        <div className="user-cart">
            <img src={this.props.url}></img>
            <h2>{this.props.name}</h2>
            <p>{this.props.email}</p>
            <button>{this.props.button}</button>
        </div>
        </> 
    );
  }
}
// ClassProps.defaultProps = {
//     name:"Default Name",
//     email:"default@example.com",
//     button:"Submit"

// }
ClassProps.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
export default ClassProps;
