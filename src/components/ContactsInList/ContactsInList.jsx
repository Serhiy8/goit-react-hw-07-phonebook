import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';

export const ContactsInList = ({ quantity }) => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <p>{`The number of contacts in the list: ${
      isLoading ? '...' : quantity
    }`}</p>
  );
};
