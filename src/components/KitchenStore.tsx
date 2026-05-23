import { ExternalLink, Star } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Cast Iron Skillet 12"',
    brand: 'Lodge',
    price: '$49.99',
    rating: 4.8,
    reviews: 12400,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?q=80&w=600&auto=format&fit=crop',
    tag: 'Best Seller',
    tagColor: '#0D5C63',
    link: 'https://amazon.com',
    description: 'The go-to pan for searing, grilling, and baking. Lasts a lifetime.'
  },
  {
    id: 2,
    name: 'Chef\'s Knife 8"',
    brand: 'Victorinox',
    price: '$39.99',
    rating: 4.9,
    reviews: 8900,
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?q=80&w=600&auto=format&fit=crop',
    tag: 'Vault Pick',
    tagColor: '#FF6B6B',
    link: 'https://amazon.com',
    description: 'Professional grade blade used in restaurant kitchens worldwide.'
  },
  {
    id: 3,
    name: 'Dutch Oven 5.5Qt',
    brand: 'Le Creuset',
    price: '$179.99',
    rating: 4.9,
    reviews: 6700,
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=600&auto=format&fit=crop',
    tag: 'Premium',
    tagColor: '#C47A2A',
    link: 'https://amazon.com',
    description: 'Essential for sourdough, stews, braises, and slow cooking.'
  },
  {
    id: 4,
    name: 'Digital Kitchen Scale',
    brand: 'OXO',
    price: '$29.99',
    rating: 4.7,
    reviews: 15200,
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=600&auto=format&fit=crop',
    tag: 'Essential',
    tagColor: '#2A7A2A',
    link: 'https://amazon.com',
    description: 'Precision baking starts here. Accurate to 1 gram.'
  },
];

export default function KitchenStore() {
  return (
    <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#FFF0E8', color: '#C45C2A',
            fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '4px 14px', borderRadius: '50px',
            marginBottom: '16px'
          }}>
            🛒 The Vault Kitchen Store
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800, fontStyle: 'italic',
            color: '#1A1A2E', marginBottom: '12px'
          }}>
            Tools That <span style={{ color: '#0D5C63' }}>Serious</span>{' '}
            <span style={{ color: '#FF6B6B' }}>Cooks</span> Use
          </h2>
          <p style={{ color: '#1A1A2E60', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto' }}>
            Every product is personally tested and recommended. Affiliate links help keep this site free.
          </p>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {PRODUCTS.map(product => (
            <div key={product.id} style={{
              backgroundColor: '#FFFAF5',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(13,92,99,0.08)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(13,92,99,0.1)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  backgroundColor: product.tagColor, color: 'white',
                  fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '4px 10px', borderRadius: '50px'
                }}>
                  {product.tag}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '20px' }}>
                <div style={{
                  fontSize: '0.72rem', fontWeight: 700,
                  color: '#1A1A2E50', textTransform: 'uppercase',
                  letterSpacing: '0.08em', marginBottom: '4px'
                }}>
                  {product.brand}
                </div>
                <h3 style={{
                  fontSize: '1rem', fontWeight: 700,
                  color: '#1A1A2E', marginBottom: '8px'
                }}>
                  {product.name}
                </h3>
                <p style={{
                  fontSize: '0.82rem', color: '#1A1A2E60',
                  lineHeight: 1.5, marginBottom: '16px'
                }}>
                  {product.description}
                </p>

                {/* Rating */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  marginBottom: '16px'
                }}>
                  <Star size={14} color="#FFB800" fill="#FFB800" />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1A1A2E' }}>
                    {product.rating}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#1A1A2E50' }}>
                    ({product.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                {/* Price + CTA */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.3rem', fontWeight: 800, color: '#0D5C63'
                  }}>
                    {product.price}
                  </span>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      backgroundColor: '#0D5C63', color: 'white',
                      textDecoration: 'none',
                      borderRadius: '10px', padding: '10px 18px',
                      fontSize: '0.78rem', fontWeight: 700,
                      letterSpacing: '0.06em', textTransform: 'uppercase'
                    }}
                  >
                    Buy <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center', marginTop: '32px',
          fontSize: '0.75rem', color: '#1A1A2E40'
        }}>
          * As an Amazon Associate, The Flavor Vault earns from qualifying purchases at no extra cost to you.
        </p>
      </div>
    </section>
  );
}