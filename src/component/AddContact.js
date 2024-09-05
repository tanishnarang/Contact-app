import React from "react";
import { withRouter } from "./withRouter";

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
    this.props.navigate("/");
  };

  render() {
    return (
      <div className="ui main" style={{ margin: "30px 120px 30px 30px" }}>
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
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddContact);
