import ContactItem from '../ContactItem/ContactItem'

function ContactList({contacts,onDeleteContact}) {
   return (
      <ul>
            {contacts.map(({ id, name, number }) =>
            <ContactItem
               key={id}
               id={id}
               name={name}
               number={number}
               onDeleteContact={onDeleteContact}
               
            />
           )} 
      </ul>
   )
}

export default ContactList;