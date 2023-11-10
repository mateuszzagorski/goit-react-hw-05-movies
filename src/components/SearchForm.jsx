export const SearchForm = ({ fnOnFormSubmit }) => {
  const handleSubmit = event => {
    fnOnFormSubmit(event);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
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
