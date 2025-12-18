import { useState } from "react";
import { PillGroup, SearchForm } from ".";
import { useIngredientsStore } from "../../store/ingredientsStore";

interface IngredientInputProps {
  onSearch: (ingredientsString: string) => void;
}

function IngredientInput({ onSearch }: IngredientInputProps) {
  const [value, setValue] = useState("");
  const placeholder = "Enter ingredients";

  const { ingredients, addIngredient, removeIngredient, clearIngredients } =
    useIngredientsStore();

  const handleAddIngredient = (ingredient: string) => {
    addIngredient(ingredient);
    setValue("");
  };

  const handleRemoveIngredient = (ingredient: string) => {
    removeIngredient(ingredient);
  };

  const handleClearIngredients = () => {
    clearIngredients();
  };

  const handleSearch = () => {
    if (!ingredients.length) return;
    const ingredientsString = ingredients.join(",");
    onSearch(ingredientsString);
    setValue("");
  };

  return (
    <>
      <SearchForm
        onSearch={handleAddIngredient}
        onChange={setValue}
        value={value}
        placeholder={placeholder}
        buttonText="Add"
      />

      <PillGroup
        options={ingredients}
        selected={[]}
        onToggle={handleRemoveIngredient}
        onClear={handleClearIngredients}
      />
      <button disabled={!ingredients} className="pill" onClick={handleSearch}>
        Search
      </button>
    </>
  );
}

export default IngredientInput;