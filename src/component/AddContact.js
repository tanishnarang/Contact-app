import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("all the fields are mandatory");
      return;
    }

    const newContact = {
      name: this.state.name,
      email: this.state.email,
    };

    this.props.addContactHandler(newContact);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Type Your Name.."
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            ></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="name"
              placeholder="example@gmail.com"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
            <button className="ui button blue">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
