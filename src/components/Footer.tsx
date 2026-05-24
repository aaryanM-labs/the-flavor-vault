export default function Footer() {
  const links = [
    { title: 'Explore', items: ['All Recipes', 'Ugandan Kitchen', 'International', 'Baking', 'Grilling', 'Desserts'] },
    { title: 'Kulah Pro', items: ['Join Premium', 'Meal Plans', 'Masterclasses', 'Kitchen Store'] },
    { title: 'About', items: ['Our Story', 'Contact', 'Privacy Policy', 'Terms'] },
  ];

  return (
    <footer style={{ backgroundColor: '#1A1A2E', color: 'white' }}>
      {/* Top */}
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        padding: '80px 32px 60px',
        display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
        gap: '60px'
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2rem', fontWeight: 700,
            fontStyle: 'italic', marginBottom: '16px'
          }}>
            Kul<span style={{ color: '#FF6B6B' }}>ah</span>
          </div>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.75, maxWidth: '260px', marginBottom: '28px'
          }}>
            A global recipe platform dedicated to real techniques,
            honest ingredients, and the cultures behind every dish.
          </p>
          <div style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.65rem', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)'
          }}>
            Est. 2026 · Kampala, Uganda
          </div>
        </div>

        {/* Links */}
        {links.map(section => (
          <div key={section.title}>
            <h4 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.68rem', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)', marginBottom: '20px'
            }}>
              {section.title}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {section.items.map(item => (
                <li key={item} style={{ marginBottom: '12px' }}>
                  <a href="#" style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#FF6B6B'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '24px 32px',
        maxWidth: '1280px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '12px'
      }}>
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)',
          letterSpacing: '0.06em'
        }}>
          © 2026 Kulah. All rights reserved.
        </span>
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)',
          letterSpacing: '0.06em'
        }}>
          Made with ❤️ in Kampala
        </span>
      </div>
    </footer>
  );
}