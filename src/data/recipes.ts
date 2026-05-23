import type { Recipe } from '../types';

export const RECIPES: Recipe[] = [
  {
    id: 'jerk-chicken',
    title: 'Jamaican Jerk Chicken',
    tagline: 'Bold, smoky, and fiery — marinated overnight in a blend of scotch bonnets and allspice.',
    category: 'grilling',
    difficulty: 'Intermediate',
    time: '45 Mins',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1000&auto=format&fit=crop',
    isPremium: false,
    chefNote: 'The secret is the overnight marinade. Never rush jerk chicken.',
    nutrition: { calories: '420 kcal', protein: '38g', carbs: '8g', fat: '22g' },
    ingredients: [
      { name: 'Chicken thighs', amount: '8 pieces' },
      { name: 'Scotch bonnet peppers', amount: '3' },
      { name: 'Allspice berries', amount: '2 tbsp' },
      { name: 'Fresh thyme', amount: '4 sprigs' },
      { name: 'Garlic cloves', amount: '6' },
      { name: 'Brown sugar', amount: '2 tbsp' },
      { name: 'Soy sauce', amount: '3 tbsp' },
      { name: 'Lime juice', amount: '2 limes' }
    ],
    steps: [
      'Blend scotch bonnets, allspice, thyme, garlic, brown sugar, soy sauce and lime juice into a smooth marinade.',
      'Score the chicken thighs deeply and coat thoroughly with the marinade. Cover and refrigerate overnight.',
      'Bring chicken to room temperature 30 minutes before grilling.',
      'Grill on medium-high heat for 20 minutes each side until charred and cooked through.',
      'Rest for 5 minutes before serving with rice and peas.'
    ]
  },
  {
    id: 'matoke-stew',
    title: 'Ugandan Matoke Stew',
    tagline: 'Slow-cooked green bananas in a rich groundnut and tomato sauce — pure East African comfort.',
    category: 'cooking',
    difficulty: 'Easy',
    time: '60 Mins',
    servings: 6,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1000&auto=format&fit=crop',
    isPremium: false,
    chefNote: 'Wrapping matoke in banana leaves while steaming intensifies the flavor dramatically.',
    nutrition: { calories: '280 kcal', protein: '8g', carbs: '52g', fat: '6g' },
    ingredients: [
      { name: 'Green bananas (matoke)', amount: '8, peeled' },
      { name: 'Groundnut paste', amount: '4 tbsp' },
      { name: 'Tomatoes', amount: '4, chopped' },
      { name: 'Onion', amount: '2, sliced' },
      { name: 'Garlic', amount: '4 cloves' },
      { name: 'Fresh ginger', amount: '2cm piece' },
      { name: 'Vegetable stock', amount: '500ml' }
    ],
    steps: [
      'Peel and halve the matoke, place in cold salted water to prevent browning.',
      'Fry onions, garlic and ginger until golden and fragrant.',
      'Add tomatoes and cook until they break down into a thick sauce.',
      'Stir in groundnut paste and stock, simmer for 5 minutes.',
      'Add matoke, cover and cook on low heat for 40 minutes until tender.',
      'Serve hot with steamed rice or chapati.'
    ]
  },
  {
    id: 'chocolate-lava',
    title: 'Dark Chocolate Lava Cake',
    tagline: 'A crisp shell hiding a river of molten 70% dark chocolate inside.',
    category: 'desserts',
    difficulty: 'Advanced',
    time: '30 Mins',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop',
    isPremium: true,
    chefNote: 'Timing is everything — 12 minutes exactly. One extra minute and you lose the lava.',
    nutrition: { calories: '520 kcal', protein: '8g', carbs: '48g', fat: '34g' },
    ingredients: [
      { name: '70% dark chocolate', amount: '200g' },
      { name: 'Unsalted butter', amount: '100g' },
      { name: 'Eggs', amount: '4' },
      { name: 'Egg yolks', amount: '4' },
      { name: 'Caster sugar', amount: '80g' },
      { name: 'Plain flour', amount: '40g' },
      { name: 'Cocoa powder', amount: 'For dusting' }
    ],
    steps: [
      'Melt chocolate and butter together over a bain marie until completely smooth.',
      'Whisk eggs, yolks and sugar until pale and doubled in volume.',
      'Fold the chocolate mixture into the egg mixture gently.',
      'Sift in flour and fold until just combined — do not overmix.',
      'Pour into buttered and cocoa-dusted ramekins. Refrigerate for 20 minutes.',
      'Bake at 200°C for exactly 12 minutes.',
      'Turn out immediately and serve with vanilla ice cream.'
    ]
  },
  {
    id: 'mango-lassi',
    title: 'Fresh Alphonso Mango Lassi',
    tagline: 'Thick, cold, and fragrant — blended Alphonso mangoes with cardamom yoghurt.',
    category: 'juices',
    difficulty: 'Easy',
    time: '10 Mins',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=1000&auto=format&fit=crop',
    isPremium: false,
    chefNote: 'Only use Alphonso mangoes when in season — nothing else comes close.',
    nutrition: { calories: '180 kcal', protein: '6g', carbs: '34g', fat: '3g' },
    ingredients: [
      { name: 'Alphonso mangoes', amount: '2, peeled and cubed' },
      { name: 'Full fat yoghurt', amount: '300ml' },
      { name: 'Whole milk', amount: '100ml' },
      { name: 'Green cardamom', amount: '4 pods, ground' },
      { name: 'Honey', amount: '1 tbsp' },
      { name: 'Ice cubes', amount: 'Generous handful' }
    ],
    steps: [
      'Add all ingredients to a blender.',
      'Blend on high for 60 seconds until completely smooth.',
      'Taste and adjust sweetness with honey.',
      'Pour into chilled glasses over ice.',
      'Garnish with a pinch of ground cardamom and serve immediately.'
    ]
  },
  {
    id: 'sourdough',
    title: 'Classic Sourdough Loaf',
    tagline: 'A perfectly open crumb with a shattering crust — built from a 7-day wild starter.',
    category: 'baking',
    difficulty: 'Advanced',
    time: '24 Hrs',
    servings: 8,
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=1000&auto=format&fit=crop',
    isPremium: true,
    chefNote: 'Your starter is everything. Feed it daily for a week before baking.',
    nutrition: { calories: '180 kcal', protein: '7g', carbs: '36g', fat: '1g' },
    ingredients: [
      { name: 'Bread flour', amount: '500g' },
      { name: 'Active sourdough starter', amount: '100g' },
      { name: 'Water', amount: '375ml' },
      { name: 'Fine sea salt', amount: '10g' }
    ],
    steps: [
      'Mix flour and water, autolyse for 1 hour.',
      'Add starter and salt, incorporate fully.',
      'Perform 4 sets of stretch and folds over 2 hours.',
      'Bulk ferment at room temperature for 4-6 hours until 50% risen.',
      'Shape and place in a floured banneton.',
      'Cold proof in fridge overnight for 12-16 hours.',
      'Bake in a Dutch oven at 250°C for 20 minutes covered, then 25 minutes uncovered.',
      'Cool completely on a wire rack for at least 2 hours before cutting.'
    ]
  },
  {
    id: 'pad-thai',
    title: 'Authentic Pad Thai',
    tagline: 'Wok-charred rice noodles with tamarind, fish sauce, and crispy dried shrimp.',
    category: 'cooking',
    difficulty: 'Intermediate',
    time: '20 Mins',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=1000&auto=format&fit=crop',
    isPremium: false,
    chefNote: 'High heat is non-negotiable. A weak flame makes soggy Pad Thai.',
    nutrition: { calories: '480 kcal', protein: '22g', carbs: '64g', fat: '14g' },
    ingredients: [
      { name: 'Flat rice noodles', amount: '200g, soaked' },
      { name: 'Tiger prawns', amount: '150g' },
      { name: 'Eggs', amount: '2' },
      { name: 'Tamarind paste', amount: '3 tbsp' },
      { name: 'Fish sauce', amount: '2 tbsp' },
      { name: 'Palm sugar', amount: '1 tbsp' },
      { name: 'Bean sprouts', amount: '100g' },
      { name: 'Spring onions', amount: '3, sliced' },
      { name: 'Roasted peanuts', amount: '50g, crushed' }
    ],
    steps: [
      'Mix tamarind, fish sauce and palm sugar into your Pad Thai sauce.',
      'Heat wok until smoking. Add oil and fry prawns until pink, push to the side.',
      'Crack eggs into wok and scramble quickly.',
      'Add drained noodles and sauce, toss everything on high heat for 2 minutes.',
      'Add bean sprouts and spring onions, toss for 30 seconds.',
      'Serve immediately topped with crushed peanuts and a wedge of lime.'
    ]
  }
];