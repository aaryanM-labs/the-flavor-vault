import { Clock, Users, Lock } from 'lucide-react';
import type { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onViewDetails: (recipe: Recipe) => void;
  onUnlockClick: () => void;
}

export default function RecipeCard({ recipe, onViewDetails, onUnlockClick }: RecipeCardProps) {
  const categoryColors: Record<string, { bg: string; text: string }> = {
    cooking:  { bg: '#E8F4F5', text: '#0D5C63' },
    baking:   { bg: '#FFF0E8', text: '#C45C2A' },
    juices:   { bg: '#F0FFF0', text: '#2A7A2A' },
    grilling: { bg: '#FFF5E8', text: '#C47A2A' },
    desserts: { bg: '#FFF0F5', text: '#C42A6B' },
  };

  const cat = categoryColors[recipe.category] || { bg: '#F5F5F5', text: '#555' };

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '1px solid rgba(13,92,99,0.08)',
      boxShadow: '0 2px 12px rgba(13,92,99,0.06)',
      transition: 'transform 0.25s, box-shadow 0.25s',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column'
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(13,92,99,0.12)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(13,92,99,0.06)';
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Category badge */}
        <div style={{
          position: 'absolute', top: '12px', left: '12px',
          backgroundColor: cat.bg,
          color: cat.text,
          fontSize: '0.7rem', fontWeight: 700,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '4px 12px', borderRadius: '50px',
        }}>
          {recipe.category}
        </div>

        {/* Premium lock overlay */}
        {recipe.isPremium && (
          <div style={{
            position: 'absolute', inset: 0,
            backgroundColor: 'rgba(26,26,46,0.55)',
            backdropFilter: 'blur(3px)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '8px'
          }}>
            <Lock size={28} color="#FF6B6B" />
            <span style={{
              color: 'white', fontSize: '0.75rem',
              fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>Premium Only</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.1rem', fontWeight: 700,
          fontStyle: 'italic', color: '#1A1A2E',
          marginBottom: '8px', lineHeight: 1.3
        }}>
          {recipe.title}
        </h3>

        <p style={{
          fontSize: '0.82rem', color: '#1A1A2E80',
          lineHeight: 1.6, marginBottom: '16px', flex: 1
        }}>
          {recipe.tagline}
        </p>

        {/* Meta */}
        <div style={{
          display: 'flex', gap: '16px',
          marginBottom: '16px'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: '#1A1A2E60' }}>
            <Clock size={13} /> {recipe.time}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: '#1A1A2E60' }}>
            <Users size={13} /> {recipe.servings} servings
          </span>
          <span style={{
            fontSize: '0.72rem', fontWeight: 700,
            color: recipe.difficulty === 'Easy' ? '#2A7A2A' : recipe.difficulty === 'Intermediate' ? '#C47A2A' : '#C42A2A'
          }}>
            {recipe.difficulty}
          </span>
        </div>

        {/* Button */}
        {recipe.isPremium ? (
          <button
            onClick={onUnlockClick}
            style={{
              backgroundColor: '#FF6B6B',
              color: 'white', border: 'none',
              borderRadius: '12px', padding: '12px',
              fontSize: '0.8rem', fontWeight: 700,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              cursor: 'pointer', width: '100%'
            }}
          >
            Unlock in The Vault
          </button>
        ) : (
          <button
            onClick={() => onViewDetails(recipe)}
            style={{
              backgroundColor: 'transparent',
              color: '#0D5C63',
              border: '1.5px solid #0D5C63',
              borderRadius: '12px', padding: '12px',
              fontSize: '0.8rem', fontWeight: 700,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              cursor: 'pointer', width: '100%',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0D5C63';
              (e.currentTarget as HTMLButtonElement).style.color = 'white';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.color = '#0D5C63';
            }}
          >
            View Recipe
          </button>
        )}
      </div>
    </div>
  );
}