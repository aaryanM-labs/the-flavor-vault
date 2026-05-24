import { Search } from 'lucide-react';

interface HeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onExplore: () => void;
}

export default function Hero({ searchTerm, setSearchTerm, onExplore }: HeroProps) {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #E8F4F5 0%, #FFFAF5 45%, #FFF0E8 100%)',
      padding: '100px 32px 80px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: '-100px', left: '-100px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'rgba(13,92,99,0.05)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-80px',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'rgba(255,107,107,0.06)', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '780px', margin: '0 auto', position: 'relative' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          backgroundColor: 'white',
          border: '1px solid rgba(13,92,99,0.1)',
          borderRadius: '50px', padding: '7px 18px',
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '0.7rem', fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: '#0D5C63', marginBottom: '32px',
          boxShadow: '0 2px 12px rgba(13,92,99,0.08)'
        }}>
          🍴 Global Recipes · Premium Content · Real Techniques
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          fontWeight: 700, fontStyle: 'italic',
          lineHeight: 1.05, color: '#1A1A2E',
          marginBottom: '24px',
          letterSpacing: '-0.02em'
        }}>
          Every Dish Tells a<br />
          <span style={{ color: '#0D5C63' }}>Story Worth</span>{' '}
          <span style={{ color: '#FF6B6B' }}>Tasting.</span>
        </h1>

        {/* Sub */}
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '1.1rem', color: 'rgba(26,26,46,0.6)',
          maxWidth: '520px', margin: '0 auto 44px',
          lineHeight: 1.75, fontWeight: 400
        }}>
          From Kampala kitchens to Parisian patisseries — Kulah is your
          passport to every flavor on earth.
        </p>

        {/* Search */}
        <div style={{
          display: 'flex', alignItems: 'center',
          maxWidth: '540px', margin: '0 auto',
          backgroundColor: 'white', borderRadius: '50px',
          border: '1.5px solid rgba(13,92,99,0.12)',
          boxShadow: '0 8px 32px rgba(13,92,99,0.10)',
          overflow: 'hidden', padding: '7px 7px 7px 22px'
        }}>
          <Search size={17} color="rgba(13,92,99,0.5)" style={{ flexShrink: 0 }} />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search jerk chicken, matoke, sourdough..."
            style={{
              flex: 1, border: 'none', outline: 'none',
              backgroundColor: 'transparent',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.92rem', color: '#1A1A2E',
              padding: '8px 12px'
            }}
          />
          <button onClick={onExplore} style={{
            backgroundColor: '#0D5C63', color: 'white',
            border: 'none', borderRadius: '50px',
            padding: '13px 30px',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.78rem', fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            cursor: 'pointer', whiteSpace: 'nowrap'
          }}>
            Explore
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: '56px', marginTop: '56px', flexWrap: 'wrap'
        }}>
          {[
            { number: '50+', label: 'Recipes' },
            { number: '6', label: 'Categories' },
            { number: 'Pro', label: 'Membership' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.2rem', fontWeight: 700,
                fontStyle: 'italic', color: '#0D5C63'
              }}>{stat.number}</div>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.7rem', fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(26,26,46,0.4)', marginTop: '2px'
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}