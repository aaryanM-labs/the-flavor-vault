import { INGREDIENTS } from '../data/ingredients';
import { RECIPES } from '../data/recipes';
import { ArrowLeft } from 'lucide-react';
import RecipeCard from './RecipeCard';
import type { Recipe } from '../types';

interface IngredientPageProps {
  ingredientId: string;
  onBack: () => void;
  onViewRecipe: (recipe: Recipe) => void;
  onUnlockClick: () => void;
}

const INGREDIENT_CATEGORIES = [
  { id: 'herbs', label: '🌿 Herbs' },
  { id: 'spices', label: '🌶️ Spices' },
  { id: 'vegetables', label: '🥦 Vegetables' },
  { id: 'fruits', label: '🍋 Fruits' },
  { id: 'grains', label: '🌾 Grains & Legumes' },
  { id: 'dairy', label: '🧈 Dairy & Extras' },
  { id: 'proteins', label: '🥩 Proteins' },
];

export default function IngredientPage({ ingredientId, onBack, onViewRecipe, onUnlockClick }: IngredientPageProps) {
  const ingredient = INGREDIENTS.find(i => i.id === ingredientId);

  if (!ingredient) return null;

  const relatedRecipes = RECIPES.filter(r =>
    r.featuredIngredients.some((i: string) =>
      i.toLowerCase().includes(ingredient.name.toLowerCase()) ||
      ingredient.name.toLowerCase().includes(i.toLowerCase())
    )
  );

  return (
    <div style={{ backgroundColor: '#FFFAF5', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        position: 'relative', height: '500px', overflow: 'hidden'
      }}>
        <img
          src={ingredient.image}
          alt={ingredient.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.45)' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)'
        }} />

        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            position: 'absolute', top: '24px', left: '24px',
            display: 'flex', alignItems: 'center', gap: '8px',
            backgroundColor: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white', borderRadius: '50px',
            padding: '10px 20px', fontSize: '0.85rem',
            fontWeight: 600, cursor: 'pointer'
          }}
        >
          <ArrowLeft size={16} /> Back
        </button>

        {/* Hero content */}
        <div style={{
          position: 'absolute', bottom: '48px', left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center', width: '100%', padding: '0 24px'
        }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: ingredient.color,
            borderRadius: '50px', padding: '4px 16px',
            fontSize: '0.72rem', fontWeight: 700,
            color: 'white', marginBottom: '16px',
            textTransform: 'uppercase', letterSpacing: '0.1em'
          }}>
            {INGREDIENT_CATEGORIES.find(c => c.id === ingredient.category)?.label}
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 800, fontStyle: 'italic',
            color: 'white', marginBottom: '12px'
          }}>
            {ingredient.name}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: '1.05rem', maxWidth: '560px',
            margin: '0 auto', lineHeight: 1.6
          }}>
            {ingredient.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 24px' }}>

        {/* Story */}
        <div style={{
          backgroundColor: 'white', borderRadius: '24px',
          padding: '40px', marginBottom: '32px',
          border: '1px solid rgba(13,92,99,0.08)',
          boxShadow: '0 4px 20px rgba(13,92,99,0.06)'
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.6rem', fontStyle: 'italic',
            color: '#1A1A2E', marginBottom: '16px'
          }}>
            The Story
          </h2>
          <p style={{
            fontSize: '1rem', color: '#1A1A2E80',
            lineHeight: 1.8
          }}>
            {ingredient.story}
          </p>
        </div>

        {/* Three info cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px', marginBottom: '60px'
        }}>
          {[
            { title: '📦 How to Store', content: ingredient.howToStore, bg: '#E8F4F5' },
            { title: '🔪 How to Prep', content: ingredient.howToPrep, bg: '#FFF0E8' },
            { title: '🔄 Substitutes', content: ingredient.substitute, bg: '#F0FFF0' },
          ].map(card => (
            <div key={card.title} style={{
              backgroundColor: card.bg, borderRadius: '20px', padding: '28px'
            }}>
              <h3 style={{
                fontSize: '0.85rem', fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: '#1A1A2E', marginBottom: '12px'
              }}>
                {card.title}
              </h3>
              <p style={{
                fontSize: '0.9rem', color: '#1A1A2E80', lineHeight: 1.7
              }}>
                {card.content}
              </p>
            </div>
          ))}
        </div>

        {/* Related Recipes */}
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.8rem', fontStyle: 'italic',
          color: '#1A1A2E', marginBottom: '32px'
        }}>
          Recipes using <span style={{ color: ingredient.color }}>{ingredient.name}</span>
        </h2>

        {relatedRecipes.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '60px',
            backgroundColor: 'white', borderRadius: '20px',
            color: '#1A1A2E60'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🍳</div>
            <p>Recipes featuring {ingredient.name} coming soon.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {relatedRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onViewDetails={onViewRecipe}
                onUnlockClick={onUnlockClick}
              />
            ))}
          </div>
        )}

        {/* All ingredients by category */}
        <div style={{ marginTop: '80px' }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.8rem', fontStyle: 'italic',
            color: '#1A1A2E', marginBottom: '32px', textAlign: 'center'
          }}>
            Browse All <span style={{ color: '#FF6B6B' }}>Ingredients</span>
          </h2>

          {INGREDIENT_CATEGORIES.map(cat => {
            const items = INGREDIENTS.filter(i => i.category === cat.id);
            if (items.length === 0) return null;
            return (
              <div key={cat.id} style={{ marginBottom: '32px' }}>
                <h3 style={{
                  fontSize: '0.85rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: '#1A1A2E60', marginBottom: '16px'
                }}>
                  {cat.label}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {items.map(item => (
                    <button
                      key={item.id}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        backgroundColor: item.id === ingredientId ? item.color : 'white',
                        color: item.id === ingredientId ? 'white' : '#1A1A2E',
                        border: `1.5px solid ${item.id === ingredientId ? item.color : 'rgba(0,0,0,0.1)'}`,
                        borderRadius: '50px', padding: '10px 20px',
                        fontSize: '0.88rem', fontWeight: 600,
                        cursor: 'pointer', transition: 'all 0.2s'
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}