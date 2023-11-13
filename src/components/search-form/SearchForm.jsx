import PropTypes from 'prop-types';

export const SearchForm = ({ fnOnFormSubmit, fnOnChange, value }) => {
  const handleSubmit = event => {
    fnOnFormSubmit(event);
  };
  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      onChange={e => fnOnChange(e.target.value)}
      value={value}
    >
      <input
        id="input"
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <SubmitBtn />
    </form>
  );
};

export const SubmitBtn = () => (
  <button type="submit" className="button">
    Search
  </button>
);

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
  fnOnFormSubmit: PropTypes.func,
  fnOnChange: PropTypes.func,
};
