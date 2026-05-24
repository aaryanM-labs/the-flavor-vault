import { Download, Check } from 'lucide-react';

const PLANS = [
  {
    id: 1,
    name: 'The 7-Day Reset',
    description: 'Clean, balanced meals for a full week. Includes shopping list and prep guide.',
    price: '$12',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop',
    includes: ['7 breakfast recipes', '7 lunch recipes', '7 dinner recipes', 'Full shopping list', 'Meal prep guide'],
    tag: 'Most Popular', tagColor: '#FF6B6B'
  },
  {
    id: 2,
    name: 'High Protein Plan',
    description: 'Muscle-building meals built around whole foods and real ingredients.',
    price: '$12',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop',
    includes: ['5 high-protein dinners', 'Snack recipes', 'Macro breakdown', 'Shopping list', 'Substitution guide'],
    tag: 'New', tagColor: '#0D5C63'
  },
  {
    id: 3,
    name: 'African Kitchen Collection',
    description: 'A deep dive into East and West African cuisine with authentic techniques.',
    price: '$15',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop',
    includes: ['12 African recipes', 'Ingredient sourcing guide', 'Technique breakdown', 'Cultural context', 'Shopping list'],
    tag: 'Vault Exclusive', tagColor: '#8B5E3C'
  },
];

export default function MealPlans() {
  return (
    <section style={{
      padding: '100px 32px',
      background: 'linear-gradient(180deg, #F5F0EB 0%, #FFFAF5 100%)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block',
            fontFamily: 'Space Grotesk, sans-serif',
            backgroundColor: '#FFF0E8', color: '#C45C2A',
            fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '5px 14px', borderRadius: '50px', marginBottom: '20px'
          }}>
            📋 Digital Meal Plans
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 700, fontStyle: 'italic',
            color: '#1A1A2E', marginBottom: '14px'
          }}>
            Done-For-You{' '}
            <span style={{ color: '#FF6B6B' }}>Meal Plans</span>
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            color: 'rgba(26,26,46,0.55)', fontSize: '0.95rem'
          }}>
            Buy once, download instantly. No subscription needed.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '28px'
        }}>
          {PLANS.map(plan => (
            <div key={plan.id} style={{
              backgroundColor: 'white', borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
              display: 'flex', flexDirection: 'column'
            }}>
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={plan.image} alt={plan.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  backgroundColor: plan.tagColor, color: 'white',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.65rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '4px 12px', borderRadius: '50px'
                }}>
                  {plan.tag}
                </div>
              </div>

              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.2rem', fontWeight: 700,
                  fontStyle: 'italic', color: '#1A1A2E', marginBottom: '10px'
                }}>
                  {plan.name}
                </h3>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.85rem', color: 'rgba(26,26,46,0.6)',
                  lineHeight: 1.65, marginBottom: '20px'
                }}>
                  {plan.description}
                </p>
                <ul style={{
                  listStyle: 'none', padding: 0,
                  display: 'flex', flexDirection: 'column',
                  gap: '8px', marginBottom: '24px', flex: 1
                }}>
                  {plan.includes.map(item => (
                    <li key={item} style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.82rem', color: '#1A1A2E'
                    }}>
                      <Check size={13} color="#0D5C63" style={{ flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', marginTop: 'auto'
                }}>
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.8rem', fontWeight: 700,
                    fontStyle: 'italic', color: '#0D5C63'
                  }}>
                    {plan.price}
                  </span>
                  <button style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    backgroundColor: '#FF6B6B', color: 'white',
                    border: 'none', borderRadius: '12px',
                    padding: '12px 22px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.75rem', fontWeight: 700,
                    cursor: 'pointer',
                    letterSpacing: '0.06em', textTransform: 'uppercase'
                  }}>
                    <Download size={13} /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}