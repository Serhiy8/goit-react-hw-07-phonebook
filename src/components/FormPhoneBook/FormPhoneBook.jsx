import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operation';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import {
  InputContainer,
  InputContainerLabel,
  InputContainerInput,
  FormContact,
  InputContainerButton,
} from './FormPhoneBook.styled';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';

const FormPhonebook = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectContacts);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const checkContact = userName => {
    const normalizedNewContactName = userName.toLowerCase();
    return data.some(
      contact => contact.name.toLowerCase() === normalizedNewContactName
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.userName.value;
    const phone = form.elements.userNumber.value;
    checkContact(name)
      ? toast.error('Contact already in a list')
      : dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <FormContact onSubmit={handleSubmit}>
      <InputContainer>
        <InputContainerLabel htmlFor="fullName">Full Name:</InputContainerLabel>
        <InputContainerInput
          type="text"
          id="fullName"
          name="userName"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputContainer>
      <InputContainer>
        <InputContainerLabel htmlFor="phone">Phone number:</InputContainerLabel>
        <InputContainerInput
          type="tel"
          id="phone"
          name="userNumber"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputContainer>

      <InputContainerButton type="submit">
        {isLoading && !error ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="20"
            visible={true}
          />
        ) : (
          'Add contact'
        )}
      </InputContainerButton>
    </FormContact>
  );
};

export default FormPhonebook;
