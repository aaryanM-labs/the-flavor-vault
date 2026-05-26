import { ArrowLeft, Clock, Users, Lock, ChefHat } from 'lucide-react';
import type { Recipe } from '../types';

interface RecipeDetailProps {
  recipe: Recipe;
  isPremium: boolean;
  onBack: () => void;
  onUnlockClick: () => void;
}

const THEMES: Record<string, { accent: string; bg: string; dark: boolean }> = {
  baking:        { accent: '#8B4513', bg: '#FAF0E6', dark: false },
  ugandan:       { accent: '#E8651A', bg: '#1C0F0A', dark: true },
  international: { accent: '#F59E0B', bg: '#0F172A', dark: true },
  grilling:      { accent: '#EA580C', bg: '#0D0D0D', dark: true },
  desserts:      { accent: '#9333EA', bg: '#FDF2F8', dark: false },
  drinks:        { accent: '#16A34A', bg: '#F0FDF4', dark: false },
};

export default function RecipeDetail({ recipe, isPremium, onBack, onUnlockClick }: RecipeDetailProps) {
  const theme = THEMES[recipe.mainCategory] || { accent: '#0D5C63', bg: '#FFFAF5', dark: false };
  const canView = !recipe.isPremium || isPremium;
  const textColor = theme.dark ? 'white' : '#1A1A2E';
  const mutedColor = theme.dark ? 'rgba(255,255,255,0.55)' : 'rgba(26,26,46,0.55)';

  return (
    <div style={{ backgroundColor: theme.bg, minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ position: 'relative', height: '60vh', overflow: 'hidden' }}>
        <img src={recipe.image} alt={recipe.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: theme.dark
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)'
        }} />

        {/* Back */}
        <button onClick={onBack} style={{
          position: 'absolute', top: '32px', left: '32px',
          display: 'flex', alignItems: 'center', gap: '8px',
          backgroundColor: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'white', borderRadius: '50px',
          padding: '10px 22px',
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer'
        }}>
          <ArrowLeft size={15} /> Back
        </button>

        {/* Hero content */}
        <div style={{
          position: 'absolute', bottom: '48px', left: '0', right: '0',
          maxWidth: '1280px', margin: '0 auto', padding: '0 40px'
        }}>
          <div style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.65rem', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: theme.accent, marginBottom: '12px'
          }}>
            ✦ {recipe.mainCategory} · {recipe.subCategory}
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
            fontWeight: 700, fontStyle: 'italic',
            color: 'white', lineHeight: 1.05,
            marginBottom: '16px', maxWidth: '700px'
          }}>
            {recipe.title}
          </h1>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            color: 'rgba(255,255,255,0.75)',
            fontSize: '1rem', maxWidth: '560px', lineHeight: 1.7
          }}>
            {recipe.tagline}
          </p>
        </div>

        {/* Premium lock on hero */}
        {recipe.isPremium && !isPremium && (
          <div style={{
            position: 'absolute', inset: 0,
            backgroundColor: 'rgba(26,26,46,0.7)',
            backdropFilter: 'blur(8px)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '20px'
          }}>
            <div style={{
              width: '80px', height: '80px',
              backgroundColor: 'rgba(255,107,107,0.15)',
              border: '1px solid rgba(255,107,107,0.3)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Lock size={32} color="#FF6B6B" />
            </div>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: 'white', fontSize: '2rem', fontStyle: 'italic'
            }}>
              Kulah Pro Exclusive
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem'
            }}>
              Join Kulah Pro to unlock this masterclass
            </p>
            <button onClick={onUnlockClick} style={{
              backgroundColor: '#FF6B6B', color: 'white',
              border: 'none', borderRadius: '50px',
              padding: '16px 40px',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.85rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              cursor: 'pointer', marginTop: '8px'
            }}>
              Join Kulah Pro
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 40px' }}>

        {/* Meta strip */}
        <div style={{
          display: 'flex', gap: '32px', flexWrap: 'wrap',
          padding: '28px 0', marginBottom: '48px',
          borderBottom: `1px solid ${theme.dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`
        }}>
          {[
            { icon: <Clock size={16} />, val: recipe.time, label: 'Time' },
            { icon: <Users size={16} />, val: `${recipe.servings}`, label: 'Servings' },
            { icon: <ChefHat size={16} />, val: recipe.difficulty, label: 'Level' },
          ].map(m => (
            <div key={m.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ color: theme.accent }}>{m.icon}</div>
              <div>
                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.62rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: mutedColor
                }}>{m.label}</div>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.95rem', fontWeight: 600,
                  color: textColor
                }}>{m.val}</div>
              </div>
            </div>
          ))}

          {/* Nutrition */}
          {Object.entries(recipe.nutrition).map(([key, val]) => (
            <div key={key}>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.62rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: mutedColor
              }}>{key}</div>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.1rem', fontWeight: 700,
                fontStyle: 'italic', color: theme.accent
              }}>{val}</div>
            </div>
          ))}
        </div>

        {canView && (
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '60px'
          }}>
            {/* Ingredients */}
            <div>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2rem', fontStyle: 'italic', fontWeight: 700,
                color: textColor, marginBottom: '28px'
              }}>
                Ingredients
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', padding: '12px 16px',
                    backgroundColor: theme.dark ? 'rgba(255,255,255,0.05)' : 'white',
                    borderRadius: '12px',
                    border: theme.dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)'
                  }}>
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.88rem', color: textColor, fontWeight: 500
                    }}>{ing.name}</span>
                    <span style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '0.78rem', fontWeight: 700, color: theme.accent
                    }}>{ing.amount}</span>
                  </li>
                ))}
              </ul>

              {/* Chef note */}
              <div style={{
                marginTop: '28px', padding: '24px',
                backgroundColor: `${theme.accent}12`,
                borderLeft: `3px solid ${theme.accent}`,
                borderRadius: '0 16px 16px 0'
              }}>
                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.62rem', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: theme.accent, marginBottom: '10px'
                }}>Chef's Note</div>
                <p style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.05rem', fontStyle: 'italic',
                  color: textColor, lineHeight: 1.7
                }}>
                  "{recipe.chefNote}"
                </p>
              </div>
            </div>

            {/* Steps */}
            <div>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2rem', fontStyle: 'italic', fontWeight: 700,
                color: textColor, marginBottom: '28px'
              }}>
                Method
              </h2>
              <ol style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {recipe.steps.map((step, i) => (
                  <li key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{
                      flexShrink: 0, width: '36px', height: '36px',
                      backgroundColor: theme.accent, color: 'white',
                      borderRadius: '50%', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '0.82rem', fontWeight: 700
                    }}>
                      {i + 1}
                    </div>
                    <p style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.95rem', color: textColor,
                      lineHeight: 1.75, paddingTop: '6px', flex: 1
                    }}>
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}