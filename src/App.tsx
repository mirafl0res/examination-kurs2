import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import NavigationMenu from "./components/NavigationMenu";
import FavoritesPage from "./pages/FavoritesPage";
import RecipeDetailPage from "./pages/RecipePage";
import SearchPage from "./pages/SearchPage";
import UserApiPage from "./pages/UserApiPage";
import Footer from "./components/Footer";
import { useApiKeyStore } from "./store/apiKeyStore";
import { setClientApiKey } from "./api/spoonacular";


setClientApiKey(useApiKeyStore.getState().apiKey ?? null);
useApiKeyStore.subscribe((s) => setClientApiKey(s.apiKey ?? null));

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <>
       <Navbar onMenuOpen={() => setMenuOpen(true)} />
      <NavigationMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
  
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/userapi" element={<UserApiPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
