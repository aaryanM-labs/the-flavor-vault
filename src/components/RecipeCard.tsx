import { Clock, Users, Lock } from 'lucide-react';
import type { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onViewDetails: (recipe: Recipe) => void;
  onUnlockClick: () => void;
}

const CATEGORY_THEMES: Record<string, { accent: string; bg: string; text: string }> = {
  baking:        { accent: '#C9847A', bg: '#FDF6F5', text: '#3C1F1F' },
  ugandan:       { accent: '#8B5E3C', bg: '#FDF6EC', text: '#3C1F00' },
  international: { accent: '#0F172A', bg: '#F0F4FF', text: '#0F172A' },
  grilling:      { accent: '#EA580C', bg: '#FFF4EE', text: '#1C1C1C' },
  desserts:      { accent: '#6B21A8', bg: '#FAF0FF', text: '#3B0764' },
  drinks:        { accent: '#16A34A', bg: '#F0FFF4', text: '#14532D' },
};

export default function RecipeCard({ recipe, onViewDetails, onUnlockClick }: RecipeCardProps) {
  const theme = CATEGORY_THEMES[recipe.mainCategory] || { accent: '#0D5C63', bg: '#E8F4F5', text: '#1A1A2E' };

  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '20px', overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.06)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        transition: 'transform 0.25s, box-shadow 0.25s',
        display: 'flex', flexDirection: 'column'
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px ${theme.accent}25`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)';
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
        <img
          src={recipe.image} alt={recipe.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
          onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'}
          onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'}
        />
        {/* Category badge */}
        <div style={{
          position: 'absolute', top: '12px', left: '12px',
          backgroundColor: theme.accent, color: 'white',
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '0.62rem', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '4px 12px', borderRadius: '50px'
        }}>
          {recipe.mainCategory}
        </div>
        {/* Premium overlay */}
        {recipe.isPremium && (
          <div style={{
            position: 'absolute', inset: 0,
            backgroundColor: 'rgba(26,26,46,0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '10px'
          }}>
            <div style={{
              width: '44px', height: '44px',
              backgroundColor: 'rgba(255,107,107,0.2)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Lock size={20} color="#FF6B6B" />
            </div>
            <span style={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: 'white', fontSize: '0.72rem',
              fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>Premium Only</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.05rem', fontWeight: 700,
          fontStyle: 'italic', color: '#1A1A2E',
          marginBottom: '8px', lineHeight: 1.35
        }}>
          {recipe.title}
        </h3>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.82rem', color: 'rgba(26,26,46,0.6)',
          lineHeight: 1.65, marginBottom: '18px', flex: 1
        }}>
          {recipe.tagline}
        </p>

        {/* Meta */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '18px', alignItems: 'center' }}>
          <span style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.75rem', color: 'rgba(26,26,46,0.5)'
          }}>
            <Clock size={12} /> {recipe.time}
          </span>
          <span style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.75rem', color: 'rgba(26,26,46,0.5)'
          }}>
            <Users size={12} /> {recipe.servings}
          </span>
          <span style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.68rem', fontWeight: 700,
            color: recipe.difficulty === 'Easy' ? '#16A34A' : recipe.difficulty === 'Intermediate' ? '#D97706' : '#DC2626',
            letterSpacing: '0.06em', textTransform: 'uppercase'
          }}>
            {recipe.difficulty}
          </span>
        </div>

        {/* Button */}
        {recipe.isPremium ? (
          <button onClick={onUnlockClick} style={{
            width: '100%', backgroundColor: '#FF6B6B',
            color: 'white', border: 'none', borderRadius: '12px',
            padding: '12px', fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            cursor: 'pointer'
          }}>
            Unlock in Kulah Pro
          </button>
        ) : (
          <button
            onClick={() => onViewDetails(recipe)}
            style={{
              width: '100%', backgroundColor: 'transparent',
              color: theme.accent,
              border: `1.5px solid ${theme.accent}`,
              borderRadius: '12px', padding: '12px',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              cursor: 'pointer', transition: 'all 0.2s'
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = theme.accent;
              (e.currentTarget as HTMLButtonElement).style.color = 'white';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.color = theme.accent;
            }}
          >
            View Recipe
          </button>
        )}
      </div>
    </div>
  );
}