export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1A1A2E',
      color: 'rgba(255,255,255,0.6)',
      padding: '48px 24px 32px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.6rem', fontWeight: 700,
          fontStyle: 'italic', marginBottom: '12px'
        }}>
          The Flavor <span style={{ color: '#FF6B6B' }}>Vault</span>
        </div>
        <p style={{ fontSize: '0.88rem', marginBottom: '32px', maxWidth: '400px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Chef-crafted recipes from across the world. Free and premium content for serious food lovers.
        </p>
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '24px',
          fontSize: '0.78rem'
        }}>
          © 2026 The Flavor Vault. All rights reserved.
        </div>
      </div>
    </footer>
  );
}