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
  const placeholder = "e.g, egg, avocado, cheese";

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
      <>
        {ingredients.length > 0 && (
          <div className="ingredients-list">
            {ingredients.map((ingredient) => (
              <button
                key={ingredient}
                type="button"
                onClick={() => removeIngredient(ingredient)}
              >
                <IconInfo text={ingredient} icon={Icons.close} />
              </button>
            ))}
            {/* <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
              <button
                type="button"
                className="clear-ingredients-btn"
                onClick={handleClearIngredients}
              >
                <IconInfo icon={Icons.close} text="Clear ingredients" />
              </button>
            </div> */}
          </div>
        )}
      </>
    );
  };

  const renderButtons = () =>
    ingredients.length > 0 ? (
      <div className="ingredient-buttons">
        <button
          className="clear-ingredients-btn"
          type="button"
          onClick={handleClearIngredients}
        >
          <IconInfo icon={Icons.close} text="Clear ingredients" />
        </button>
        <button
          type="button"
          className="search-ingredients-btn"
          onClick={handleSearch}
        >
          <IconInfo icon={Icons.search} text="Search" />
        </button>
      </div>
    ) : null;

  return (
    <>
      <SearchForm
        onSearch={handleAddIngredient}
        onChange={setValue}
        value={value}
        placeholder={placeholder}
        buttonText={<Icon icon={Icons.add} />}
      />
      <div className="ingredient-row">{renderIngredients()}</div>
      <div>{renderButtons()}</div>
    </>
  );
}

export default IngredientInput;
