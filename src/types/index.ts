export type MainCategory = 
  | 'all'
  | 'baking'
  | 'ugandan'
  | 'international'
  | 'grilling'
  | 'desserts'
  | 'drinks';

export type SubCategory =
  | 'all'
  | 'cookies' | 'cakes' | 'bread' | 'pastries' | 'cream'
  | 'traditional' | 'ugandan-snacks' | 'ugandan-drinks' | 'street-food'
  | 'fire-smoke' | 'ocean-coast' | 'spice-routes' | 'noodle-bowl' | 'garden-earth' | 'fine-french'
  | 'grilled-meats' | 'grilled-seafood' | 'grilled-vegetables'
  | 'ice-cream' | 'dessert-cakes' | 'puddings' | 'chocolate'
  | 'cold-press' | 'smoothies' | 'tonics' | 'traditional-drinks';

export type Difficulty = 'Easy' | 'Intermediate' | 'Advanced';

export interface Ingredient {
  name: string;
  amount: string;
}

export interface Recipe {
  id: string;
  title: string;
  tagline: string;
  mainCategory: MainCategory;
  subCategory: SubCategory;
  difficulty: Difficulty;
  time: string;
  servings: number;
  image: string;
  isPremium: boolean;
  chefNote: string;
  nutrition: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
  };
  ingredients: Ingredient[];
  steps: string[];
  featuredIngredients: string[];
}

export interface IngredientSpotlight {
  id: string;
  name: string;
  tagline: string;
  story: string;
  howToStore: string;
  howToPrep: string;
  substitute: string;
  image: string;
  category: 'herbs' | 'spices' | 'vegetables' | 'fruits' | 'grains' | 'dairy' | 'proteins';
  color: string;
}

export interface SubscriptionPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  isFeatured: boolean;
}