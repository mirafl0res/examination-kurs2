import { useState } from "react";
import { PillGroup, SearchForm } from ".";
import { useIngredientsStore } from "../../store/ingredientsStore";
import { Icons } from "../ui/icons";
import { Icon } from "../ui/icon";
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

  const handleClearIngredients = () => {
    clearIngredients();
    setValue("");
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
        buttonText={<Icon icon={Icons.add} />}
      />

      <PillGroup
        options={ingredients}
        selected={[]}
        onToggle={(ingredient) => removeIngredient(ingredient)}
        onClear={handleClearIngredients}
      />

      {ingredients.length > 0 && (
        <button className="pill" onClick={handleSearch}>
          Search
        </button>
      )}
    </>
  );
}

export default IngredientInput;
