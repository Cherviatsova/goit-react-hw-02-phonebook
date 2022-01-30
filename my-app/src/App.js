import React, { Component } from "react";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactsList/ContactsList";
import { Title, Container } from "./App.styled";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.find(
      (contact) => newContact.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, newContact],
        }));
  };

  changeFilter = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <Form onAddContact={this.addContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={this.getFilterContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
