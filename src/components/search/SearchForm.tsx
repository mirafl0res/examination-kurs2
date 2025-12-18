
interface SearchFormProps {
  onChange: (value: string) => void;
  onSearch: (query: string) => void;
  value: string;
  placeholder?: string;
  buttonText?: string;
}

function SearchForm({
  onChange,
  onSearch,
  value,
  placeholder = "Search...",
  buttonText = "Search",
}: SearchFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        <button className="pill selected">{buttonText}</button>
      </form>
    </>
  );
}

export default SearchForm;
