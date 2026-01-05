# Recipe Discovery App

An interactive recipe discovery application that helps users find recipes based on their preferences, available ingredients, and dietary requirements.

## Overview

This recipe app allows users to search for recipes in multiple ways, manage their favorite recipes, and access detailed recipe information including ingredients, servings, preparation time and cooking steps. Built with React, TypeScript, and Vite, it provides a fast and responsive user experience.

## Main Features

### Flexible Recipe Search
- **Recipe Search**: Search by recipe name, cuisine type, or meal description
- **Ingredient-Based Search**: Find recipes based on ingredients you have at home

### Advanced Filters
- Filter by meal type (breakfast, lunch, dinner, snack, etc.)
- Filter by cuisine type (Italian, Asian, Mexican, etc.)
- Filter by dietary preferences (vegan, vegetarian, paleo, etc.)
- Filter by intolerances
- Set cooking time preferences
- Sort results by various criteria

### Favorites Management
- Save recipes to your favorites for quick access
- View all saved recipes on the Favorites page
- Toggle between grid and list views

### Recipe Details
- View full recipe information in a dedicated recipe page
- Follow step-by-step cooking instructions

### API Management
- Set your API key via the app interface or by creating a .env file

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mirafl0res/examination-kurs2
cd examination-kurs2
```

2. Install dependencies:
```bash
npm install
```

3. **Optional**: Create a `.env` file in the root directory with your Spoonacular API key:
```
VITE_SPOONACULAR_API_KEY=your_api_key_here
```

**Note about API Keys**: 
- The `.env` file is not tracked by git for security
- You can set your API key in two ways:
  1. **Via `.env` file**: Create the file with your API key (recommended for development)
  2. **Via App Interface**: Click "Get Started!" in the navigation menu and enter your API key directly in the app (stored in your browser's local storage)
- To get an API key, visit [Spoonacular API](https://spoonacular.com/food-api)

### Running the Application

**Development mode:**
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

**Run linter:**
```bash
npm run lint
```

## How to Use

### 1. **Search for Recipes**
   - On the home page, choose your search mode:
     - **Default Mode**: Type recipe names, cuisine types, or descriptions
     - **Ingredients Mode**: Add specific ingredients you have

### 2. **Apply Filters**
   - Click "Show Filters" to expand advanced filter options
   - Select your preferences:
     - Meal type (breakfast, lunch, dinner, etc.)
     - Cuisine type (Italian, Asian, Mexican, etc.)
     - Dietary restrictions (vegan, vegetarian, gluten-free, etc.)
     - Maximum cooking time
     - Sort options
   - Your selections persist across searches

### 3. **Browse Results**
   - View recipes as interactive cards showing:
     - Recipe image and title
     - Cooking time
     - Favorite button
   - Click on any recipe card to view full details

### 4. **View Recipe Details**
   - See complete ingredient list
   - Follow step-by-step cooking instructions
   - Mark steps as complete as you cook
   - Add/remove from favorites

### 5. **Manage Favorites**
   - Click the heart icon on any recipe to save it
   - Access all favorites from the "Favorites" page in the navigation menu
   - Switch between grid and list views
   - Remove recipes from favorites as needed

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite with Rolldown
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Styling**: CSS3
- **Icons**: Lucide React
- **Testing**: Cypress E2E
- **Linting**: ESLint
- **API**: Spoonacular Recipe API

## Project Structure

```
src/
├── api/              # API integration and Spoonacular API calls
├── components/       # Reusable React components
│   ├── search/      # Search-related components
│   ├── recipe/      # Recipe display components
│   └── ui/          # UI utility components (icons, info)
├── pages/           # Full page components (routes)
├── store/           # Zustand store definitions
├── types/           # TypeScript type definitions
├── hooks/           # Custom React hooks
├── constants/       # Application constants
├── data/            # Mock data and fixtures
└── utils/           # Utility functions
```

## Testing

Run end-to-end tests with Cypress:
```bash
npm run test  # (if configured in package.json)
```

Test files are located in the `cypress/e2e/` directory.

## State Management

The app uses Zustand for state management with the following stores:
- **searchResultsStore**: Handles recipe search results
- **favoritesStore**: Manages user's favorite recipes
- **searchFiltersStore**: Stores and manages search filter preferences
- **ingredientsStore**: Manages selected ingredients for ingredient-based search
- **apiKeyStore**: Stores user's personal Spoonacular API key

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The app stores all preferences and favorites in your browser's local storage
- API rate limits depend on your Spoonacular API plan
- Images are provided by the Spoonacular API
- All recipe data comes from the Spoonacular database

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Potential Future Enhancements

- User profile creation and account management
- Save search filter presets
- Nutritional information display
- Recipe rating and reviews
- Shopping list generation
- Meal planning features
- Dark mode support

## Questions or Issues?

For questions about the Spoonacular API, visit [Spoonacular Documentation](https://spoonacular.com/food-api)

## Authors

Made by Jennifer Hansson and Philip Zachariasson
