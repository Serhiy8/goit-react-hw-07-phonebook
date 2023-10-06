import styled from 'styled-components';

const FilterContainer = styled('div')({
  marginBottom: 30,
});

const InputFilterLabel = styled('label')({
  marginRight: 10,
  fontSize: 16,
  pointerEvent: 'none',
});
const InputFilterInput = styled('input')({
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

export { FilterContainer, InputFilterInput, InputFilterLabel };
