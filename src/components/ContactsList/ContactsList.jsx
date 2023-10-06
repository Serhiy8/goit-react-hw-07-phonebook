import { useSelector } from 'react-redux';
import { selectContacts, selectFilterValue } from 'redux/selectors';
import { ContactsListItems } from 'components/ContactsListItem/ContactsListItem';
import { ContactsInList } from 'components/ContactsInList/ContactsInList';

const ContactsList = () => {
  const filterValue = useSelector(selectFilterValue);
  const data = useSelector(selectContacts);

  const visibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return data.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactsForRender = visibleContacts();

  return (
    <>
      <ContactsInList quantity={contactsForRender.length} />
      <ul>
        {contactsForRender.map(({ id, name, phone }) => (
          <ContactsListItems key={id} id={id} name={name} phone={phone} />
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
