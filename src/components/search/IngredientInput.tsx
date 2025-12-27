import { useState } from "react";
import { SearchForm } from ".";
import { useIngredientsStore } from "../../store/ingredientsStore";
import { Icons } from "../ui/icons";
import { Icon } from "../ui/icon";
import IconInfo from "../ui/IconInfo";
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

  const renderIngredients = () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        {ingredients.map((ingredient) => (
          <button
            key={ingredient}
            type="button"
            onClick={() => removeIngredient(ingredient)}
          >
            <IconInfo text={ingredient} icon={Icons.close} />
          </button>
        ))}
      </div>
    );
  };

  const renderButtons = () => (
    ingredients.length > 0 ? (
      <div>
        <button style={{ color: "red" }} onClick={handleClearIngredients}>
          Clear ingredients
        </button>
        <button className="pill" onClick={handleSearch}>
          Search
        </button>
      </div>
    ) : null
  );

  return (
    <>
      <SearchForm
        onSearch={handleAddIngredient}
        onChange={setValue}
        value={value}
        placeholder={placeholder}
        buttonText={<Icon icon={Icons.add} />}
      />

      {renderIngredients()}
      {renderButtons()}
    </>
  );
}

export default IngredientInput;
