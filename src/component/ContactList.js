import React from "react";
import ContactCard from "./ContactCard";
const ContactList = ({ contacts }) => {
  console.log(contacts);
  const renderedContactList = contacts.map((contact) => {
    return <ContactCard contact={contact} />;
  });
  return <div className="ui celled list">{renderedContactList}</div>;
};

export default ContactList;
