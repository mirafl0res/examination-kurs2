import { useState } from "react";
import { PillGroup } from "./PillGroup";
import { togglePrimitiveInArray } from "../../utils/toggleHelpers";

function IngredientInput() {
  const [value, setValue] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleAddIngredient = (e) => {
    e.preventDefault();
    const ingredient = (value ?? "").trim();
    if (!ingredient) return;
    if (ingredients.includes(ingredient)) return;
    setIngredients((prev) => [...prev, ingredient]);
    setValue("");
  };

  const handleRemoveIngredient = (ingredient) => {
    setIngredients(prev => togglePrimitiveInArray(prev, ingredient))   
  }

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
      <PillGroup options={ingredients} selected={[]} onToggle={handleRemoveIngredient}/>
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
