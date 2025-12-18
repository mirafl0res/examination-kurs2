import { useState } from "react";
import { PillGroup, SearchForm } from ".";
import { useIngredientsStore } from "../../store/ingredientsStore";

function IngredientInput({ onSearch }) {
  const [value, setValue] = useState("");
  const placeholder = "Enter ingredients";

  const { ingredients, addIngredient, removeIngredient, clearIngredients } =
    useIngredientsStore();

  const handleAddIngredient = (ingredient) => {
    addIngredient(ingredient);
    setValue("");
  };

  const handleRemoveIngredient = (ingredient) => {
    removeIngredient(ingredient);
  };

  const handleClearIngredients = () => {
    clearIngredients(ingredients);
  };

  const handleSearch = () => {
    if (!ingredients.length) return;
    onSearch(ingredients.join(","));
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

/**
|--------------------------------------------------
1. State management
2. Input & Add Logic
3. Display pills
4. Search Trigger
5. Props
 * 
|--------------------------------------------------
*/
