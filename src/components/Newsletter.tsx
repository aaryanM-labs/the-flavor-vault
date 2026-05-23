import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = () => {
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section style={{
      padding: '80px 24px',
      background: 'linear-gradient(135deg, #FFF0E8 0%, #FFFAF5 50%, #E8F4F5 100%)',
    }}>
      <div style={{
        maxWidth: '600px', margin: '0 auto', textAlign: 'center'
      }}>
        <div style={{
          width: '56px', height: '56px',
          backgroundColor: '#FF6B6B',
          borderRadius: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px'
        }}>
          <Mail size={24} color="white" />
        </div>

        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          fontWeight: 800, fontStyle: 'italic',
          color: '#1A1A2E', marginBottom: '16px'
        }}>
          Get Fresh Recipes <span style={{ color: '#FF6B6B' }}>Every Week</span>
        </h2>

        <p style={{
          fontSize: '1rem', color: '#1A1A2E70',
          lineHeight: 1.7, marginBottom: '36px'
        }}>
          Join 12,000+ food lovers getting exclusive recipes, cooking tips,
          and early access to new Vault content — straight to their inbox.
          No spam. Unsubscribe anytime.
        </p>

        {subscribed ? (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '12px', backgroundColor: '#E8F4F5',
            border: '1.5px solid #0D5C63',
            borderRadius: '16px', padding: '20px 32px',
            color: '#0D5C63', fontWeight: 700, fontSize: '1rem'
          }}>
            <Check size={20} /> You're in! Welcome to The Flavor Vault family.
          </div>
        ) : (
          <div style={{
            display: 'flex', gap: '0',
            backgroundColor: 'white',
            borderRadius: '50px',
            border: '1.5px solid rgba(13,92,99,0.15)',
            boxShadow: '0 4px 20px rgba(13,92,99,0.08)',
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
                fontSize: '0.95rem', color: '#1A1A2E',
                fontFamily: 'Inter, sans-serif'
              }}
            />
            <button
              onClick={handleSubmit}
              style={{
                backgroundColor: '#FF6B6B', color: 'white',
                border: 'none', borderRadius: '50px',
                padding: '14px 32px', fontSize: '0.85rem',
                fontWeight: 700, letterSpacing: '0.06em',
                textTransform: 'uppercase', cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Subscribe Free
            </button>
          </div>
        )}

        <p style={{
          fontSize: '0.75rem', color: '#1A1A2E40',
          marginTop: '16px'
        }}>
          🔒 Your email is safe. We never share your data.
        </p>
      </div>
    </section>
  );
}