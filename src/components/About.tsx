// Removed lucide-react icons to avoid missing exports; using emojis for social icons

export default function About() {
  return (
    <section style={{
      padding: '120px 32px',
      background: 'linear-gradient(180deg, #FFFAF5 0%, #F5F0EB 100%)',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1.3fr',
        gap: '80px', alignItems: 'center'
      }}>

        {/* Image */}
        <div style={{ position: 'relative' }}>
          <div style={{
            borderRadius: '32px', overflow: 'hidden',
            aspectRatio: '3/4',
            boxShadow: '0 32px 80px rgba(13,92,99,0.15)'
          }}>
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop"
              alt="Chef"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {/* Floating card */}
          <div style={{
            position: 'absolute', bottom: '-24px', right: '-24px',
            backgroundColor: 'white', borderRadius: '20px',
            padding: '20px 28px',
            boxShadow: '0 16px 40px rgba(13,92,99,0.12)',
            border: '1px solid rgba(13,92,99,0.06)'
          }}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2.4rem', fontWeight: 700,
              fontStyle: 'italic', color: '#0D5C63', lineHeight: 1
            }}>50+</div>
            <div style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(26,26,46,0.4)', marginTop: '4px'
            }}>Recipes & Counting</div>
          </div>
        </div>

        {/* Text */}
        <div>
          <div style={{
            display: 'inline-block',
            fontFamily: 'Space Grotesk, sans-serif',
            backgroundColor: '#E8F4F5', color: '#0D5C63',
            fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '5px 14px', borderRadius: '50px',
            marginBottom: '24px'
          }}>
            The Person Behind Kulah
          </div>

          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 700, fontStyle: 'italic',
            color: '#1A1A2E', marginBottom: '24px',
            lineHeight: 1.15
          }}>
            Kulah means eat.<br />
            <span style={{ color: '#FF6B6B' }}>We take that seriously.</span>
          </h2>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1rem', color: 'rgba(26,26,46,0.7)',
            lineHeight: 1.85, marginBottom: '20px'
          }}>
            I built Kulah because great food has no borders, no passport,
            no gatekeepers. From the smoky kitchens of Kampala to the
            patisseries of Paris — every culture has a dish that stops
            you in your tracks.
          </p>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1rem', color: 'rgba(26,26,46,0.7)',
            lineHeight: 1.85, marginBottom: '36px'
          }}>
            This is not just a recipe site. It is a living archive of
            techniques, stories, and flavors worth preserving.
          </p>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '40px',
            padding: '28px 0',
            borderTop: '1px solid rgba(13,92,99,0.1)',
            borderBottom: '1px solid rgba(13,92,99,0.1)',
            marginBottom: '36px', flexWrap: 'wrap'
          }}>
            {[
              { number: '12K+', label: 'Followers' },
              { number: '50+', label: 'Recipes' },
              { number: '4.9★', label: 'Rating' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.8rem', fontWeight: 700,
                  fontStyle: 'italic', color: '#0D5C63'
                }}>{stat.number}</div>
                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.65rem', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(26,26,46,0.4)'
                }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { icon: '📸', label: 'Instagram', color: '#E1306C'},
              { icon: '▶️', label: 'YouTube', color: '#FF0000' },
              { icon: '🐦', label: 'Twitter', color: '#1DA1F2' },
            ].map(s => (
              <button key={s.label} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'white',
                border: '1.5px solid rgba(13,92,99,0.12)',
                borderRadius: '50px', padding: '10px 20px',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.8rem', fontWeight: 600,
                color: '#1A1A2E', cursor: 'pointer'
              }}>
                {s.icon} {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}