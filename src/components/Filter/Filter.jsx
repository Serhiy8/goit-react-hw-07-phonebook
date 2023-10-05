import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlise';
import {
  InputFilterLabel,
  InputFilterInput,
  FilterContainer,
} from './Filter.styled';

const FilterByName = () => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <FilterContainer>
      <InputFilterLabel htmlFor="filter">
        Find contact by name:
      </InputFilterLabel>
      <InputFilterInput type="text" id="filter" onChange={changeFilter} />
    </FilterContainer>
  );
};

export default FilterByName;
