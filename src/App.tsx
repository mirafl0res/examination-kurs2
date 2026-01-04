import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import NavigationMenu from "./components/NavigationMenu";
import FavoritesPage from "./pages/FavoritesPage";
import RecipeDetailPage from "./pages/RecipePage";
import HomePage from "./pages/HomePage";
import UserApiPage from "./pages/UserApiPage";
import Footer from "./components/Footer";


// Initialize API client key from persisted store and keep it synced
import { useApiKeyStore } from "./store/apiKeyStore";
import { setClientApiKey } from "./api/spoonacular";

// initialize synchronously from persisted store
setClientApiKey(useApiKeyStore.getState().apiKey ?? null);

// subscribe to changes and update client
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
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/integrations" element={<UserApiPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
