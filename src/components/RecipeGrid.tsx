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
  bg: string;
  subcategories: { id: SubCategory; label: string }[];
}[] = [
  { id: 'all', label: 'All Recipes', color: '#0D5C63', bg: '#E8F4F5', subcategories: [] },
  { id: 'baking', label: 'Baking', color: '#8B4513', bg: '#FAF0E6', subcategories: [
    { id: 'cookies', label: 'Cookies' }, { id: 'cakes', label: 'Cakes' },
    { id: 'bread', label: 'Bread' }, { id: 'pastries', label: 'Pastries' },
  ]},
  { id: 'ugandan', label: 'Ugandan Kitchen', color: '#E8651A', bg: '#FDF6EC', subcategories: [
    { id: 'traditional', label: 'Traditional' }, { id: 'street-food', label: 'Street Food' },
    { id: 'ugandan-snacks', label: 'Snacks' }, { id: 'ugandan-drinks', label: 'Drinks' },
  ]},
  { id: 'international', label: 'International', color: '#F59E0B', bg: '#1a2744', subcategories: [
    { id: 'spice-routes', label: 'Spice Routes' }, { id: 'noodle-bowl', label: 'Noodle Bowl' },
    { id: 'fine-french', label: 'Fine & French' }, { id: 'ocean-coast', label: 'Ocean & Coast' },
  ]},
  { id: 'grilling', label: 'Grilling', color: '#EA580C', bg: '#0D0D0D', subcategories: [
    { id: 'grilled-meats', label: 'Meats' }, { id: 'grilled-seafood', label: 'Seafood' },
  ]},
  { id: 'desserts', label: 'Desserts', color: '#9333EA', bg: '#FDF2F8', subcategories: [
    { id: 'chocolate', label: 'Chocolate' }, { id: 'ice-cream', label: 'Ice Cream' },
    { id: 'dessert-cakes', label: 'Cakes' },
  ]},
  { id: 'drinks', label: 'Drinks', color: '#16A34A', bg: '#F0FDF4', subcategories: [
    { id: 'smoothies', label: 'Smoothies' }, { id: 'tonics', label: 'Tonics' },
  ]},
];

export default function RecipeGrid({ searchTerm, onViewDetails, onUnlockClick }: RecipeGridProps) {
  const [mainCat, setMainCat] = useState<MainCategory>('all');
  const [subCat, setSubCat] = useState<SubCategory>('all');

  const activeCat = CATEGORY_MAP.find(c => c.id === mainCat);
  const accentColor = activeCat?.color || '#0D5C63';
  const isDark = mainCat === 'international' || mainCat === 'grilling';

  const filtered = RECIPES.filter(r => {
    const matchMain = mainCat === 'all' || r.mainCategory === mainCat;
    const matchSub = subCat === 'all' || r.subCategory === subCat;
    const q = searchTerm.toLowerCase();
    const matchSearch = !q || r.title.toLowerCase().includes(q) ||
      r.tagline.toLowerCase().includes(q) ||
      r.featuredIngredients.some((i: string) => i.toLowerCase().includes(q));
    return matchMain && matchSub && matchSearch;
  });

  return (
    <section style={{
      backgroundColor: isDark ? activeCat?.bg : '#FFFAF5',
      transition: 'background-color 0.4s ease',
      padding: '80px 0'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', marginBottom: '48px',
          flexWrap: 'wrap', gap: '24px'
        }}>
          <div>
            <div style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.68rem', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: accentColor, marginBottom: '10px'
            }}>
              ✦ Recipe Collection
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 700, fontStyle: 'italic',
              color: isDark ? 'white' : '#1A1A2E',
              lineHeight: 1
            }}>
              {mainCat === 'all' ? 'Explore Everything' : activeCat?.label}
            </h2>
          </div>
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.88rem', color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(26,26,46,0.4)'
          }}>
            {filtered.length} recipes
          </div>
        </div>

        {/* Level 1 — Main categories */}
        <div style={{
          display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px'
        }}>
          {CATEGORY_MAP.map(cat => (
            <button key={cat.id} onClick={() => { setMainCat(cat.id); setSubCat('all'); }} style={{
              backgroundColor: mainCat === cat.id ? cat.color : isDark ? 'rgba(255,255,255,0.08)' : 'white',
              color: mainCat === cat.id ? 'white' : isDark ? 'rgba(255,255,255,0.6)' : 'rgba(26,26,46,0.6)',
              border: `1.5px solid ${mainCat === cat.id ? cat.color : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
              borderRadius: '50px', padding: '10px 22px',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.8rem', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.2s'
            }}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Level 2 — Subcategories */}
        {activeCat && activeCat.subcategories.length > 0 && (
          <div style={{
            display: 'flex', gap: '8px', flexWrap: 'wrap',
            marginBottom: '48px', padding: '16px 20px',
            backgroundColor: `${accentColor}12`,
            borderRadius: '16px',
            border: `1px solid ${accentColor}25`
          }}>
            <button onClick={() => setSubCat('all')} style={{
              backgroundColor: subCat === 'all' ? accentColor : 'transparent',
              color: subCat === 'all' ? 'white' : accentColor,
              border: `1px solid ${accentColor}50`,
              borderRadius: '50px', padding: '6px 16px',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer'
            }}>
              All
            </button>
            {activeCat.subcategories.map(sub => (
              <button key={sub.id} onClick={() => setSubCat(sub.id)} style={{
                backgroundColor: subCat === sub.id ? accentColor : 'transparent',
                color: subCat === sub.id ? 'white' : accentColor,
                border: `1px solid ${accentColor}50`,
                borderRadius: '50px', padding: '6px 16px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer'
              }}>
                {sub.label}
              </button>
            ))}
          </div>
        )}

        {/* Recipe grid — bento layout */}
        {filtered.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '80px',
            color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(26,26,46,0.4)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🍽️</div>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontStyle: 'italic' }}>
              No recipes found
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {filtered.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onViewDetails={onViewDetails}
                onUnlockClick={onUnlockClick}
                isDark={isDark}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}