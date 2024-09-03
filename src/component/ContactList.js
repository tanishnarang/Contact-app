import React from "react";
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
  return <div className="ui celled list">{renderedContactList}</div>;
};

export default ContactList;
