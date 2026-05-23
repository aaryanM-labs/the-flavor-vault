import { Search } from 'lucide-react';

interface HeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onExplore: () => void;
}

export default function Hero({ searchTerm, setSearchTerm, onExplore }: HeroProps) {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #E8F4F5 0%, #FFFAF5 50%, #FFF0E8 100%)',
      padding: '80px 24px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Background decorative circles */}
      <div style={{
        position: 'absolute', top: '-80px', left: '-80px',
        width: '300px', height: '300px',
        borderRadius: '50%',
        background: 'rgba(13,92,99,0.06)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', right: '-60px',
        width: '250px', height: '250px',
        borderRadius: '50%',
        background: 'rgba(255,107,107,0.08)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          backgroundColor: 'white',
          border: '1px solid rgba(13,92,99,0.12)',
          borderRadius: '50px',
          padding: '6px 16px',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#0D5C63',
          marginBottom: '28px',
          boxShadow: '0 2px 8px rgba(13,92,99,0.08)'
        }}>
          🍴 Global Recipes · Premium Content · Real Techniques
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          fontWeight: 800,
          lineHeight: 1.15,
          color: '#1A1A2E',
          marginBottom: '20px',
          fontStyle: 'italic'
        }}>
          Kulah.<br />
<span style={{ color: '#0D5C63' }}>Eat</span>{' '}
<span style={{ color: '#FF6B6B' }}>Everything.</span>
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: '1.05rem',
          color: '#1A1A2E99',
          maxWidth: '560px',
          margin: '0 auto 40px',
          lineHeight: 1.7
        }}>
          From Kampala kitchens to Parisian patisseries — Kulah is your passport to every flavor on earth. Free recipes, premium masterclasses, and real techniques.
        </p>

        {/* Search Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: '560px',
          margin: '0 auto',
          backgroundColor: 'white',
          borderRadius: '50px',
          border: '1.5px solid rgba(13,92,99,0.15)',
          boxShadow: '0 4px 20px rgba(13,92,99,0.10)',
          overflow: 'hidden',
          padding: '6px 6px 6px 20px'
        }}>
          <Search size={18} color="#0D5C6399" style={{ flexShrink: 0 }} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search jerk chicken, matoke, sourdough..."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              fontSize: '0.9rem',
              color: '#1A1A2E',
              padding: '8px 12px',
              fontFamily: 'Inter, sans-serif'
            }}
          />
          <button
            onClick={onExplore}
            style={{
              backgroundColor: '#0D5C63',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              padding: '12px 28px',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            Explore
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '48px',
          marginTop: '48px',
          flexWrap: 'wrap'
        }}>
          {[
            { number: '50+', label: 'Recipes' },
            { number: '5', label: 'Categories' },
            { number: '2', label: 'Premium Tiers' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2rem',
                fontWeight: 800,
                color: '#0D5C63'
              }}>{stat.number}</div>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1A1A2E60'
              }}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}