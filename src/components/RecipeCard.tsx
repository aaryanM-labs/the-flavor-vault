import { Clock, Users, Lock, ArrowUpRight } from 'lucide-react';
import type { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onViewDetails: (recipe: Recipe) => void;
  onUnlockClick: () => void;
  isDark?: boolean;
}

const THEMES: Record<string, { accent: string; label: string }> = {
  baking:        { accent: '#8B4513', label: '#FAF0E6' },
  ugandan:       { accent: '#E8651A', label: '#FDF6EC' },
  international: { accent: '#F59E0B', label: '#1A2744' },
  grilling:      { accent: '#EA580C', label: '#1C1C1C' },
  desserts:      { accent: '#9333EA', label: '#FDF2F8' },
  drinks:        { accent: '#16A34A', label: '#F0FDF4' },
};

export default function RecipeCard({ recipe, onViewDetails, onUnlockClick, isDark }: RecipeCardProps) {
  const theme = THEMES[recipe.mainCategory] || { accent: '#0D5C63', label: '#E8F4F5' };

  return (
    <div style={{
      backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'white',
      borderRadius: '24px', overflow: 'hidden',
      border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.06)',
      boxShadow: isDark ? 'none' : '0 4px 24px rgba(0,0,0,0.06)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      display: 'flex', flexDirection: 'column',
      cursor: 'pointer'
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 24px 60px ${theme.accent}30`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = isDark ? 'none' : '0 4px 24px rgba(0,0,0,0.06)';
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
        <img src={recipe.image} alt={recipe.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
          onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.08)'}
          onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'}
        />
        {/* Gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)'
        }} />
        {/* Category pill */}
        <div style={{
          position: 'absolute', top: '14px', left: '14px',
          backgroundColor: theme.accent, color: 'white',
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '0.6rem', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '5px 12px', borderRadius: '50px'
        }}>
          {recipe.mainCategory}
        </div>
        {/* Difficulty */}
        <div style={{
          position: 'absolute', top: '14px', right: '14px',
          backgroundColor: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(8px)',
          color: recipe.difficulty === 'Easy' ? '#4ade80' : recipe.difficulty === 'Intermediate' ? '#fbbf24' : '#f87171',
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '0.6rem', fontWeight: 700,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '5px 10px', borderRadius: '50px'
        }}>
          {recipe.difficulty}
        </div>
        {/* Premium overlay */}
        {recipe.isPremium && (
          <div style={{
            position: 'absolute', inset: 0,
            backgroundColor: 'rgba(26,26,46,0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '12px'
          }}>
            <div style={{
              width: '52px', height: '52px',
              backgroundColor: 'rgba(255,107,107,0.15)',
              border: '1px solid rgba(255,107,107,0.3)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Lock size={20} color="#FF6B6B" />
            </div>
            <span style={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: 'white', fontSize: '0.7rem',
              fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase'
            }}>Kulah Pro Only</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Meta row */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', alignItems: 'center' }}>
          <span style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.72rem', color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(26,26,46,0.4)'
          }}>
            <Clock size={11} /> {recipe.time}
          </span>
          <span style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.72rem', color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(26,26,46,0.4)'
          }}>
            <Users size={11} /> {recipe.servings} servings
          </span>
        </div>

        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.1rem', fontWeight: 700, fontStyle: 'italic',
          color: isDark ? 'white' : '#1A1A2E',
          marginBottom: '10px', lineHeight: 1.3
        }}>
          {recipe.title}
        </h3>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.82rem',
          color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(26,26,46,0.55)',
          lineHeight: 1.65, marginBottom: '20px', flex: 1
        }}>
          {recipe.tagline}
        </p>

        {/* Featured ingredients */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {recipe.featuredIngredients.slice(0, 3).map((ing: string) => (
            <span key={ing} style={{
              backgroundColor: `${theme.accent}15`,
              color: theme.accent,
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.62rem', fontWeight: 600,
              padding: '3px 10px', borderRadius: '50px',
              border: `1px solid ${theme.accent}25`
            }}>
              {ing}
            </span>
          ))}
        </div>

        {/* Button */}
        {recipe.isPremium ? (
          <button onClick={onUnlockClick} style={{
            width: '100%', backgroundColor: '#FF6B6B',
            color: 'white', border: 'none', borderRadius: '14px',
            padding: '13px',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
          }}>
            Unlock in Kulah Pro <Lock size={12} />
          </button>
        ) : (
          <button onClick={() => onViewDetails(recipe)} style={{
            width: '100%', backgroundColor: 'transparent',
            color: theme.accent,
            border: `1.5px solid ${theme.accent}`,
            borderRadius: '14px', padding: '13px',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            cursor: 'pointer', transition: 'all 0.2s',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
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
            View Recipe <ArrowUpRight size={13} />
          </button>
        )}
      </div>
    </div>
  );
}