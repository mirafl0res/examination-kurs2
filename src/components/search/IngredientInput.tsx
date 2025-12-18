import { useState } from "react";
import { PillGroup } from ".";
import { useIngredientsStore } from "../../store/ingredientsStore";

function IngredientInput() {
  const [value, setValue] = useState("");

  const {
    ingredients,
    addIngredient,
    removeIngredient,
    setIngredients,
    clearIngredients,
  } = useIngredientsStore();

  const handleAddIngredient = (e) => {
    e.preventDefault();
    const ingredient = (value ?? "").trim();
    if (!ingredient) return;
    addIngredient(ingredient)
    setValue("");
  };

  const handleRemoveIngredient = (ingredient) => {
    removeIngredient(ingredient)
  };

  return (
    <>
      <h3>IngredientInput</h3>

      <form onSubmit={handleAddIngredient}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter ingredients"
        />
        <button type="submit">Add</button>
      </form>
      <PillGroup
        options={ingredients}
        selected={[]}
        onToggle={handleRemoveIngredient}
      />
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
