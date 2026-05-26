import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section style={{
      backgroundColor: '#0D5C63',
      padding: '0',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        minHeight: '480px'
      }}>
        {/* LEFT — Image */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?q=80&w=1200&auto=format&fit=crop"
            alt="Cooking"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, transparent 60%, #0D5C63 100%)'
          }} />
          {/* Floating quote */}
          <div style={{
            position: 'absolute', bottom: '40px', left: '40px', right: '60px'
          }}>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.6rem', fontStyle: 'italic',
              fontWeight: 600, color: 'white', lineHeight: 1.4
            }}>
              "Every recipe is a story. Every meal is a memory."
            </p>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 80px 80px 60px'
        }}>
          <div style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)', marginBottom: '20px'
          }}>
            ✦ Weekly Dispatch
          </div>

          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 700, fontStyle: 'italic',
            color: 'white', marginBottom: '16px', lineHeight: 1.1
          }}>
            Fresh Recipes<br />
            <span style={{ color: '#FF6B6B' }}>Every Week.</span>
          </h2>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.75, marginBottom: '40px'
          }}>
            Join 12,000+ food lovers. No spam.<br />Unsubscribe anytime.
          </p>

          {subscribed ? (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '16px', padding: '20px 24px',
              fontFamily: 'DM Sans, sans-serif',
              color: 'white', fontWeight: 600
            }}>
              <Check size={20} color="#FF6B6B" />
              Welcome to the Kulah family!
            </div>
          ) : (
            <div>
              <div style={{
                display: 'flex', flexDirection: 'column', gap: '12px'
              }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '14px', padding: '16px 20px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.95rem', color: 'white',
                    outline: 'none',
                  }}
                />
                <button
                  onClick={() => { if (email) setSubscribed(true); }}
                  style={{
                    backgroundColor: '#FF6B6B', color: 'white',
                    border: 'none', borderRadius: '14px',
                    padding: '16px 28px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.8rem', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', gap: '8px'
                  }}
                >
                  Subscribe Free <ArrowRight size={15} />
                </button>
              </div>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)',
                marginTop: '14px'
              }}>
                🔒 Your email is safe. We never share your data.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}