import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import NavigationMenu from "./components/NavigationMenu";
import FavoritesPage from "./pages/FavoritesPage";
import SearchBar from "./components/search/SearchContainer";
import RecipeDetailPage from "./pages/RecipePage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <>
       <Navbar onMenuOpen={() => setMenuOpen(true)} />
      <NavigationMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />


      <SearchBar />
      
      
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
