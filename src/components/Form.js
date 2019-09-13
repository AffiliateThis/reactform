import React from "react";
require("dotenv").config();

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: ""
    });
  };

  render() {
    return (
      <form>
        <input
          id="fn"
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />

        <input
          id="ln"
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />

        <input
          id="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />

        <input
          id="pn"
          name="phoneNumber"
          placeholder="Phone Number"
          value={this.state.phoneNumber}
          onChange={e => this.change(e)}
        />
        <br />

        <input
          id="message"
          name="message"
          placeholder="Please add information regarding your inquiry"
          value={this.state.message}
          onChange={e => this.change(e)}
        />
        <br />

        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }


ajax({
  type: POST,
  url: "https://api.hubapi.com/contacts/v1/contact/?hapikey=" +SECRET_KEY,
  data: data
});


  var data = [
    {
      property: "firstname",
      value: ""
    },
    {
      property: "lastname",
      value: ""
    },

    {
      property: "company",
      value: ""
    },
    {
      property: "phone",
      value: ""
    },

    {
      property: "email",
      value: ""
    },

    {
      property: "message",
      value: ""
    }
  ];
};

// }

// }

export default Form;
