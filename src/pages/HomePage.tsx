import SearchBar from "../components/SearchBar"
import RecipeResults from "../components/RecipeResults"
import "./HomePage.css"

function HomePage() {
  return (
    <div>
      <header className="home-hero">
        <h1>Discover Delicious & Healthy Recipes</h1>
        <p>Fresh ideas for every meal. Find tasty recipes based on what you have in your fridge</p>
          <SearchBar />
        
      </header>
      <main>
        <RecipeResults />
      </main>
    </div>
  )
}

export default HomePage
