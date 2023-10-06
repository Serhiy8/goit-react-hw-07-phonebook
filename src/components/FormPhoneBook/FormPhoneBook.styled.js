import styled from 'styled-components';

const InputContainer = styled('div')({
  //   position: 'relative',
  //   marginBottom: 25,
});

const FormContact = styled('form')({
  display: 'flex',
  gap: 15,
  marginBottom: 30,
});
const InputContainerLabel = styled('label')({
  marginRight: 10,
  fontSize: 16,
  pointerEvent: 'none',
});
const InputContainerButton = styled('button')({
  minWidth: 87,
  textAlign: 'center',
});
const InputContainerInput = styled('input')({
  border: 0,
  borderBottom: '1px solid #555',
  background: 'transparent',
  width: 200,
  padding: '8px 0 5px 0',
  fontSize: 16,
  '&:focus': {
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid green',
  },
});

export {
  InputContainer,
  FormContact,
  InputContainerButton,
  InputContainerInput,
  InputContainerLabel,
};
