import React, { useState } from "react";
import Header from "./component/Header";
import AddContact from "./component/AddContact";
import ContactList from "./component/ContactList";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };
  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}
