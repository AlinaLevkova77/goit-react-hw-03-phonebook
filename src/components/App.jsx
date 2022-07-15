import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from './Contacts/ContactsForm';
import Filter from './Contacts/Filter';
import contacts from 'json/contacts.json';
import ContactList from './Contacts/ContactList';
import { Container,Title } from './Contacts/ContactsForm.styled.jsx';

export class App extends Component {
  state = {
    contacts:contacts,
    filter: '',
  };



  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContacts = ({ id, name, number }) => {
    const todo = {
      id: nanoid(),
      name,
      number
    };
    const normalaze = this.state.contacts.find(
      e => e.name === name || e.number === number
    );
    normalaze
      ? alert(`${name} is already in contacts %{number}`)
      : this.setState(prevState => ({
        contacts: [todo, ...prevState.contacts],
      }));
}

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const normolizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizeFilter)
    );
  };

  componentDidMount() {
    const contactsList = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsList);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const filterConacts = this.getContacts();
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm
          onSubmitAdd={this.addContacts}
        />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filterConacts}
          ondeleteContact={this.deleteContact}
        />
      </Container>
    );
}
}


// import styled from '@emotion/styled';