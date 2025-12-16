import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SlideOutMenu from "./components/SlideOutMenu";
import FavoritesPage from "./pages/FavoritesPage";
import SearchBar from "./components/search/SearchContainer";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <SearchBar />
      <Navbar />
      <SlideOutMenu />
      
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
