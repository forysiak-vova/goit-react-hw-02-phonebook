import React, { Component } from 'react';
import Form from './component/Form/Form'
import ContactList from './component/ContactList/ContactList'
import { nanoid } from 'nanoid'

class App extends Component {
  state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
 
}
  formSubmitHandler =({name,number}) => {
   
   
    const { contacts } = this.state;
   
    const ReturnName = contacts.find(contact => contact.name === name);

    if (ReturnName) {
      alert('This name is already in the phone book ');
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      console.log(contact);
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  
    
   
  }
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const { contacts } = this.state;
   
     return (
      
       <div>
  <h1>Phonebook</h1>
  <Form onSubmit={this.formSubmitHandler}/>

  <h2>Contacts</h2>
  {/* <Filter />
  <ContactList /> */}
         <ContactList contacts={contacts} onDeleteContact={this.deleteContact}/>
</div>
  )
  }
 
}

export default App;


