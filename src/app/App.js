import React, { Component } from 'react';

class App extends Component {
  state = {
  contacts: [],
  name: '',
  number: ''
}
 
  // hendelNameChange = event => {
  //   this.setState({name: event.currentTarget.value})
  //  }
  hendelChange = e => {
    console.log(e.currentTarget)
    console.log(e.currentTarget.value)
     console.log(e.currentTarget.name)
  }

  render() {
     return (
       <form>
         <label>
           І'мя
            <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
           value={this.state.name}
           onChange={this.hendelChange}
        />
         </label>
         <label>
           Тел
           <input
             type="tel"
             name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
             value={this.state.number}
             onChange={this.hendelChange}
           />
         </label>
      </form>
  )
  }
 
}

export default App;


