import { deleteContact } from 'redux/operation';
import { useDispatch } from 'react-redux';
import { TextList, ButtonList } from './ContactsListItem.styled';
import { useState } from 'react';

export const ContactsListItems = ({ id, name, phone }) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = async () => {
    setLoading(true);
    await dispatch(deleteContact(id));
    setLoading(false);
  };

  return (
    <li>
      <TextList>
        {name}: {phone}
      </TextList>
      <ButtonList type="button" disabled={isLoading} onClick={handleDelete}>
        {isLoading ? 'delete...' : 'delete'}
      </ButtonList>
    </li>
  );
};
