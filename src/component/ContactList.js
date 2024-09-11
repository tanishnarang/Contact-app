import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
const ContactList = ({ contacts, getContactId, term, searchKeyword }) => {
  const inputEL = useRef("");

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

  const getSearchTerm = () => {
    searchKeyword(inputEL.current.value);
  };
  return (
    <div style={{ margin: "20px" }}>
      <div style={{ margin: "0 20px" }}>
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
            <input
              ref={inputEL}
              type="text"
              placeholder="Search Contact"
              className="propmt"
              value={term}
              onChange={getSearchTerm}
            />
            <i className="icon search"></i>
          </div>
        </div>
      </div>
      <div className="ui celled list">
        {renderedContactList.length > 0
          ? renderedContactList
          : "No Contacts Available"}
      </div>
    </div>
  );
};

export default ContactList;
