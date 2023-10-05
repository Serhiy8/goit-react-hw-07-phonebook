import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { ContactsListItems } from 'components/ContactsListItem/ContactsListItem';

const ContactsList = () => {
  const data = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const visibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return data.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul>
      {visibleContacts().map(({ id, name, phone }) => (
        <ContactsListItems key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

export default ContactsList;
