import { useState } from 'react';
import { RECIPES } from '../data/recipes';
import type { Recipe, MainCategory, SubCategory } from '../types';
import RecipeCard from './RecipeCard';

interface RecipeGridProps {
  searchTerm: string;
  onViewDetails: (recipe: Recipe) => void;
  onUnlockClick: () => void;
}

const CATEGORY_MAP: {
  id: MainCategory;
  label: string;
  color: string;
  subcategories: { id: SubCategory; label: string }[];
}[] = [
  { id: 'all', label: 'All Recipes', color: '#0D5C63', subcategories: [] },
  {
    id: 'baking', label: 'Baking', color: '#9B72CF',
    subcategories: [
      { id: 'cookies', label: 'Cookies' },
      { id: 'cakes', label: 'Cakes' },
      { id: 'bread', label: 'Bread & Sourdough' },
      { id: 'pastries', label: 'Pastries' },
      { id: 'cream', label: 'Cream & Frosting' },
    ]
  },
  {
    id: 'ugandan', label: 'Ugandan Kitchen', color: '#8B5E3C',
    subcategories: [
      { id: 'traditional', label: 'Traditional' },
      { id: 'street-food', label: 'Street Food' },
      { id: 'ugandan-snacks', label: 'Snacks' },
      { id: 'ugandan-drinks', label: 'Drinks' },
    ]
  },
  {
    id: 'international', label: 'International', color: '#0D5C63',
    subcategories: [
      { id: 'spice-routes', label: 'Spice Routes' },
      { id: 'noodle-bowl', label: 'The Noodle Bowl' },
      { id: 'fire-smoke', label: 'Fire & Smoke' },
      { id: 'ocean-coast', label: 'Ocean & Coast' },
      { id: 'fine-french', label: 'Fine & French' },
      { id: 'garden-earth', label: 'Garden & Earth' },
    ]
  },
  {
    id: 'grilling', label: 'Grilling', color: '#2D2D2D',
    subcategories: [
      { id: 'grilled-meats', label: 'Meats' },
      { id: 'grilled-seafood', label: 'Seafood' },
      { id: 'grilled-vegetables', label: 'Vegetables' },
    ]
  },
  {
    id: 'desserts', label: 'Desserts', color: '#E11D48',
    subcategories: [
      { id: 'chocolate', label: 'Chocolate' },
      { id: 'ice-cream', label: 'Ice Cream' },
      { id: 'dessert-cakes', label: 'Cakes' },
      { id: 'puddings', label: 'Puddings' },
    ]
  },
  {
    id: 'drinks', label: 'Drinks & Juices', color: '#059669',
    subcategories: [
      { id: 'smoothies', label: 'Smoothies' },
      { id: 'tonics', label: 'Tonics' },
      { id: 'cold-press', label: 'Cold Press' },
      { id: 'traditional-drinks', label: 'Traditional' },
    ]
  },
];

export default function RecipeGrid({ searchTerm, onViewDetails, onUnlockClick }: RecipeGridProps) {
  const [mainCategory, setMainCategory] = useState<MainCategory>('all');
  const [subCategory, setSubCategory] = useState<SubCategory>('all');

  const activeCat = CATEGORY_MAP.find(c => c.id === mainCategory);
  const activeColor = activeCat?.color || '#0D5C63';

  const filtered = RECIPES.filter(recipe => {
    const matchesMain = mainCategory === 'all' || recipe.mainCategory === mainCategory;
    const matchesSub = subCategory === 'all' || recipe.subCategory === subCategory;
    const query = searchTerm.toLowerCase().trim();
    const matchesSearch = query === '' ||
      recipe.title.toLowerCase().includes(query) ||
      recipe.tagline.toLowerCase().includes(query) ||
      recipe.mainCategory.toLowerCase().includes(query) ||
      recipe.featuredIngredients.some((i: string) => i.toLowerCase().includes(query));
    return matchesMain && matchesSub && matchesSearch;
  });

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>

      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
          fontWeight: 800, fontStyle: 'italic',
          color: '#1A1A2E', marginBottom: '8px'
        }}>
          Explore the <span style={{ color: activeColor }}>Recipe</span>{' '}
          <span style={{ color: '#FF6B6B' }}>Collection</span>
        </h2>
        <p style={{ color: '#1A1A2E60', fontSize: '0.9rem' }}>
          {filtered.length} recipes found
        </p>
      </div>

      {/* Level 1 */}
      <div style={{
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'center', gap: '10px',
        marginBottom: '16px'
      }}>
        {CATEGORY_MAP.map(cat => (
          <button
            key={cat.id}
            onClick={() => { setMainCategory(cat.id); setSubCategory('all'); }}
            style={{
              backgroundColor: mainCategory === cat.id ? cat.color : 'white',
              color: mainCategory === cat.id ? 'white' : '#1A1A2E80',
              border: `1.5px solid ${mainCategory === cat.id ? cat.color : 'rgba(0,0,0,0.1)'}`,
              borderRadius: '50px',
              padding: '10px 22px',
              fontSize: '0.85rem', fontWeight: 700,
              cursor: 'pointer', transition: 'all 0.2s'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Level 2 */}
      {activeCat && activeCat.subcategories.length > 0 && (
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'center', gap: '8px',
          marginBottom: '48px', padding: '16px',
          backgroundColor: `${activeColor}08`,
          borderRadius: '16px',
          border: `1px solid ${activeColor}20`
        }}>
          <button
            onClick={() => setSubCategory('all')}
            style={{
              backgroundColor: subCategory === 'all' ? `${activeColor}20` : 'transparent',
              color: activeColor,
              border: `1px solid ${activeColor}40`,
              borderRadius: '50px', padding: '6px 16px',
              fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer'
            }}
          >
            All {activeCat.label}
          </button>
          {activeCat.subcategories.map(sub => (
            <button
              key={sub.id}
              onClick={() => setSubCategory(sub.id)}
              style={{
                backgroundColor: subCategory === sub.id ? activeColor : 'transparent',
                color: subCategory === sub.id ? 'white' : activeColor,
                border: `1px solid ${activeColor}40`,
                borderRadius: '50px', padding: '6px 16px',
                fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer'
              }}
            >
              {sub.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🍽️</div>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1A1A2E' }}>
            No recipes found
          </h3>
          <p style={{ marginTop: '8px', color: '#1A1A2E60' }}>Try a different search or category</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '28px'
        }}>
          {filtered.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onViewDetails={onViewDetails}
              onUnlockClick={onUnlockClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}