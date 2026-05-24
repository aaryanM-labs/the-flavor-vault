import { useState } from 'react';
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

const CATEGORIES = [
  { id: 'herbs',      label: 'Herbs',            emoji: '🌿', color: '#059669', bg: '#ECFDF5' },
  { id: 'spices',     label: 'Spices',           emoji: '🌶️', color: '#B45309', bg: '#FFFBEB' },
  { id: 'vegetables', label: 'Vegetables',       emoji: '🥦', color: '#0D5C63', bg: '#E8F4F5' },
  { id: 'fruits',     label: 'Fruits',           emoji: '🍋', color: '#FF6B6B', bg: '#FFF0F0' },
  { id: 'grains',     label: 'Grains & Legumes', emoji: '🌾', color: '#92400E', bg: '#FEF3C7' },
  { id: 'dairy',      label: 'Dairy & Extras',   emoji: '🧈', color: '#D97706', bg: '#FFFBEB' },
  { id: 'proteins',   label: 'Proteins',         emoji: '🥩', color: '#1F2937', bg: '#F3F4F6' },
];

export default function IngredientPage({ ingredientId, onBack, onViewRecipe, onUnlockClick }: IngredientPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedId, setSelectedId] = useState<string>(ingredientId);

  const ingredient = INGREDIENTS.find(i => i.id === selectedId);
  const cat = CATEGORIES.find(c => c.id === ingredient?.category);

  const relatedRecipes = ingredient ? RECIPES.filter(r =>
    r.featuredIngredients.some((i: string) =>
      i.toLowerCase().includes(ingredient.name.toLowerCase()) ||
      ingredient.name.toLowerCase().includes(i.toLowerCase())
    )
  ) : [];

  const filteredIngredients = activeCategory === 'all'
    ? INGREDIENTS
    : INGREDIENTS.filter(i => i.category === activeCategory);

  return (
    <div style={{ backgroundColor: '#FFFAF5', minHeight: '100vh' }}>

      {/* Hero */}
      {ingredient && (
        <div style={{ position: 'relative', height: '520px', overflow: 'hidden' }}>
          <img
            src={ingredient.image}
            alt={ingredient.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 100%)'
          }} />

          {/* Back */}
          <button onClick={onBack} style={{
            position: 'absolute', top: '28px', left: '28px',
            display: 'flex', alignItems: 'center', gap: '8px',
            backgroundColor: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white', borderRadius: '50px',
            padding: '10px 22px', fontSize: '0.85rem',
            fontWeight: 600, cursor: 'pointer',
            fontFamily: 'Inter, sans-serif'
          }}>
            <ArrowLeft size={16} /> Back
          </button>

          {/* Hero content */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '60px 48px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              {cat && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  backgroundColor: cat.color,
                  borderRadius: '50px', padding: '5px 16px',
                  fontSize: '0.72rem', fontWeight: 700,
                  color: 'white', marginBottom: '16px',
                  textTransform: 'uppercase', letterSpacing: '0.12em',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}>
                  {cat.emoji} {cat.label}
                </div>
              )}
              <h1 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 700, fontStyle: 'italic',
                color: 'white', lineHeight: 1,
                marginBottom: '16px'
              }}>
                {ingredient.name}
              </h1>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                color: 'rgba(255,255,255,0.75)',
                fontSize: '1.1rem', maxWidth: '560px',
                lineHeight: 1.7
              }}>
                {ingredient.tagline}
              </p>
            </div>
          </div>
        </div>
      )}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Info cards */}
        {ingredient && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            margin: '48px 0'
          }}>
            {/* Story */}
            <div style={{
              gridColumn: '1 / -1',
              backgroundColor: 'white',
              borderRadius: '24px', padding: '40px',
              border: '1px solid rgba(13,92,99,0.08)',
              boxShadow: '0 4px 24px rgba(13,92,99,0.06)'
            }}>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: cat?.color || '#0D5C63', marginBottom: '12px'
              }}>
                ✦ The Story
              </div>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.5rem', fontStyle: 'italic',
                color: '#1A1A2E', marginBottom: '16px'
              }}>
                Everything you need to know about {ingredient.name}
              </h2>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '1rem', color: 'rgba(26,26,46,0.7)',
                lineHeight: 1.85
              }}>
                {ingredient.story}
              </p>
            </div>

            {[
              { title: 'How to Store', content: ingredient.howToStore, emoji: '📦', bg: '#E8F4F5', color: '#0D5C63' },
              { title: 'How to Prep', content: ingredient.howToPrep, emoji: '🔪', bg: '#FFF0E8', color: '#C45C2A' },
              { title: 'Substitutes', content: ingredient.substitute, emoji: '🔄', bg: '#F0FFF4', color: '#059669' },
            ].map(card => (
              <div key={card.title} style={{
                backgroundColor: card.bg,
                borderRadius: '20px', padding: '32px',
                border: `1px solid ${card.color}20`
              }}>
                <div style={{
                  fontSize: '1.8rem', marginBottom: '12px'
                }}>{card.emoji}</div>
                <h3 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.82rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: card.color, marginBottom: '12px'
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.92rem', color: '#1A1A2E',
                  lineHeight: 1.75
                }}>
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Related recipes */}
        {ingredient && (
          <div style={{ marginBottom: '80px' }}>
            <div style={{ marginBottom: '32px' }}>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#FF6B6B', marginBottom: '8px'
              }}>
                ✦ In The Kitchen
              </div>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 700, fontStyle: 'italic',
                color: '#1A1A2E'
              }}>
                Recipes using{' '}
                <span style={{ color: cat?.color || '#0D5C63' }}>
                  {ingredient.name}
                </span>
              </h2>
            </div>

            {relatedRecipes.length === 0 ? (
              <div style={{
                textAlign: 'center', padding: '60px',
                backgroundColor: 'white', borderRadius: '20px',
                border: '1px solid rgba(13,92,99,0.08)'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🍳</div>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'rgba(26,26,46,0.5)', fontSize: '0.95rem'
                }}>
                  Recipes featuring {ingredient.name} coming soon.
                </p>
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
          </div>
        )}

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(13,92,99,0.15), transparent)',
          marginBottom: '80px'
        }} />

        {/* Ingredient Directory */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#0D5C63', marginBottom: '12px'
            }}>
              ✦ Ingredient Directory
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 700, fontStyle: 'italic',
              color: '#1A1A2E', marginBottom: '8px'
            }}>
              Explore Every <span style={{ color: '#FF6B6B' }}>Ingredient</span>
            </h2>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              color: 'rgba(26,26,46,0.55)', fontSize: '0.95rem'
            }}>
              Click any ingredient to discover its story and recipes
            </p>
          </div>

          {/* Category filter */}
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'center', gap: '10px',
            marginBottom: '40px'
          }}>
            <button
              onClick={() => setActiveCategory('all')}
              style={{
                backgroundColor: activeCategory === 'all' ? '#0D5C63' : 'white',
                color: activeCategory === 'all' ? 'white' : 'rgba(26,26,46,0.6)',
                border: `1.5px solid ${activeCategory === 'all' ? '#0D5C63' : 'rgba(0,0,0,0.1)'}`,
                borderRadius: '50px', padding: '10px 22px',
                fontSize: '0.85rem', fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.2s',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              All Ingredients
            </button>
            {CATEGORIES.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                style={{
                  backgroundColor: activeCategory === c.id ? c.color : 'white',
                  color: activeCategory === c.id ? 'white' : 'rgba(26,26,46,0.6)',
                  border: `1.5px solid ${activeCategory === c.id ? c.color : 'rgba(0,0,0,0.1)'}`,
                  borderRadius: '50px', padding: '10px 22px',
                  fontSize: '0.85rem', fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.2s',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
              >
                {c.emoji} {c.label}
              </button>
            ))}
          </div>

          {/* Ingredients grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            {filteredIngredients.map(ing => {
              const ingCat = CATEGORIES.find(c => c.id === ing.category);
              const isSelected = ing.id === selectedId;
              return (
                <div
                  key={ing.id}
                  onClick={() => {
                    setSelectedId(ing.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    backgroundColor: isSelected ? ingCat?.color || '#0D5C63' : 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: `1.5px solid ${isSelected ? ingCat?.color || '#0D5C63' : 'rgba(0,0,0,0.08)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                    boxShadow: isSelected ? `0 8px 24px ${ingCat?.color}40` : '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                  onMouseEnter={e => {
                    if (!isSelected) {
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 28px ${ingCat?.color}30`;
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isSelected) {
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                    }
                  }}
                >
                  {/* Image */}
                  <div style={{
                    height: '140px', overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img
                      src={ing.image}
                      alt={ing.name}
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover',
                        filter: isSelected ? 'brightness(0.7)' : 'brightness(0.9)',
                        transition: 'transform 0.3s'
                      }}
                    />
                    <div style={{
                      position: 'absolute', top: '10px', left: '10px',
                      backgroundColor: ingCat?.color,
                      color: 'white', borderRadius: '50px',
                      padding: '3px 10px',
                      fontSize: '0.65rem', fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.08em',
                      fontFamily: 'Space Grotesk, sans-serif'
                    }}>
                      {ingCat?.emoji} {ingCat?.label}
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ padding: '16px' }}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1rem', fontWeight: 700,
                      fontStyle: 'italic',
                      color: isSelected ? 'white' : '#1A1A2E',
                      marginBottom: '6px'
                    }}>
                      {ing.name}
                    </h3>
                    <p style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.78rem',
                      color: isSelected ? 'rgba(255,255,255,0.75)' : 'rgba(26,26,46,0.55)',
                      lineHeight: 1.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {ing.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}