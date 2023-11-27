import { ContactsList } from './ContactsList/ContactsList';
import { InputForm } from './InputForm/InputForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div>
      <h2>PhoneBook</h2>
      <InputForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
