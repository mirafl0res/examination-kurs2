import { mockRecipes } from "../../data/mockRecipes";

interface MockRecipesQuickListProps {
  onRecipeClick: (title: string) => void;
}

function MockRecipesQuickList({ onRecipeClick }: MockRecipesQuickListProps) {
  return (
    <div style={{ marginTop: "1rem", fontSize: "0.85rem", opacity: 0.7 }}>
      <details>
        <summary style={{ cursor: "pointer" }}>Mock recipes (dev)</summary>
        <ul style={{ marginTop: "0.5rem", paddingLeft: "1.5rem" }}>
          {mockRecipes.map((recipe) => (
            <li key={recipe.id}>
              <button
                onClick={() => onRecipeClick(recipe.title)}
                style={{
                  background: "none",
                  border: "none",
                  color: "inherit",
                  cursor: "pointer",
                  textDecoration: "underline",
                  padding: 0,
                }}
              >
                {recipe.title}
              </button>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default MockRecipesQuickList;
