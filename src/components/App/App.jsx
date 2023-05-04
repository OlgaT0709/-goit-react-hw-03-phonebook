import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Container, Title, SubTitle, ContactContainer } from './App.styled';
import initialContacts from '../../data/data.json';

import { ContactForm } from '../ContactForm';
import {Filter} from '../Filter';
import { ContactList } from '../ContactList';

export class App extends Component {

  static defaultProps = {
    contacts: initialContacts,
  };

 
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
       })),
};
              
 
  state = {
    contacts: this.props.contacts,
    filter: '',
    
  };

  modifyContactList = (newContact) => {
    const { name, number } = newContact;
  
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  }

  
  delContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };
   
  render() {
    const { contacts, filter } = this.state
    
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    
        
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm state={this.state} modifyContactList={this.modifyContactList}  />
        <ContactContainer>
          <SubTitle>Contacts {contacts.length} </SubTitle>
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          <ContactList contactList={filteredContacts} onDelContact={this.delContact } />
        </ContactContainer>
        
      </Container>
    );
  }
}

  