import React from 'react';
import { List,Item,Text } from 'components/Contacts/ContactsForm.styled.jsx';

const ContactList = ({ contacts, ondeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => {
      return (
        <Item key={id} >
          <Text >{name}</Text>
          <Text >{number}</Text>
          <button onClick={() => ondeleteContact(id)}>delete</button>
        </Item>
      );
    })}
  </List>
);

export default ContactList;