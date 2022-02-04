

function ContactItem({id, name, number,onDeleteContact}) { 
   return (
      <li key={id}>
               <span> {name}</span>
               <span>-( {number} )-</span>
              <button onClick={()=>onDeleteContact(id)}>delete</button>
      </li>
)
}

export default ContactItem;