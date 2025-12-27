import MockRecipesQuickList from "./mock/MockRecipesQuickList";
import MockToggle from "./mock/MockToggle";
import { USE_MOCK_DATA } from "../../api/recipes";

type MockSearchContainerProps = {
  onSearch: () => void;
};

function MockSearchContainer({ onSearch }: MockSearchContainerProps) {
  const handleMockSearchToggle = (checked: boolean) => {
    localStorage.setItem("useMock", checked ? "true" : "false");
    window.location.reload();
  };

  if (import.meta.env.DEV) {
    return (
      <>
        <MockToggle
          value={USE_MOCK_DATA}
          onChange={handleMockSearchToggle}
        />
        {USE_MOCK_DATA && <MockRecipesQuickList onRecipeClick={onSearch} />}
      </>
    );
  }
  return <></>;
}

export default MockSearchContainer;
