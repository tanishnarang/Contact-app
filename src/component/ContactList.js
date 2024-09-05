import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
const ContactList = ({ contacts, getContactId }) => {
  const deleteContactHandler = (id) => {
    getContactId(id);
  };
  const renderedContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div style={{ margin: "0 30px" }}>
      <h2>
        Contact List
        <Link to={"/add"}>
          <button className="ui button blue right" style={{ float: "right" }}>
            Add Contact
          </button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input type="text" placeholder="Search Contact" className="propmt" />
          <i className="icon search"></i>
        </div>
      </div>
      <div className="ui celled list">{renderedContactList}</div>
    </div>
  );
};

export default ContactList;
