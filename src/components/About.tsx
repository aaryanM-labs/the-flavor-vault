// Removed lucide-react icons to avoid missing exports; using emojis for social icons

export default function About() {
  return (
    <section style={{
      padding: '80px 24px',
      backgroundColor: '#FFFAF5',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1.2fr',
        gap: '80px', alignItems: 'center'
      }}>

        {/* Image side */}
        <div style={{ position: 'relative' }}>
          <div style={{
            borderRadius: '24px', overflow: 'hidden',
            aspectRatio: '4/5',
            boxShadow: '0 24px 60px rgba(13,92,99,0.15)'
          }}>
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop"
              alt="Chef"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {/* Floating stat card */}
          <div style={{
            position: 'absolute', bottom: '-20px', right: '-20px',
            backgroundColor: 'white',
            borderRadius: '20px', padding: '20px 28px',
            boxShadow: '0 12px 32px rgba(13,92,99,0.12)',
            border: '1px solid rgba(13,92,99,0.08)',
            textAlign: 'center'
          }}>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.2rem', fontWeight: 800, color: '#0D5C63'
            }}>50+</div>
            <div style={{
              fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#1A1A2E60'
            }}>Recipes & Counting</div>
          </div>
        </div>

        {/* Text side */}
        <div>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#E8F4F5', color: '#0D5C63',
            fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '4px 14px', borderRadius: '50px',
            marginBottom: '20px'
          }}>
            The Person Behind Kulah
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800, fontStyle: 'italic',
            color: '#1A1A2E', marginBottom: '20px', lineHeight: 1.2
          }}>
            Kulah means eat.<br />
<span style={{ color: '#FF6B6B' }}>We take that seriously.</span>
          </h2>

          <p style={{
            fontSize: '1rem', color: '#1A1A2E80',
            lineHeight: 1.8, marginBottom: '16px'
          }}>
            I built Kulah because great food has no borders, no passport, no gatekeepers.
            From the smoky kitchens of Kampala to the patisseries of Paris — every culture
            has a dish that stops you in your tracks.
          </p>

          <p style={{
            fontSize: '1rem', color: '#1A1A2E80',
            lineHeight: 1.8, marginBottom: '32px'
          }}>
            This is not just a recipe site. It's a living archive of techniques, stories,
            and flavors worth preserving. Every recipe here has been tested, tasted, and
            approved by people who take food seriously.
          </p>

          {/* Stats row */}
          <div style={{
            display: 'flex', gap: '32px',
            marginBottom: '36px',
            padding: '24px 0',
            borderTop: '1px solid rgba(13,92,99,0.08)',
            borderBottom: '1px solid rgba(13,92,99,0.08)',
          }}>
            {[
              { number: '12K+', label: 'Followers' },
              { number: '50+', label: 'Recipes' },
              { number: '4.9★', label: 'Rating' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.6rem', fontWeight: 800, color: '#0D5C63'
                }}>{stat.number}</div>
                <div style={{
                  fontSize: '0.72rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: '#1A1A2E50'
                }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { icon: '📸', label: 'Instagram', color: '#E1306C' },
              { icon: '▶️', label: 'YouTube', color: '#FF0000' },
              { icon: '🐦', label: 'Twitter', color: '#1DA1F2' },
            ].map(social => (
              <button key={social.label} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'white',
                border: '1.5px solid rgba(13,92,99,0.12)',
                borderRadius: '50px', padding: '10px 20px',
                fontSize: '0.82rem', fontWeight: 600,
                color: '#1A1A2E', cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
                {social.icon} {social.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}