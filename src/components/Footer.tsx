export default function Footer() {
  const cols = [
    { title: 'Explore', links: ['All Recipes', 'Ugandan Kitchen', 'International', 'Baking', 'Grilling', 'Desserts'] },
    { title: 'Kulah Pro', links: ['Join Premium', 'Meal Plans', 'Masterclasses', 'Kitchen Store'] },
    { title: 'Company', links: ['Our Story', 'Contact', 'Privacy', 'Terms'] },
  ];

  return (
    <footer style={{ backgroundColor: '#0D0D0D' }}>
      {/* Top bar */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '80px 0 60px'
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 40px',
          display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
          gap: '60px'
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2.4rem', fontWeight: 700,
              fontStyle: 'italic', marginBottom: '20px',
              color: 'white'
            }}>
              Kul<span style={{ color: '#FF6B6B' }}>ah</span>
            </div>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.88rem', color: 'rgba(255,255,255,0.35)',
              lineHeight: 1.8, maxWidth: '280px', marginBottom: '32px'
            }}>
              A global recipe platform dedicated to real techniques,
              honest ingredients, and the cultures behind every dish.
            </p>
            {/* Color blocks — brand identity */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {['#0D5C63', '#FF6B6B', '#F59E0B', '#8B5E3C', '#9333EA', '#16A34A'].map(c => (
                <div key={c} style={{
                  width: '24px', height: '24px',
                  borderRadius: '6px', backgroundColor: c,
                  opacity: 0.8
                }} />
              ))}
            </div>
          </div>

          {/* Links */}
          {cols.map(col => (
            <div key={col.title}>
              <h4 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)', marginBottom: '20px'
              }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {col.links.map(link => (
                  <li key={link} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none', transition: 'color 0.2s'
                    }}
                      onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#FF6B6B'}
                      onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)'}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '24px 40px',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '12px'
      }}>
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)',
          letterSpacing: '0.06em'
        }}>
          © 2026 Kulah. All rights reserved.
        </span>
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)',
          letterSpacing: '0.06em'
        }}>
          Made with ❤️ in Kampala, Uganda
        </span>
      </div>
    </footer>
  );
}