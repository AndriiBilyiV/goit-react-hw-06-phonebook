import { Button } from './ContactCard.style';
import { IoTrashBinOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { del } from 'redux/contactsSlice';

export const ContactCard = ({ item }) => {
  const dispach = useDispatch();
  const { name, id, tel } = item;
  return (
    <div>
      {name}: {tel}
      <Button onClick={() => dispach(del(id))}>
        <IoTrashBinOutline />
      </Button>
    </div>
  );
};
