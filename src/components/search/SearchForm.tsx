import { Icons } from "../ui/icons";

interface SearchFormProps {
  onChange: (value: string) => void;
  onSearch: (query: string) => void;
  value: string;
  placeholder?: string;
  buttonText?: string | React.ReactNode;
}

function SearchForm({
  onChange,
  onSearch,
  value,
  placeholder = "e.g Pasta Carbonara, quick dinner or healthy dessert",
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
      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="searchField"></label>
        <input
          type="text"
          id="searchField"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <button id="search-add-btn" aria-label={typeof buttonText === 'string' ? String(buttonText) : undefined}>
          {typeof buttonText === "string" || typeof buttonText === "number" ? (
            <>
              <Icons.search size={16} />
              <span style={{ marginLeft: 8 }}>{buttonText}</span>
            </>
          ) : (
            buttonText
          )}
        </button>
      </form>
    </>
  );
}

export default SearchForm;
