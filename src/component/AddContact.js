import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div classNames="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Type Your Name.."
            ></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="name"
              placeholder="example@gmail.com"
            ></input>
            <button className="ui button blue">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
