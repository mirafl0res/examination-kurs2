import Navbar from "./components/Navbar";
import SlideOutMenu from "./components/SlideOutMenu";
import RecipeCards from "./components/RecipeCards";
import SearchBar from "./components/search/SearchContainer";

function App() {
  return (
    <>
    <SearchBar />
    <Navbar />
    <SlideOutMenu />
    <RecipeCards />
    </>
    
  );
}

export default App;
