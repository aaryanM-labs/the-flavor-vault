import { useState, useEffect } from 'react';
import { INGREDIENTS } from '../data/ingredients';

interface IngredientSlideshowProps {
  onIngredientClick: (id: string) => void;
}

export default function IngredientSlideshow({ onIngredientClick }: IngredientSlideshowProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % INGREDIENTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const ingredient = INGREDIENTS[current];

  return (
    <section style={{
      position: 'relative',
      height: '480px',
      overflow: 'hidden',
      cursor: 'pointer',
    }}
      onClick={() => onIngredientClick(ingredient.id)}
    >
      {/* Background Image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${ingredient.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 0.8s ease',
        filter: 'brightness(0.45)'
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)'
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 24px',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '560px' }}>

          {/* Label */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: ingredient.color,
            borderRadius: '50px', padding: '4px 14px',
            fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'white', marginBottom: '20px'
          }}>
            ✦ Ingredient Spotlight
          </div>

          {/* Ingredient name */}
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 800, fontStyle: 'italic',
            color: 'white', lineHeight: 1.1,
            marginBottom: '12px'
          }}>
            {ingredient.name}
          </h2>

          {/* Tagline */}
          <p style={{
            fontSize: '1rem', color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.6, marginBottom: '28px',
            maxWidth: '440px'
          }}>
            {ingredient.tagline}
          </p>

          {/* Recipe hints */}
          <div style={{
            display: 'flex', gap: '10px',
            flexWrap: 'wrap', marginBottom: '28px'
          }}>
            {['See recipes', 'How to prep', 'Storage tips'].map(tag => (
              <span key={tag} style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white', borderRadius: '50px',
                padding: '6px 14px', fontSize: '0.78rem',
                fontWeight: 600
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button style={{
            backgroundColor: ingredient.color,
            color: 'white', border: 'none',
            borderRadius: '50px', padding: '14px 32px',
            fontSize: '0.88rem', fontWeight: 700,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            cursor: 'pointer',
            boxShadow: `0 8px 24px ${ingredient.color}60`
          }}>
            Explore {ingredient.name} →
          </button>
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{
        position: 'absolute', bottom: '24px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', gap: '8px', zIndex: 3
      }}>
        {INGREDIENTS.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              borderRadius: '50px',
              backgroundColor: i === current ? 'white' : 'rgba(255,255,255,0.4)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.3s', padding: 0
            }}
          />
        ))}
      </div>
    </section>
  );
}