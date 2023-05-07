import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import {save, load} from '../../utils/localstorage'
import { Container, Title, SubTitle, ContactContainer } from './App.styled';

import { ContactForm } from '../ContactForm';
import {Filter} from '../Filter';
import { ContactList } from '../ContactList';

export class App extends Component {

             
 
  state = {
    
    contacts: [],
    filter: '',
    
  };

   componentDidMount() {
  
    const parsedContacts = load('contacts');
 
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
   
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
          save('contacts', nextContacts);
    }

    }

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

  