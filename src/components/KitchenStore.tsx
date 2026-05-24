import { ExternalLink, Star } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Cast Iron Skillet 12"',
    brand: 'Lodge',
    price: '$49.99',
    rating: 4.8, reviews: 12400,
    image: 'https://images.unsplash.com/photo-1622428051717-dcd9b8394e15?q=80&w=600&auto=format&fit=crop',
    tag: 'Best Seller', tagColor: '#0D5C63',
    link: 'https://amazon.com',
    description: 'The go-to pan for searing, grilling, and baking. Lasts a lifetime.'
  },
  {
    id: 2,
    name: "Chef's Knife 8\"",
    brand: 'Victorinox',
    price: '$39.99',
    rating: 4.9, reviews: 8900,
    image: 'https://images.unsplash.com/photo-1566454825481-9c31d8e5e8c4?q=80&w=600&auto=format&fit=crop',
    tag: 'Vault Pick', tagColor: '#FF6B6B',
    link: 'https://amazon.com',
    description: 'Professional grade blade used in restaurant kitchens worldwide.'
  },
  {
    id: 3,
    name: 'Dutch Oven 5.5Qt',
    brand: 'Le Creuset',
    price: '$179.99',
    rating: 4.9, reviews: 6700,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?q=80&w=600&auto=format&fit=crop',
    tag: 'Premium', tagColor: '#C47A2A',
    link: 'https://amazon.com',
    description: 'Essential for sourdough, stews, braises, and slow cooking.'
  },
  {
    id: 4,
    name: 'Digital Kitchen Scale',
    brand: 'OXO',
    price: '$29.99',
    rating: 4.7, reviews: 15200,
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=600&auto=format&fit=crop',
    tag: 'Essential', tagColor: '#16A34A',
    link: 'https://amazon.com',
    description: 'Precision baking starts here. Accurate to 1 gram.'
  },
];

export default function KitchenStore() {
  return (
    <section style={{ padding: '100px 32px', backgroundColor: '#1A1A2E' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block',
            fontFamily: 'Space Grotesk, sans-serif',
            backgroundColor: 'rgba(245,158,11,0.15)', color: '#F59E0B',
            fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '5px 14px', borderRadius: '50px', marginBottom: '20px'
          }}>
            🛒 Kitchen Store
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 700, fontStyle: 'italic',
            color: 'white', marginBottom: '14px'
          }}>
            Tools That{' '}
            <span style={{ color: '#F59E0B' }}>Serious</span>{' '}
            <span style={{ color: '#FF6B6B' }}>Cooks</span> Use
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem'
          }}>
            Every product is personally tested and recommended.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {PRODUCTS.map(product => (
            <div key={product.id} style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              borderRadius: '20px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'transform 0.2s, border-color 0.2s'
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(245,158,11,0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src={product.image} alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  backgroundColor: product.tagColor, color: 'white',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.62rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '4px 10px', borderRadius: '50px'
                }}>
                  {product.tag}
                </div>
              </div>

              <div style={{ padding: '20px' }}>
                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.65rem', fontWeight: 700,
                  color: 'rgba(255,255,255,0.35)',
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  marginBottom: '6px'
                }}>
                  {product.brand}
                </div>
                <h3 style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '1rem', fontWeight: 600,
                  color: 'white', marginBottom: '8px'
                }}>
                  {product.name}
                </h3>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.6, marginBottom: '16px'
                }}>
                  {product.description}
                </p>
                <div style={{
                  display: 'flex', alignItems: 'center',
                  gap: '6px', marginBottom: '16px'
                }}>
                  <Star size={13} color="#F59E0B" fill="#F59E0B" />
                  <span style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.8rem', fontWeight: 700, color: 'white'
                  }}>{product.rating}</span>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)'
                  }}>({product.reviews.toLocaleString()})</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.5rem', fontWeight: 700,
                    fontStyle: 'italic', color: '#F59E0B'
                  }}>
                    {product.price}
                  </span>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    backgroundColor: '#F59E0B', color: '#1A1A2E',
                    textDecoration: 'none', borderRadius: '10px',
                    padding: '10px 18px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.72rem', fontWeight: 700,
                    letterSpacing: '0.06em', textTransform: 'uppercase'
                  }}>
                    Buy <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          textAlign: 'center', marginTop: '32px',
          fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)'
        }}>
          * Affiliate links — purchases support Kulah at no extra cost to you.
        </p>
      </div>
    </section>
  );
}