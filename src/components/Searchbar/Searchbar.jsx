import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import { SearchForm, Button, InputSearch } from './Searchbar.styled';

function Searchbar({ onSubmitSearchForm, searchQuery }) {
  const [query, setQuery] = useState(searchQuery);

  const handleChange = event => {
    const { value } = event.currentTarget;

    return setQuery(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.warn('🦄 please, type a request', {
        autoClose: 3000,
        theme: 'dark',
      });
    }

    onSubmitSearchForm(query);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Button type="submit">
        <AiOutlineSearch size={36} />
      </Button>

      <InputSearch
        value={query}
        onChange={handleChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </SearchForm>
  );
}

Searchbar.propTypes = {
  onSubmitSearchForm: PropTypes.func,
};
export default Searchbar;
