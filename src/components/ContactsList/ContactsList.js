import { ContactCard } from 'components/ContactCard/ContactCard';
import { List } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const getFilteredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const contactsList = getFilteredContacts();

  return (
    <List>
      {contactsList.map(item => {
        return (
          <li key={item.id}>
            <ContactCard item={item} />
          </li>
        );
      })}
    </List>
  );
};
