import { RECIPES } from '../data/recipes';
import type{ Recipe, RecipeCategory } from '../types';
import RecipeCard from './RecipeCard';

interface RecipeGridProps {
  selectedCategory: RecipeCategory;
  setSelectedCategory: (cat: RecipeCategory) => void;
  searchTerm: string;
  onViewDetails: (recipe: Recipe) => void;
  onUnlockClick: () => void;
}

export default function RecipeGrid({ selectedCategory, setSelectedCategory, searchTerm, onViewDetails, onUnlockClick }: RecipeGridProps) {
  const filtered = RECIPES.filter(recipe => {
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    const query = searchTerm.toLowerCase().trim();
    const matchesSearch = query === '' ||
      recipe.title.toLowerCase().includes(query) ||
      recipe.tagline.toLowerCase().includes(query) ||
      recipe.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const categories: { id: RecipeCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'cooking', label: 'Cooking' },
    { id: 'baking', label: 'Baking' },
    { id: 'juices', label: 'Juices' },
    { id: 'grilling', label: 'Grilling' },
    { id: 'desserts', label: 'Desserts' },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>

      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
          fontWeight: 800, fontStyle: 'italic',
          color: '#1A1A2E', marginBottom: '12px'
        }}>
          Explore the <span style={{ color: '#0D5C63' }}>Recipe</span>{' '}
          <span style={{ color: '#FF6B6B' }}>Collection</span>
        </h2>
        <p style={{ color: '#1A1A2E60', fontSize: '0.95rem' }}>
          {filtered.length} recipes found
        </p>
      </div>

      {/* Category Filter */}
      <div style={{
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'center', gap: '10px',
        marginBottom: '48px'
      }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            style={{
              backgroundColor: selectedCategory === cat.id ? '#0D5C63' : 'white',
              color: selectedCategory === cat.id ? 'white' : '#1A1A2E80',
              border: `1.5px solid ${selectedCategory === cat.id ? '#0D5C63' : 'rgba(13,92,99,0.15)'}`,
              borderRadius: '50px',
              padding: '8px 20px',
              fontSize: '0.82rem', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.2s'
            }}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0', color: '#1A1A2E60' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🍽️</div>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1A1A2E' }}>
            No recipes found
          </h3>
          <p style={{ marginTop: '8px' }}>Try a different search or category</p>
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
