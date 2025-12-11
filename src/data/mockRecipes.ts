/**
 * Mock recipe data for development and testing
 * 
 * This module provides a collection of realistic recipe objects that match the
 * Spoonacular API response structure. Use this for testing without consuming API quota.
 * 
 * @see https://spoonacular.com/food-api/docs
 */

import type { Recipe } from "../types/api";

/**
 * Filter options for mock recipe search
 * Mirrors the SearchOptions type from the API
 */
export type MockFilterOptions = {
  query?: string;
  maxReadyTime?: number;
  minServings?: number;
  maxServings?: number;
  diet?: string;
  intolerances?: string;
  type?: string;
};

/**
 * Collection of mock recipes for development and testing
 * Each recipe contains complete information including ingredients, instructions, and nutritional data
 */
export const mockRecipes: Recipe[] = [
  {
    id: 1001,
    title: "Creamy Tuscan Chicken",
    image: "https://images.unsplash.com/photo-1588347818036-8e6c7f527e4f?w=400",
    servings: 4,
    readyInMinutes: 30,
    preparationMinutes: 10,
    cookingMinutes: 20,
    healthScore: 72,
    pricePerServing: 425.5,
    cheap: false,
    vegan: false,
    vegetarian: false,
    glutenFree: true,
    dairyFree: false,
    veryHealthy: true,
    veryPopular: true,
    sustainable: false,
    aggregateLikes: 1247,
    cuisines: ["Italian", "Mediterranean"],
    diets: ["gluten free"],
    dishTypes: ["lunch", "main course", "main dish", "dinner"],
    occasions: ["date night"],
    instructions:
      "Season chicken breasts with salt, pepper, and Italian seasoning. Heat olive oil in a large skillet over medium-high heat. Add chicken and cook until golden brown on both sides, about 5-6 minutes per side. Remove and set aside. In the same skillet, add garlic and sauté for 1 minute. Add sun-dried tomatoes and spinach, cooking until spinach wilts. Pour in cream and parmesan cheese, stirring until smooth. Return chicken to the pan and simmer for 5 minutes. Serve hot with pasta or rice.",
    extendedIngredients: [
      {
        id: 5006,
        aisle: "Meat",
        image: "chicken-breasts.png",
        consistency: "solid",
        name: "chicken breasts",
        nameClean: "chicken breast",
        original: "4 boneless, skinless chicken breasts",
        originalName: "boneless, skinless chicken breasts",
        amount: 4,
        unit: "pieces",
        meta: ["boneless", "skinless"],
        measures: {
          us: { amount: 4, unitShort: "pieces", unitLong: "pieces" },
          metric: { amount: 4, unitShort: "pieces", unitLong: "pieces" },
        },
      },
      {
        id: 1001,
        aisle: "Milk, Eggs, Other Dairy",
        image: "heavy-cream.jpg",
        consistency: "liquid",
        name: "heavy cream",
        nameClean: "heavy cream",
        original: "1 cup heavy cream",
        originalName: "heavy cream",
        amount: 1,
        unit: "cup",
        meta: [],
        measures: {
          us: { amount: 1, unitShort: "cup", unitLong: "cup" },
          metric: { amount: 240, unitShort: "ml", unitLong: "milliliters" },
        },
      },
      {
        id: 10011457,
        aisle: "Produce",
        image: "spinach.jpg",
        consistency: "solid",
        name: "fresh spinach",
        nameClean: "spinach",
        original: "2 cups fresh spinach",
        originalName: "fresh spinach",
        amount: 2,
        unit: "cups",
        meta: ["fresh"],
        measures: {
          us: { amount: 2, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 60, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 11955,
        aisle: "Canned and Jarred",
        image: "sundried-tomatoes.jpg",
        consistency: "solid",
        name: "sun-dried tomatoes",
        nameClean: "sun dried tomatoes",
        original: "1/2 cup sun-dried tomatoes, chopped",
        originalName: "sun-dried tomatoes, chopped",
        amount: 0.5,
        unit: "cup",
        meta: ["chopped"],
        measures: {
          us: { amount: 0.5, unitShort: "cup", unitLong: "cups" },
          metric: { amount: 55, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 1033,
        aisle: "Cheese",
        image: "parmesan.jpg",
        consistency: "solid",
        name: "parmesan cheese",
        nameClean: "parmesan",
        original: "1/2 cup grated parmesan cheese",
        originalName: "grated parmesan cheese",
        amount: 0.5,
        unit: "cup",
        meta: ["grated"],
        measures: {
          us: { amount: 0.5, unitShort: "cup", unitLong: "cups" },
          metric: { amount: 50, unitShort: "g", unitLong: "grams" },
        },
      },
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Season chicken breasts with salt, pepper, and Italian seasoning.",
            ingredients: [
              { id: 5006, name: "chicken breasts", image: "chicken-breasts.png" },
              { id: 1102, name: "salt", image: "salt.jpg" },
              { id: 1002030, name: "pepper", image: "pepper.jpg" },
            ],
            equipment: [],
          },
          {
            number: 2,
            step: "Heat olive oil in a large skillet over medium-high heat.",
            ingredients: [{ id: 4053, name: "olive oil", image: "olive-oil.jpg" }],
            equipment: [{ id: 404645, name: "skillet", image: "pan.png" }],
          },
          {
            number: 3,
            step: "Add chicken and cook until golden brown on both sides, about 5-6 minutes per side.",
            ingredients: [{ id: 5006, name: "chicken", image: "chicken-breasts.png" }],
            equipment: [],
          },
          {
            number: 4,
            step: "Remove chicken and set aside. In the same skillet, add garlic and sauté for 1 minute.",
            ingredients: [{ id: 11215, name: "garlic", image: "garlic.png" }],
            equipment: [{ id: 404645, name: "skillet", image: "pan.png" }],
          },
          {
            number: 5,
            step: "Add sun-dried tomatoes and spinach, cooking until spinach wilts.",
            ingredients: [
              { id: 11955, name: "sun-dried tomatoes", image: "sundried-tomatoes.jpg" },
              { id: 10011457, name: "spinach", image: "spinach.jpg" },
            ],
            equipment: [],
          },
          {
            number: 6,
            step: "Pour in cream and parmesan cheese, stirring until smooth.",
            ingredients: [
              { id: 1001, name: "cream", image: "heavy-cream.jpg" },
              { id: 1033, name: "parmesan", image: "parmesan.jpg" },
            ],
            equipment: [],
          },
          {
            number: 7,
            step: "Return chicken to the pan and simmer for 5 minutes. Serve hot.",
            ingredients: [{ id: 5006, name: "chicken", image: "chicken-breasts.png" }],
            equipment: [{ id: 404645, name: "pan", image: "pan.png" }],
          },
        ],
      },
    ],
  },
  {
    id: 1002,
    title: "Vegan Buddha Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
    servings: 2,
    readyInMinutes: 35,
    preparationMinutes: 15,
    cookingMinutes: 20,
    healthScore: 95,
    pricePerServing: 285.3,
    cheap: true,
    vegan: true,
    vegetarian: true,
    glutenFree: true,
    dairyFree: true,
    veryHealthy: true,
    veryPopular: false,
    sustainable: true,
    aggregateLikes: 842,
    cuisines: ["Asian", "Fusion"],
    diets: ["vegan", "vegetarian", "gluten free", "dairy free"],
    dishTypes: ["lunch", "main course", "dinner"],
    occasions: ["meal prep"],
    instructions:
      "Preheat oven to 400°F (200°C). Toss chickpeas with olive oil, paprika, and cumin. Roast for 25 minutes. Meanwhile, cook quinoa according to package directions. Massage kale with lemon juice and a pinch of salt. Arrange quinoa, roasted chickpeas, avocado slices, shredded carrots, and kale in bowls. Drizzle with tahini dressing and sprinkle with sesame seeds.",
    extendedIngredients: [
      {
        id: 16057,
        aisle: "Canned and Jarred",
        image: "chickpeas.png",
        consistency: "solid",
        name: "chickpeas",
        nameClean: "chickpeas",
        original: "1 can (15 oz) chickpeas, drained and rinsed",
        originalName: "chickpeas, drained and rinsed",
        amount: 15,
        unit: "oz",
        meta: ["drained", "rinsed"],
        measures: {
          us: { amount: 15, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 425, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 20035,
        aisle: "Pasta and Rice",
        image: "uncooked-quinoa.png",
        consistency: "solid",
        name: "quinoa",
        nameClean: "quinoa",
        original: "1 cup quinoa",
        originalName: "quinoa",
        amount: 1,
        unit: "cup",
        meta: [],
        measures: {
          us: { amount: 1, unitShort: "cup", unitLong: "cup" },
          metric: { amount: 170, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 11233,
        aisle: "Produce",
        image: "kale.jpg",
        consistency: "solid",
        name: "kale",
        nameClean: "kale",
        original: "2 cups kale, chopped",
        originalName: "kale, chopped",
        amount: 2,
        unit: "cups",
        meta: ["chopped"],
        measures: {
          us: { amount: 2, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 67, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 9037,
        aisle: "Produce",
        image: "avocado.jpg",
        consistency: "solid",
        name: "avocado",
        nameClean: "avocado",
        original: "1 avocado, sliced",
        originalName: "avocado, sliced",
        amount: 1,
        unit: "",
        meta: ["sliced"],
        measures: {
          us: { amount: 1, unitShort: "", unitLong: "" },
          metric: { amount: 1, unitShort: "", unitLong: "" },
        },
      },
      {
        id: 12698,
        aisle: "Baking",
        image: "tahini-paste.png",
        consistency: "solid",
        name: "tahini",
        nameClean: "tahini",
        original: "3 tablespoons tahini",
        originalName: "tahini",
        amount: 3,
        unit: "tablespoons",
        meta: [],
        measures: {
          us: { amount: 3, unitShort: "Tbsp", unitLong: "tablespoons" },
          metric: { amount: 45, unitShort: "ml", unitLong: "milliliters" },
        },
      },
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Preheat oven to 400°F (200°C).",
            ingredients: [],
            equipment: [{ id: 404784, name: "oven", image: "oven.jpg" }],
          },
          {
            number: 2,
            step: "Toss chickpeas with olive oil, paprika, and cumin. Roast for 25 minutes.",
            ingredients: [
              { id: 16057, name: "chickpeas", image: "chickpeas.png" },
              { id: 4053, name: "olive oil", image: "olive-oil.jpg" },
            ],
            equipment: [{ id: 404784, name: "oven", image: "oven.jpg" }],
          },
          {
            number: 3,
            step: "Cook quinoa according to package directions.",
            ingredients: [{ id: 20035, name: "quinoa", image: "uncooked-quinoa.png" }],
            equipment: [],
          },
          {
            number: 4,
            step: "Massage kale with lemon juice and salt.",
            ingredients: [
              { id: 11233, name: "kale", image: "kale.jpg" },
              { id: 9152, name: "lemon juice", image: "lemon-juice.jpg" },
            ],
            equipment: [],
          },
          {
            number: 5,
            step: "Arrange all components in bowls and drizzle with tahini dressing.",
            ingredients: [{ id: 12698, name: "tahini", image: "tahini-paste.png" }],
            equipment: [{ id: 404783, name: "bowl", image: "bowl.jpg" }],
          },
        ],
      },
    ],
  },
  {
    id: 1003,
    title: "Classic Margherita Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
    servings: 4,
    readyInMinutes: 45,
    preparationMinutes: 20,
    cookingMinutes: 25,
    healthScore: 58,
    pricePerServing: 195.75,
    cheap: true,
    vegan: false,
    vegetarian: true,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    veryPopular: true,
    sustainable: false,
    aggregateLikes: 2134,
    cuisines: ["Italian"],
    diets: ["vegetarian"],
    dishTypes: ["lunch", "main course", "dinner"],
    occasions: ["casual dining", "game day"],
    instructions:
      "Preheat oven to 475°F (245°C) with pizza stone inside. Roll out pizza dough on a floured surface to desired thickness. Spread tomato sauce evenly over dough, leaving a 1-inch border. Tear fresh mozzarella and distribute over sauce. Add fresh basil leaves. Drizzle with olive oil and season with salt. Transfer to hot pizza stone and bake for 12-15 minutes until crust is golden and cheese is bubbly. Let cool for 2 minutes before slicing.",
    extendedIngredients: [
      {
        id: 93610,
        aisle: "Bakery/Bread",
        image: "pizza-dough.jpg",
        consistency: "solid",
        name: "pizza dough",
        nameClean: "pizza dough",
        original: "1 lb pizza dough",
        originalName: "pizza dough",
        amount: 1,
        unit: "lb",
        meta: [],
        measures: {
          us: { amount: 1, unitShort: "lb", unitLong: "pound" },
          metric: { amount: 454, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 11887,
        aisle: "Canned and Jarred",
        image: "tomato-sauce.jpg",
        consistency: "liquid",
        name: "tomato sauce",
        nameClean: "tomato sauce",
        original: "1 cup tomato sauce",
        originalName: "tomato sauce",
        amount: 1,
        unit: "cup",
        meta: [],
        measures: {
          us: { amount: 1, unitShort: "cup", unitLong: "cup" },
          metric: { amount: 245, unitShort: "ml", unitLong: "milliliters" },
        },
      },
      {
        id: 1026,
        aisle: "Cheese",
        image: "mozzarella.png",
        consistency: "solid",
        name: "fresh mozzarella",
        nameClean: "mozzarella",
        original: "8 oz fresh mozzarella",
        originalName: "fresh mozzarella",
        amount: 8,
        unit: "oz",
        meta: ["fresh"],
        measures: {
          us: { amount: 8, unitShort: "oz", unitLong: "ounces" },
          metric: { amount: 227, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 2044,
        aisle: "Produce",
        image: "basil.jpg",
        consistency: "solid",
        name: "fresh basil",
        nameClean: "basil",
        original: "1/4 cup fresh basil leaves",
        originalName: "fresh basil leaves",
        amount: 0.25,
        unit: "cup",
        meta: ["fresh"],
        measures: {
          us: { amount: 0.25, unitShort: "cup", unitLong: "cups" },
          metric: { amount: 6, unitShort: "g", unitLong: "grams" },
        },
      },
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Preheat oven to 475°F with pizza stone inside.",
            ingredients: [],
            equipment: [
              { id: 404784, name: "oven", image: "oven.jpg" },
              { id: 404783, name: "pizza stone", image: "pizza-stone.jpg" },
            ],
          },
          {
            number: 2,
            step: "Roll out pizza dough on a floured surface.",
            ingredients: [{ id: 93610, name: "pizza dough", image: "pizza-dough.jpg" }],
            equipment: [{ id: 404746, name: "rolling pin", image: "rolling-pin.jpg" }],
          },
          {
            number: 3,
            step: "Spread tomato sauce over dough, leaving a border.",
            ingredients: [{ id: 11887, name: "tomato sauce", image: "tomato-sauce.jpg" }],
            equipment: [],
          },
          {
            number: 4,
            step: "Add torn mozzarella and fresh basil leaves.",
            ingredients: [
              { id: 1026, name: "mozzarella", image: "mozzarella.png" },
              { id: 2044, name: "basil", image: "basil.jpg" },
            ],
            equipment: [],
          },
          {
            number: 5,
            step: "Bake for 12-15 minutes until golden and bubbly.",
            ingredients: [],
            equipment: [{ id: 404784, name: "oven", image: "oven.jpg" }],
          },
        ],
      },
    ],
  },
  {
    id: 1004,
    title: "Chocolate Chip Cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
    servings: 24,
    readyInMinutes: 25,
    preparationMinutes: 10,
    cookingMinutes: 15,
    healthScore: 12,
    pricePerServing: 45.8,
    cheap: true,
    vegan: false,
    vegetarian: true,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    veryPopular: true,
    sustainable: false,
    aggregateLikes: 3542,
    cuisines: ["American"],
    diets: ["vegetarian"],
    dishTypes: ["dessert", "snack"],
    occasions: ["baking", "kids party"],
    instructions:
      "Preheat oven to 375°F (190°C). Cream together butter and sugars until fluffy. Beat in eggs and vanilla. In a separate bowl, whisk flour, baking soda, and salt. Gradually mix dry ingredients into wet ingredients. Fold in chocolate chips. Drop tablespoon-sized balls of dough onto baking sheets. Bake for 10-12 minutes until edges are golden. Cool on baking sheet for 5 minutes before transferring to a wire rack.",
    extendedIngredients: [
      {
        id: 20081,
        aisle: "Baking",
        image: "flour.png",
        consistency: "solid",
        name: "all-purpose flour",
        nameClean: "all purpose flour",
        original: "2 1/4 cups all-purpose flour",
        originalName: "all-purpose flour",
        amount: 2.25,
        unit: "cups",
        meta: [],
        measures: {
          us: { amount: 2.25, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 281, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 1001,
        aisle: "Milk, Eggs, Other Dairy",
        image: "butter-sliced.jpg",
        consistency: "solid",
        name: "butter",
        nameClean: "butter",
        original: "1 cup (2 sticks) butter, softened",
        originalName: "butter, softened",
        amount: 1,
        unit: "cup",
        meta: ["softened"],
        measures: {
          us: { amount: 1, unitShort: "cup", unitLong: "cup" },
          metric: { amount: 227, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 19081,
        aisle: "Baking",
        image: "milk-chocolate-chips.jpg",
        consistency: "solid",
        name: "chocolate chips",
        nameClean: "chocolate chips",
        original: "2 cups chocolate chips",
        originalName: "chocolate chips",
        amount: 2,
        unit: "cups",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 340, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 1123,
        aisle: "Milk, Eggs, Other Dairy",
        image: "egg.png",
        consistency: "solid",
        name: "eggs",
        nameClean: "eggs",
        original: "2 large eggs",
        originalName: "eggs",
        amount: 2,
        unit: "large",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "large", unitLong: "larges" },
          metric: { amount: 2, unitShort: "large", unitLong: "larges" },
        },
      },
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Preheat oven to 375°F (190°C).",
            ingredients: [],
            equipment: [{ id: 404784, name: "oven", image: "oven.jpg" }],
          },
          {
            number: 2,
            step: "Cream together butter and sugars until fluffy.",
            ingredients: [{ id: 1001, name: "butter", image: "butter-sliced.jpg" }],
            equipment: [{ id: 404726, name: "mixer", image: "hand-mixer.png" }],
          },
          {
            number: 3,
            step: "Beat in eggs and vanilla.",
            ingredients: [{ id: 1123, name: "eggs", image: "egg.png" }],
            equipment: [],
          },
          {
            number: 4,
            step: "Mix dry ingredients, then combine with wet ingredients.",
            ingredients: [],
            equipment: [{ id: 404783, name: "bowl", image: "bowl.jpg" }],
          },
          {
            number: 5,
            step: "Fold in chocolate chips and drop onto baking sheets.",
            ingredients: [{ id: 19081, name: "chocolate chips", image: "milk-chocolate-chips.jpg" }],
            equipment: [{ id: 404727, name: "baking sheet", image: "baking-sheet.jpg" }],
          },
          {
            number: 6,
            step: "Bake for 10-12 minutes until edges are golden.",
            ingredients: [],
            equipment: [{ id: 404784, name: "oven", image: "oven.jpg" }],
          },
        ],
      },
    ],
  },
  {
    id: 1005,
    title: "Thai Green Curry",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e9e90?w=400",
    servings: 4,
    readyInMinutes: 40,
    preparationMinutes: 15,
    cookingMinutes: 25,
    healthScore: 68,
    pricePerServing: 385.2,
    cheap: false,
    vegan: false,
    vegetarian: false,
    glutenFree: true,
    dairyFree: false,
    veryHealthy: false,
    veryPopular: true,
    sustainable: false,
    aggregateLikes: 1563,
    cuisines: ["Thai", "Asian"],
    diets: [],
    dishTypes: ["lunch", "main course", "dinner"],
    occasions: [],
    instructions:
      "Heat coconut milk in a large pot. Add green curry paste and stir until dissolved. Add chicken pieces and simmer for 15 minutes. Add bell peppers, snap peas, and Thai basil. Cook for another 5 minutes. Season with fish sauce and lime juice. Serve over jasmine rice.",
    extendedIngredients: [
      {
        id: 1001,
        aisle: "International",
        image: "coconut-milk.jpg",
        consistency: "liquid",
        name: "coconut milk",
        nameClean: "coconut milk",
        original: "2 cans coconut milk",
        originalName: "coconut milk",
        amount: 2,
        unit: "cans",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "cans", unitLong: "cans" },
          metric: { amount: 400, unitShort: "ml", unitLong: "milliliters" },
        },
      },
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Heat coconut milk in a large pot.",
            ingredients: [],
            equipment: [{ id: 404645, name: "pot", image: "pot.jpg" }],
          },
          {
            number: 2,
            step: "Add green curry paste and stir until dissolved.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 3,
            step: "Add chicken and simmer for 15 minutes.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 4,
            step: "Add vegetables and cook for 5 minutes.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 5,
            step: "Season with fish sauce and lime juice. Serve over rice.",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
  },
  {
    id: 1006,
    title: "Mediterranean Salmon",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
    servings: 2,
    readyInMinutes: 30,
    preparationMinutes: 10,
    cookingMinutes: 20,
    healthScore: 88,
    pricePerServing: 595.0,
    cheap: false,
    vegan: false,
    vegetarian: false,
    glutenFree: true,
    dairyFree: true,
    veryHealthy: true,
    veryPopular: false,
    sustainable: true,
    aggregateLikes: 923,
    cuisines: ["Mediterranean", "Seafood"],
    diets: ["gluten free", "dairy free"],
    dishTypes: ["lunch", "main course", "dinner"],
    occasions: ["date night"],
    instructions:
      "Preheat oven to 400°F. Place salmon fillets on parchment paper. Top with sliced lemons, cherry tomatoes, olives, and capers. Drizzle with olive oil and season with oregano. Wrap parchment around salmon and bake for 18-20 minutes. Serve immediately with roasted vegetables.",
    extendedIngredients: [
      {
        id: 15076,
        aisle: "Seafood",
        image: "salmon-fillet.jpg",
        consistency: "solid",
        name: "salmon fillets",
        nameClean: "salmon",
        original: "2 salmon fillets (6 oz each)",
        originalName: "salmon fillets",
        amount: 2,
        unit: "fillets",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "fillets", unitLong: "fillets" },
          metric: { amount: 170, unitShort: "g", unitLong: "grams" },
        },
      },
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Preheat oven to 400°F.",
            ingredients: [],
            equipment: [{ id: 404784, name: "oven", image: "oven.jpg" }],
          },
          {
            number: 2,
            step: "Place salmon on parchment and top with vegetables.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 3,
            step: "Drizzle with olive oil and season.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 4,
            step: "Bake for 18-20 minutes.",
            ingredients: [],
            equipment: [{ id: 404784, name: "oven", image: "oven.jpg" }],
          },
        ],
      },
    ],
  },
  {
    id: 1007,
    title: "Caprese Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
    servings: 2,
    readyInMinutes: 10,
    preparationMinutes: 10,
    cookingMinutes: 0,
    healthScore: 82,
    pricePerServing: 225.5,
    cheap: false,
    vegan: false,
    vegetarian: true,
    glutenFree: true,
    dairyFree: false,
    veryHealthy: true,
    veryPopular: false,
    sustainable: false,
    aggregateLikes: 1247,
    cuisines: ["Italian"],
    diets: ["vegetarian", "gluten free"],
    dishTypes: ["salad", "appetizer", "side dish"],
    occasions: ["summer", "lunch"],
    instructions:
      "Slice fresh tomatoes and mozzarella into thin rounds. Arrange alternately on a plate. Top with fresh basil leaves. Drizzle with balsamic vinegar and extra virgin olive oil. Season with sea salt and cracked pepper to taste. Serve immediately.",
    extendedIngredients: [
      {
        id: 11529,
        aisle: "Produce",
        image: "tomato.jpg",
        consistency: "solid",
        name: "tomatoes",
        nameClean: "tomato",
        original: "2 large ripe tomatoes",
        originalName: "ripe tomatoes",
        amount: 2,
        unit: "large",
        meta: ["ripe"],
        measures: {
          us: { amount: 2, unitShort: "large", unitLong: "larges" },
          metric: { amount: 400, unitShort: "g", unitLong: "grams" },
        },
      },
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Slice tomatoes and mozzarella.",
            ingredients: [],
            equipment: [{ id: 404668, name: "knife", image: "knife.jpg" }],
          },
          {
            number: 2,
            step: "Arrange alternately on a plate.",
            ingredients: [],
            equipment: [{ id: 404783, name: "plate", image: "plate.jpg" }],
          },
          {
            number: 3,
            step: "Top with basil and drizzle with oil and vinegar.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 4,
            step: "Season and serve immediately.",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
  },
  {
    id: 1008,
    title: "Beef Tacos",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400",
    servings: 4,
    readyInMinutes: 25,
    preparationMinutes: 10,
    cookingMinutes: 15,
    healthScore: 55,
    pricePerServing: 185.3,
    cheap: true,
    vegan: false,
    vegetarian: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    veryPopular: true,
    sustainable: false,
    aggregateLikes: 2847,
    cuisines: ["Mexican"],
    diets: [],
    dishTypes: ["lunch", "main course", "dinner"],
    occasions: ["casual dining", "party"],
    instructions:
      "Brown ground beef in a skillet with diced onions. Add taco seasoning and a splash of water. Simmer for 5 minutes. Warm tortillas. Fill tortillas with seasoned beef and desired toppings: shredded lettuce, diced tomatoes, shredded cheese, sour cream, salsa. Fold and serve hot.",
    extendedIngredients: [
      {
        id: 10017143,
        aisle: "Meat",
        image: "ground-beef.jpg",
        consistency: "solid",
        name: "ground beef",
        nameClean: "ground beef",
        original: "1 lb ground beef",
        originalName: "ground beef",
        amount: 1,
        unit: "lb",
        meta: [],
        measures: {
          us: { amount: 1, unitShort: "lb", unitLong: "pound" },
          metric: { amount: 454, unitShort: "g", unitLong: "grams" },
        },
      },
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Brown ground beef with onions in a skillet.",
            ingredients: [],
            equipment: [{ id: 404645, name: "skillet", image: "pan.png" }],
          },
          {
            number: 2,
            step: "Add taco seasoning and water. Simmer 5 minutes.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 3,
            step: "Warm tortillas.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 4,
            step: "Fill tortillas with beef and toppings.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 5,
            step: "Fold and serve hot.",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
  },
  {
    id: 1009,
    title: "Minestrone Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
    servings: 6,
    readyInMinutes: 60,
    preparationMinutes: 15,
    cookingMinutes: 45,
    healthScore: 75,
    pricePerServing: 95.5,
    cheap: true,
    vegan: true,
    vegetarian: true,
    glutenFree: true,
    dairyFree: true,
    veryHealthy: true,
    veryPopular: false,
    sustainable: true,
    aggregateLikes: 687,
    cuisines: ["Italian"],
    diets: ["vegan", "vegetarian", "gluten free", "dairy free"],
    dishTypes: ["soup", "lunch", "dinner"],
    occasions: ["comfort food", "winter"],
    instructions:
      "Heat olive oil in a large pot. Sauté diced onion, celery, and carrots until softened. Add garlic and cook for 1 minute. Pour in vegetable broth and bring to a boil. Add diced tomatoes, beans, zucchini, and pasta. Simmer for 30 minutes until pasta is tender. Season with salt, pepper, and basil. Serve hot.",
    extendedIngredients: [
      {
        id: 6194,
        aisle: "Canned and Jarred",
        image: "vegetable-broth.jpg",
        consistency: "liquid",
        name: "vegetable broth",
        nameClean: "vegetable broth",
        original: "6 cups vegetable broth",
        originalName: "vegetable broth",
        amount: 6,
        unit: "cups",
        meta: [],
        measures: {
          us: { amount: 6, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 1440, unitShort: "ml", unitLong: "milliliters" },
        },
      },
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Heat olive oil and sauté vegetables.",
            ingredients: [],
            equipment: [{ id: 404645, name: "pot", image: "pot.jpg" }],
          },
          {
            number: 2,
            step: "Add garlic and cook briefly.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 3,
            step: "Pour in broth and bring to boil.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 4,
            step: "Add vegetables, beans, and pasta.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 5,
            step: "Simmer for 30 minutes.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 6,
            step: "Season and serve hot.",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
  },
];

/**
 * Retrieve all mock recipes
 * 
 * @returns An array of all available mock recipes
 */
export const getAllMockRecipes = (): Recipe[] => {
  return mockRecipes;
};

/**
 * Get a recipe by its ID
 * 
 * @param id - The unique identifier of the recipe
 * @returns The recipe object if found, undefined otherwise
 */
export const getMockRecipeById = (id: number): Recipe | undefined => {
  return mockRecipes.find((recipe) => recipe.id === id);
};

/**
 * Filter mock recipes based on search criteria
 * 
 * Applies multiple filters to the mock recipe collection, matching the behavior
 * of the Spoonacular API /recipes/complexSearch endpoint.
 * 
 * @param options - Filter options (query, ready time, servings, diet, type)
 * @returns An array of filtered recipe objects
 * 
 * @example
 * // Search for vegetarian recipes ready in under 30 minutes
 * const recipes = filterMockRecipes({
 *   diet: 'vegetarian',
 *   maxReadyTime: 30
 * });
 */
export const filterMockRecipes = (options: MockFilterOptions): Recipe[] => {
  return mockRecipes.filter((recipe) => {
    // Filter by query (search in title)
    if (options.query && !recipe.title.toLowerCase().includes(options.query.toLowerCase())) {
      return false;
    }

    // Filter by max ready time
    if (options.maxReadyTime && recipe.readyInMinutes && (recipe.readyInMinutes as number) > options.maxReadyTime) {
      return false;
    }

    // Filter by servings
    if (options.minServings && recipe.servings && (recipe.servings as number) < options.minServings) {
      return false;
    }
    if (options.maxServings && recipe.servings && (recipe.servings as number) > options.maxServings) {
      return false;
    }

    // Filter by diet
    if (options.diet) {
      const dietLower = options.diet.toLowerCase();
      if (dietLower === "vegan" && !recipe.vegan) return false;
      if (dietLower === "vegetarian" && !recipe.vegetarian) return false;
      if (dietLower === "gluten free" && !recipe.glutenFree) return false;
    }

    // Filter by type (dish type)
    if (options.type && Array.isArray(recipe.dishTypes)) {
      const hasType = recipe.dishTypes.some((dt) => dt.toLowerCase().includes(options.type!.toLowerCase()));
      if (!hasType) return false;
    }

    return true;
  });
};
