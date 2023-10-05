import { useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { ContactsListItems } from 'components/ContactsListItem/ContactsListItem';

const ContactsList = ({ data }) => {
  const filterValue = useSelector(selectFilterValue);

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
