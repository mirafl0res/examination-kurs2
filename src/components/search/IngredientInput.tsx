import { useState } from "react";
import { PillGroup, SearchForm } from ".";
import { useIngredientsStore } from "../../store/ingredientsStore";

interface IngredientInputProps {
  onSearch: (ingredientsString: string) => void;
}

function IngredientInput({ onSearch }: IngredientInputProps) {
  const [value, setValue] = useState("");
  const placeholder = "Enter ingredients";

  const ingredients = useIngredientsStore((state) => state.ingredients);
  const addIngredient = useIngredientsStore((state) => state.addIngredient);
  const removeIngredient = useIngredientsStore(
    (state) => state.removeIngredient
  );
  const clearIngredients = useIngredientsStore(
    (state) => state.clearIngredients
  );

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
