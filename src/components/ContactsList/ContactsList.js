import { ContactCard } from 'components/ContactCard/ContactCard';
import { List } from './ContactsList.styled';

export const ContactsList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(item => {
        return (
          <li key={item.id}>
            <ContactCard item={item} />
          </li>
        );
      })}
    </List>
  );
};
