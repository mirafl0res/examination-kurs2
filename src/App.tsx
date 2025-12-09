import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SlideOutMenu from "./components/SlideOutMenu";
import RecipeCards from "./components/RecipeCards";
import FavoritesPage from "./pages/FavoritesPage";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <SlideOutMenu />

      <Routes>
        <Route path="/" element={<RecipeCards />} /> 
        <Route path="/favorites" element={<FavoritesPage />} />
      
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
