import React, { Component } from "react";

class Form extends Component {
   state = {
    name: '',
      number: ''
   }

     handelChange = e => {
        const { name, value } = e.currentTarget;
     this.setState({
       [name]: value
    })
   };
   handelSubmit = e => {
      e.preventDefault();

    
      const {name, number} = this.state
      this.props.onSubmit({name, number})


      this.setState({name: '',  number: ''})
   };

   render() {
      
      return (
         <form onSubmit={this.handelSubmit}>
         <label>
            Name
            <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
           value={this.state.name}
           onChange={this.handelChange}
        />
         </label>
         <label>
           Phone
           <input
             type="tel"
             name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
             value={this.state.number}
             onChange={this.handelChange}
           />
         </label>
         <button type='submit'>Add contact</button>
      </form>
      )
   }
}

export default Form;