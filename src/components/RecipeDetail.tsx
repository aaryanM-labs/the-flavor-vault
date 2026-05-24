import { ArrowLeft, Clock, Users, Lock } from 'lucide-react';
import type{ Recipe } from '../types';

interface RecipeDetailProps {
  recipe: Recipe;
  isPremium: boolean;
  onBack: () => void;
  onUnlockClick: () => void;
}

export default function RecipeDetail({ recipe, isPremium, onBack, onUnlockClick }: RecipeDetailProps) {
  const canView = !recipe.isPremium || isPremium;

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>

      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'none', border: 'none',
          color: '#0D5C63', cursor: 'pointer',
          fontSize: '0.9rem', fontWeight: 600,
          marginBottom: '32px', padding: 0
        }}
      >
        <ArrowLeft size={18} /> Back to recipes
      </button>

      {/* Hero Image */}
      <div style={{
        borderRadius: '24px', overflow: 'hidden',
        aspectRatio: '16/7', marginBottom: '40px',
        position: 'relative'
      }}>
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {recipe.isPremium && !isPremium && (
          <div style={{
            position: 'absolute', inset: 0,
            backgroundColor: 'rgba(26,26,46,0.6)',
            backdropFilter: 'blur(8px)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '16px'
          }}>
            <Lock size={40} color="#FF6B6B" />
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              color: 'white', fontSize: '1.6rem', fontStyle: 'italic'
            }}>
              This is a Vault Exclusive
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              Join The Kulah Pro to unlock this masterclass
            </p>
            <button
              onClick={onUnlockClick}
              style={{
                backgroundColor: '#FF6B6B', color: 'white',
                border: 'none', borderRadius: '50px',
                padding: '14px 36px', fontSize: '0.9rem',
                fontWeight: 700, cursor: 'pointer',
                marginTop: '8px'
              }}
            >
              Join The Kulah Pro
            </button>
          </div>
        )}
      </div>

      {/* Title & Meta */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#E8F4F5', color: '#0D5C63',
          fontSize: '0.72rem', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '4px 14px', borderRadius: '50px',
          marginBottom: '16px'
        }}>
          {recipe.mainCategory}
        </div>

        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
          fontWeight: 800, fontStyle: 'italic',
          color: '#1A1A2E', marginBottom: '16px', lineHeight: 1.2
        }}>
          {recipe.title}
        </h1>

        <p style={{
          fontSize: '1.05rem', color: '#1A1A2E80',
          lineHeight: 1.7, marginBottom: '24px'
        }}>
          {recipe.tagline}
        </p>

        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {[
            { icon: <Clock size={16} />, label: recipe.time },
            { icon: <Users size={16} />, label: `${recipe.servings} servings` },
            { icon: null, label: recipe.difficulty },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '0.88rem', color: '#1A1A2E70',
              fontWeight: 600
            }}>
              {item.icon}{item.label}
            </div>
          ))}
        </div>
      </div>

      {canView ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '48px' }}>

          {/* Ingredients */}
          <div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.4rem', fontStyle: 'italic',
              color: '#1A1A2E', marginBottom: '20px'
            }}>
              Ingredients
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {recipe.ingredients.map((ing, i) => (
                <li key={i} style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 16px',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid rgba(13,92,99,0.08)',
                  fontSize: '0.88rem'
                }}>
                  <span style={{ color: '#1A1A2E', fontWeight: 500 }}>{ing.name}</span>
                  <span style={{ color: '#0D5C63', fontWeight: 700 }}>{ing.amount}</span>
                </li>
              ))}
            </ul>

            {/* Nutrition */}
            <div style={{
              marginTop: '28px', padding: '20px',
              backgroundColor: '#E8F4F5',
              borderRadius: '16px'
            }}>
              <h3 style={{
                fontSize: '0.8rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#0D5C63', marginBottom: '16px'
              }}>
                Nutrition per serving
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {Object.entries(recipe.nutrition).map(([key, val]) => (
                  <div key={key} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0D5C63' }}>{val}</div>
                    <div style={{ fontSize: '0.72rem', color: '#0D5C6380', textTransform: 'capitalize' }}>{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Steps */}
          <div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.4rem', fontStyle: 'italic',
              color: '#1A1A2E', marginBottom: '20px'
            }}>
              Method
            </h2>
            <ol style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {recipe.steps.map((step, i) => (
                <li key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    flexShrink: 0, width: '32px', height: '32px',
                    backgroundColor: '#0D5C63', color: 'white',
                    borderRadius: '50%', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.8rem', fontWeight: 800
                  }}>
                    {i + 1}
                  </div>
                  <p style={{
                    fontSize: '0.92rem', color: '#1A1A2E',
                    lineHeight: 1.7, paddingTop: '4px'
                  }}>
                    {step}
                  </p>
                </li>
              ))}
            </ol>

            {/* Chef note */}
            <div style={{
              marginTop: '32px', padding: '20px 24px',
              backgroundColor: '#FFF0E8',
              borderLeft: '4px solid #FF6B6B',
              borderRadius: '0 16px 16px 0'
            }}>
              <div style={{
                fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#FF6B6B', marginBottom: '8px'
              }}>
                Chef's Note
              </div>
              <p style={{ fontSize: '0.9rem', color: '#1A1A2E', fontStyle: 'italic', lineHeight: 1.6 }}>
                "{recipe.chefNote}"
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}