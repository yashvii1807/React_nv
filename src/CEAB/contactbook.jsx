import React, { Component } from "react";

class ContactBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      fname: "",
      lname: "",
      phone: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addContact = () => {
    const { fname, lname, phone, contacts } = this.state;

    if (fname === "" || lname === "" || phone === "") {
      alert("Please fill all fields");
      return;
    }

    const newContact = {
      id: Date.now(),
      fname,
      lname,
      phone,
      visible: false
    };

    this.setState({
      contacts: [...contacts, newContact],
      fname: "",
      lname: "",
      phone: ""
    });
  };

  toggleView = (id) => {
    const updatedContacts = this.state.contacts.map((c) =>
      c.id === id ? { ...c, visible: !c.visible } : c
    );
    this.setState({ contacts: updatedContacts });
  };

  deleteContact = (id) => {
    const filteredContacts = this.state.contacts.filter(
      (c) => c.id !== id
    );
    this.setState({ contacts: filteredContacts });
  };

  render() {
    const { contacts, fname, lname, phone } = this.state;

    return (
      <>
        <input
          type="text"
          name="fname"
          value={fname}
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />

        <input
          type="text"
          name="lname"
          value={lname}
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />

        <input
          type="text"
          name="phone"
          value={phone}
          placeholder="Mobile Number"
          onChange={this.handleChange}
        />
        <br />

        <button onClick={this.addContact}>Add Contact</button>
        <br />

        <ul>
          {contacts.map((y) => (
            <li key={y.id}>
              {y.fname}
              <button onClick={() => this.toggleView(y.id)}>View</button>
              <button onClick={() => this.deleteContact(y.id)}>Delete</button>

              <div style={{ display: y.visible ? "block" : "none" }}>
                {y.lname} - {y.phone}
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ContactBook;
