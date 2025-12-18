import { Icons } from "../ui/icons";

interface SearchFormProps {
  onChange: (value: string) => void;
  onSearch: (query: string) => void;
  value: string;
  placeholder?: string;
}

function SearchForm({ onChange, onSearch, value, placeholder = "Search..." }: SearchFormProps) {
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
        <button><Icons.search/></button>
      </form>
    </>
  );
}

export default SearchForm;
