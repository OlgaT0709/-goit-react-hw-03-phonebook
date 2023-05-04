import PropTypes from 'prop-types';
import {FilterLable, FilterInput} from './Filter.styled';


export const Filter = ({value, onChangeFilter}) => {
  return (
    <FilterLable>Find contacts by name
      <FilterInput
        type="text"
        name="name"
        value={value}
        onChange={onChangeFilter}
        autoComplete="off"
      />
    </FilterLable>
  );
}


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};