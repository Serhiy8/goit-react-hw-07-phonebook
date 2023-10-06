import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operation';
import ContactsList from './ContactsList/ContactsList';
import { selectError } from 'redux/selectors';
import FilterByName from './Filter/Filter';
import FormPhonebook from './FormPhoneBook/FormPhoneBook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
      />
      <FormPhonebook />
      <FilterByName />
      {error ? (
        <h1>Something went wrong! Try reload the page</h1>
      ) : (
        <ContactsList />
      )}
    </Container>
  );
};
