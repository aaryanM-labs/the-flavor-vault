import { Search, ArrowRight } from 'lucide-react';

interface HeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onExplore: () => void;
}

export default function Hero({ searchTerm, setSearchTerm, onExplore }: HeroProps) {
  return (
    <section style={{
      minHeight: '100vh',
      backgroundColor: '#FFFAF5',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* LEFT — Typography */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px 60px 80px 80px',
        position: 'relative', zIndex: 2
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          backgroundColor: '#E8F4F5',
          borderRadius: '50px', padding: '7px 16px',
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '0.68rem', fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: '#0D5C63', marginBottom: '32px',
          width: 'fit-content'
        }}>
          ✦ Kulah — Eat Everything
        </div>

        {/* Big headline */}
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(3.5rem, 5.5vw, 6rem)',
          fontWeight: 700, fontStyle: 'italic',
          lineHeight: 0.95, color: '#1A1A2E',
          marginBottom: '32px',
          letterSpacing: '-0.03em'
        }}>
          Every<br />
          <span style={{ color: '#0D5C63' }}>Dish</span><br />
          Tells a<br />
          <span style={{
            color: '#FF6B6B',
            WebkitTextStroke: '0px',
          }}>Story.</span>
        </h1>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '1.05rem', color: 'rgba(26,26,46,0.6)',
          lineHeight: 1.8, maxWidth: '420px',
          marginBottom: '44px'
        }}>
          From the smoky kitchens of Kampala to the
          patisseries of Paris — your passport to every
          flavor on earth.
        </p>

        {/* Search */}
        <div style={{
          display: 'flex', alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: '16px',
          border: '1.5px solid rgba(13,92,99,0.12)',
          boxShadow: '0 8px 32px rgba(13,92,99,0.08)',
          overflow: 'hidden',
          padding: '8px 8px 8px 20px',
          maxWidth: '480px', marginBottom: '32px'
        }}>
          <Search size={16} color="rgba(13,92,99,0.4)" style={{ flexShrink: 0 }} />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search matoke, jerk chicken, sourdough..."
            style={{
              flex: 1, border: 'none', outline: 'none',
              backgroundColor: 'transparent',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem', color: '#1A1A2E',
              padding: '8px 12px'
            }}
          />
          <button onClick={onExplore} style={{
            backgroundColor: '#0D5C63', color: 'white',
            border: 'none', borderRadius: '10px',
            padding: '14px 24px',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            cursor: 'pointer', whiteSpace: 'nowrap',
            display: 'flex', alignItems: 'center', gap: '6px'
          }}>
            Explore <ArrowRight size={14} />
          </button>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '40px' }}>
          {[
            { n: '50+', l: 'Recipes' },
            { n: '6', l: 'Categories' },
            { n: 'Pro', l: 'Membership' },
          ].map(s => (
            <div key={s.l}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.8rem', fontWeight: 700,
                fontStyle: 'italic', color: '#0D5C63', lineHeight: 1
              }}>{s.n}</div>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.62rem', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(26,26,46,0.35)', marginTop: '3px'
              }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Food collage */}
      <div style={{
        position: 'relative',
        backgroundColor: '#E8F4F5',
        overflow: 'hidden'
      }}>
        {/* Main large image */}
        <div style={{
          position: 'absolute',
          top: '40px', left: '40px', right: '40px', bottom: '120px',
          borderRadius: '32px', overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(13,92,99,0.2)'
        }}>
          <img
            src="https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=1200&auto=format&fit=crop"
            alt="Food"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(13,92,99,0.5) 0%, transparent 60%)'
          }} />
          <div style={{
            position: 'absolute', bottom: '28px', left: '28px', right: '28px'
          }}>
            <div style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)', marginBottom: '6px'
            }}>
              ✦ Featured Today
            </div>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.6rem', fontWeight: 700,
              fontStyle: 'italic', color: 'white'
            }}>
              Jamaican Jerk Chicken
            </div>
          </div>
        </div>

        {/* Bottom floating cards */}
        <div style={{
          position: 'absolute',
          bottom: '32px', left: '40px', right: '40px',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '12px', height: '88px'
        }}>
          {[
            { img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop', label: 'Cardamom Knots', cat: 'Baking' },
            { img: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=400&auto=format&fit=crop', label: 'Matoke Stew', cat: 'Ugandan' },
          ].map(card => (
            <div key={card.label} style={{
              borderRadius: '16px', overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
            }}>
              <img src={card.img} alt={card.label}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)'
              }} />
              <div style={{
                position: 'absolute', bottom: '10px', left: '12px'
              }}>
                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.58rem', fontWeight: 700,
                  color: '#FF6B6B', letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>{card.cat}</div>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '0.82rem', fontWeight: 700,
                  fontStyle: 'italic', color: 'white'
                }}>{card.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative dot */}
        <div style={{
          position: 'absolute', top: '20px', right: '20px',
          width: '80px', height: '80px', borderRadius: '50%',
          backgroundColor: '#FF6B6B', opacity: 0.15
        }} />
      </div>
    </section>
  );
}