import React from "react";

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    notes: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <input
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />

        <input
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />

        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />

        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={this.state.phoneNumber}
          onChange={e => this.change(e)}
        />
        <br />

        <input
          name="notes"
          placeholder="Please add information regarding your inquiry"
          value={this.state.notes}
          onChange={e => this.change(e)}
        />
        <br />

        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;
