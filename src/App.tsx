import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SlideOutMenu from "./components/SlideOutMenu";
import FavoritesPage from "./pages/FavoritesPage";
import SearchBar from "./components/search/SearchContainer";
import RecipeResults from "./components/RecipeResults";

function App() {
  return (
    <>
      <SearchBar />
      <Navbar />
      <SlideOutMenu />
      
      <Routes>
        <Route path="/" element={<RecipeResults />} />
        <Route path="/favorites" element={<FavoritesPage />} />

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
