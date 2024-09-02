import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import AddContact from "./component/AddContact";
import ContactList from "./component/ContactList";

export default function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}
