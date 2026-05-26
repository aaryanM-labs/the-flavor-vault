// Removed lucide-react icons to avoid missing exports; using emojis for social icons

export default function About() {
  return (
    <section style={{
      backgroundColor: '#FFFAF5',
      padding: '120px 0',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '0 40px'
      }}>

        {/* Top label */}
        <div style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '0.68rem', fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: '#FF6B6B', marginBottom: '60px',
          display: 'flex', alignItems: 'center', gap: '12px'
        }}>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#FF6B6B' }} />
          The Person Behind Kulah
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'center'
        }}>

          {/* LEFT — Big quote + text */}
          <div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.8rem, 4.5vw, 4.5rem)',
              fontWeight: 700, fontStyle: 'italic',
              color: '#1A1A2E', lineHeight: 1.05,
              marginBottom: '32px',
              letterSpacing: '-0.02em'
            }}>
              "Kulah means<br />
              <span style={{ color: '#0D5C63' }}>eat.</span> We take<br />
              that <span style={{ color: '#FF6B6B' }}>seriously."</span>
            </h2>

            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1rem', color: 'rgba(26,26,46,0.65)',
              lineHeight: 1.85, marginBottom: '20px', maxWidth: '460px'
            }}>
              I built Kulah because great food has no borders, no passport,
              no gatekeepers. From the smoky kitchens of Kampala to the
              patisseries of Paris — every culture has a dish that stops
              you in your tracks.
            </p>

            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1rem', color: 'rgba(26,26,46,0.65)',
              lineHeight: 1.85, marginBottom: '48px', maxWidth: '460px'
            }}>
              This is not just a recipe site. It is a living archive of
              techniques, stories, and flavors worth preserving.
            </p>

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
              gap: '0', marginBottom: '48px',
              borderTop: '1px solid rgba(13,92,99,0.1)',
              borderBottom: '1px solid rgba(13,92,99,0.1)',
            }}>
              {[
                { n: '12K+', l: 'Followers', color: '#0D5C63' },
                { n: '50+', l: 'Recipes', color: '#FF6B6B' },
                { n: '4.9★', l: 'Rating', color: '#F59E0B' },
              ].map((s, i) => (
                <div key={s.l} style={{
                  padding: '24px 0',
                  borderRight: i < 2 ? '1px solid rgba(13,92,99,0.1)' : 'none',
                  paddingLeft: i > 0 ? '24px' : '0'
                }}>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '2rem', fontWeight: 700,
                    fontStyle: 'italic', color: s.color
                  }}>{s.n}</div>
                  <div style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.62rem', fontWeight: 600,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(26,26,46,0.35)', marginTop: '4px'
                  }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: '📸', label: 'Instagram', color: '#E1306C'},
              { icon: '▶️', label: 'YouTube', color: '#FF0000' },
              { icon: '🐦', label: 'Twitter', color: '#1DA1F2' },,
              ].map(s => (
              <button key={s!.label} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'white',
                border: '1.5px solid rgba(13,92,99,0.12)',
                borderRadius: '50px', padding: '10px 20px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.8rem', fontWeight: 600,
                color: '#1A1A2E', cursor: 'pointer'
              }}>
                {s!.icon} {s!.label}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Image with overlapping elements */}
          <div style={{ position: 'relative', height: '600px' }}>
            {/* Main image */}
            <div style={{
              position: 'absolute',
              top: 0, left: '40px', right: 0, bottom: '80px',
              borderRadius: '32px', overflow: 'hidden',
              boxShadow: '0 40px 100px rgba(13,92,99,0.15)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop"
                alt="Chef"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Color overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(13,92,99,0.2) 0%, transparent 60%)'
              }} />
            </div>

            {/* Floating stat card */}
            <div style={{
              position: 'absolute',
              bottom: '40px', left: 0,
              backgroundColor: '#1A1A2E',
              borderRadius: '20px', padding: '24px 28px',
              boxShadow: '0 24px 60px rgba(26,26,46,0.2)',
              minWidth: '200px'
            }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.8rem', fontWeight: 700,
                fontStyle: 'italic', color: '#FF6B6B', lineHeight: 1
              }}>50+</div>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.62rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)', marginTop: '6px'
              }}>Global Recipes</div>
              <div style={{
                marginTop: '16px', display: 'flex', gap: '6px'
              }}>
                {['🇺🇬', '🇫🇷', '🇯🇲', '🇯🇵', '🇮🇳'].map(flag => (
                  <span key={flag} style={{ fontSize: '1.1rem' }}>{flag}</span>
                ))}
              </div>
            </div>

            {/* Decorative teal circle */}
            <div style={{
              position: 'absolute', top: '-20px', left: '10px',
              width: '100px', height: '100px', borderRadius: '50%',
              backgroundColor: '#0D5C63', opacity: 0.1
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}