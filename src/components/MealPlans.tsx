import { Download, Check, } from 'lucide-react';

const PLANS = [
  {
    id: 1, name: 'The 7-Day Reset',
    description: 'Clean, balanced meals for a full week. Includes shopping list and prep guide.',
    price: '$12',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop',
    includes: ['7 breakfast recipes', '7 lunch recipes', '7 dinner recipes', 'Full shopping list', 'Meal prep guide'],
    tag: 'Most Popular', tagColor: '#FF6B6B', featured: true
  },
  {
    id: 2, name: 'High Protein Plan',
    description: 'Muscle-building meals built around whole foods.',
    price: '$12',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop',
    includes: ['5 high-protein dinners', 'Snack recipes', 'Macro breakdown', 'Shopping list'],
    tag: 'New', tagColor: '#0D5C63', featured: false
  },
  {
    id: 3, name: 'African Kitchen Collection',
    description: 'A deep dive into East and West African cuisine.',
    price: '$15',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
    includes: ['12 African recipes', 'Ingredient sourcing guide', 'Technique breakdown', 'Cultural context'],
    tag: 'Vault Exclusive', tagColor: '#8B5E3C', featured: false
  },
];

export default function MealPlans() {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #F5F0EB 0%, #FFFAF5 100%)',
      padding: '100px 0'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#FF6B6B', marginBottom: '12px',
            display: 'flex', alignItems: 'center', gap: '12px'
          }}>
            <div style={{ width: '32px', height: '1px', backgroundColor: '#FF6B6B' }} />
            Digital Meal Plans
          </div>
          <div style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px'
          }}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 700, fontStyle: 'italic',
              color: '#1A1A2E', lineHeight: 1
            }}>
              Done-For-You<br />
              <span style={{ color: '#FF6B6B' }}>Meal Plans</span>
            </h2>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem', color: 'rgba(26,26,46,0.5)',
              maxWidth: '280px', lineHeight: 1.7
            }}>
              Buy once, download instantly. No subscription needed.
            </p>
          </div>
        </div>

        {/* Plans — asymmetric layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gap: '20px', alignItems: 'start'
        }}>
          {PLANS.map((plan, index) => (
            <div key={plan.id} style={{
              backgroundColor: 'white',
              borderRadius: '24px', overflow: 'hidden',
              border: plan.featured ? `2px solid ${plan.tagColor}` : '1px solid rgba(0,0,0,0.06)',
              boxShadow: plan.featured ? `0 24px 60px ${plan.tagColor}20` : '0 4px 20px rgba(0,0,0,0.05)',
              transform: index === 0 ? 'none' : index === 1 ? 'translateY(20px)' : 'translateY(40px)'
            }}>
              {/* Image */}
              <div style={{
                position: 'relative',
                aspectRatio: plan.featured ? '16/9' : '4/3',
                overflow: 'hidden'
              }}>
                <img src={plan.image} alt={plan.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)'
                }} />
                <div style={{
                  position: 'absolute', top: '14px', left: '14px',
                  backgroundColor: plan.tagColor, color: 'white',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.6rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '5px 12px', borderRadius: '50px'
                }}>{plan.tag}</div>
                {plan.featured && (
                  <div style={{
                    position: 'absolute', bottom: '16px', left: '16px', right: '16px'
                  }}>
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.4rem', fontStyle: 'italic',
                      fontWeight: 700, color: 'white'
                    }}>{plan.name}</div>
                  </div>
                )}
              </div>

              <div style={{ padding: plan.featured ? '28px' : '22px' }}>
                {!plan.featured && (
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1rem', fontWeight: 700,
                    fontStyle: 'italic', color: '#1A1A2E',
                    marginBottom: '8px'
                  }}>{plan.name}</h3>
                )}
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.82rem', color: 'rgba(26,26,46,0.6)',
                  lineHeight: 1.65, marginBottom: '18px'
                }}>{plan.description}</p>

                <ul style={{
                  listStyle: 'none', padding: 0,
                  marginBottom: '20px',
                  display: 'flex', flexDirection: 'column', gap: '7px'
                }}>
                  {plan.includes.map(item => (
                    <li key={item} style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.8rem', color: '#1A1A2E'
                    }}>
                      <Check size={12} color={plan.tagColor} style={{ flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: plan.featured ? '2rem' : '1.6rem',
                    fontWeight: 700, fontStyle: 'italic',
                    color: plan.tagColor
                  }}>{plan.price}</span>
                  <button style={{
                    display: 'flex', alignItems: 'center', gap: '7px',
                    backgroundColor: plan.tagColor, color: 'white',
                    border: 'none', borderRadius: '12px',
                    padding: plan.featured ? '13px 22px' : '11px 18px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.7rem', fontWeight: 700,
                    cursor: 'pointer',
                    letterSpacing: '0.08em', textTransform: 'uppercase'
                  }}>
                    <Download size={12} /> Buy Now
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