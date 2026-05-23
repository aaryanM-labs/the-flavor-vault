export type RecipeCategory = 'all' | 'cooking' | 'baking' | 'juices' | 'grilling' | 'desserts';

export type Difficulty = 'Easy' | 'Intermediate' | 'Advanced';

export interface Ingredient {
  name: string;
  amount: string;
}

export interface Recipe {
  id: string;
  title: string;
  tagline: string;
  category: 'cooking' | 'baking' | 'juices' | 'grilling' | 'desserts';
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