import { ContactsList } from './ContactsList/ContactsList';
import { InputForm } from './InputForm/InputForm';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

export const App = () => {
  const filter = useSelector(state => state.filter.value);
  const contacts = useSelector(state => state.contacts.array);
  const getFilteredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const contactsList = getFilteredContacts();

  return (
    <div>
      <h2>PhoneBook</h2>
      <InputForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList contacts={contactsList} />
    </div>
  );
};
