function SearchForm({ onChange, onSearch, value, placeholder = "Search..." }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = (value ?? "").trim();
    if (!searchQuery) return;
    onSearch(searchQuery);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchField"></label>
        <input
          type="text"
          id="searchField"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <button>Search</button>
      </form>
    </>
  );
}

export default SearchForm;
