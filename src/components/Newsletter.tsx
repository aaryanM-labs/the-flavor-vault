import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section style={{
      padding: '100px 32px',
      background: 'linear-gradient(135deg, #0D5C63 0%, #0a4a50 100%)',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'rgba(255,107,107,0.1)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '250px', height: '250px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.04)', pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '580px', margin: '0 auto',
        textAlign: 'center', position: 'relative'
      }}>
        <div style={{
          width: '52px', height: '52px',
          backgroundColor: 'rgba(255,107,107,0.2)',
          borderRadius: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px'
        }}>
          <Mail size={22} color="#FF6B6B" />
        </div>

        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 700, fontStyle: 'italic',
          color: 'white', marginBottom: '16px', lineHeight: 1.2
        }}>
          Get Fresh Recipes{' '}
          <span style={{ color: '#FF6B6B' }}>Every Week</span>
        </h2>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '1rem', color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.75, marginBottom: '40px'
        }}>
          Join 12,000+ food lovers getting exclusive recipes, cooking tips,
          and early access to new Vault content. No spam. Unsubscribe anytime.
        </p>

        {subscribed ? (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '12px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '16px', padding: '20px 32px',
            fontFamily: 'DM Sans, sans-serif',
            color: 'white', fontWeight: 600, fontSize: '1rem'
          }}>
            <Check size={20} color="#FF6B6B" />
            You are in! Welcome to the Kulah family.
          </div>
        ) : (
          <div style={{
            display: 'flex',
            backgroundColor: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(8px)',
            borderRadius: '50px',
            border: '1px solid rgba(255,255,255,0.15)',
            overflow: 'hidden', padding: '6px 6px 6px 24px'
          }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              style={{
                flex: 1, border: 'none', outline: 'none',
                backgroundColor: 'transparent',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.92rem', color: 'white',
              }}
            />
            <button
              onClick={() => { if (email) setSubscribed(true); }}
              style={{
                backgroundColor: '#FF6B6B', color: 'white',
                border: 'none', borderRadius: '50px',
                padding: '13px 28px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.78rem', fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                cursor: 'pointer', whiteSpace: 'nowrap'
              }}
            >
              Subscribe Free
            </button>
          </div>
        )}

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)',
          marginTop: '16px'
        }}>
          🔒 Your email is safe. We never share your data.
        </p>
      </div>
    </section>
  );
}