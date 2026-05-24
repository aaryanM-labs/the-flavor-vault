import { Check, Gem } from 'lucide-react';

interface SubscriptionProps {
  isPremium: boolean;
  onSubscribe: () => void;
  onUnsubscribe: () => void;
}

export default function Subscription({ isPremium, onSubscribe, onUnsubscribe }: SubscriptionProps) {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Start exploring the world of flavor',
      features: ['Access to all free recipes', 'Search and filter by category', 'Nutrition information', 'Chef notes', 'Ingredient directory'],
      cta: 'Current Plan',
      featured: false,
      active: !isPremium,
    },
    {
      name: 'Kulah Pro',
      price: '$9',
      period: 'per month',
      description: 'Unlock every masterclass and premium recipe',
      features: ['Everything in Free', 'All premium locked recipes', 'Advanced techniques & masterclasses', 'New recipes every week', 'Priority support', 'Exclusive Ugandan collection'],
      cta: isPremium ? 'Current Plan' : 'Join Kulah Pro',
      featured: true,
      active: isPremium,
    },
  ];

  return (
    <section style={{
      padding: '100px 32px',
      background: 'linear-gradient(135deg, #0D5C63 0%, #0a4a50 60%, #083a40 100%)',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'rgba(255,107,107,0.08)', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '50px', padding: '6px 18px',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#FF6B6B', marginBottom: '24px'
          }}>
            <Gem size={13} /> Membership Plans
          </div>

          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 700, fontStyle: 'italic',
            color: 'white', marginBottom: '16px'
          }}>
            Unlock Kulah Pro
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            color: 'rgba(255,255,255,0.6)', fontSize: '1rem',
            maxWidth: '460px', margin: '0 auto', lineHeight: 1.7
          }}>
            Premium recipes, advanced techniques, and masterclasses
            from kitchens around the world.
          </p>
        </div>

        {/* Plans */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {plans.map(plan => (
            <div key={plan.name} style={{
              backgroundColor: plan.featured ? 'white' : 'rgba(255,255,255,0.06)',
              borderRadius: '28px', padding: '40px 36px',
              border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.1)',
              position: 'relative',
              boxShadow: plan.featured ? '0 32px 80px rgba(0,0,0,0.25)' : 'none'
            }}>
              {plan.featured && (
                <div style={{
                  position: 'absolute', top: '-14px', left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#FF6B6B', color: 'white',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '6px 20px', borderRadius: '50px',
                  whiteSpace: 'nowrap'
                }}>
                  Most Popular
                </div>
              )}

              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: plan.featured ? '#0D5C63' : 'rgba(255,255,255,0.5)',
                marginBottom: '8px'
              }}>
                {plan.name}
              </div>

              <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '3.5rem', fontWeight: 700,
                  color: plan.featured ? '#1A1A2E' : 'white', lineHeight: 1
                }}>
                  {plan.price}
                </span>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.85rem',
                  color: plan.featured ? 'rgba(26,26,46,0.5)' : 'rgba(255,255,255,0.4)'
                }}>
                  /{plan.period}
                </span>
              </div>

              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.88rem',
                color: plan.featured ? 'rgba(26,26,46,0.6)' : 'rgba(255,255,255,0.5)',
                marginBottom: '28px', lineHeight: 1.6
              }}>
                {plan.description}
              </p>

              <ul style={{
                listStyle: 'none', padding: 0,
                marginBottom: '32px',
                display: 'flex', flexDirection: 'column', gap: '12px'
              }}>
                {plan.features.map(f => (
                  <li key={f} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.88rem',
                    color: plan.featured ? '#1A1A2E' : 'rgba(255,255,255,0.75)'
                  }}>
                    <Check size={15} color={plan.featured ? '#0D5C63' : '#FF6B6B'} style={{ flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  if (plan.featured && !isPremium) onSubscribe();
                  if (plan.featured && isPremium) onUnsubscribe();
                }}
                style={{
                  width: '100%',
                  backgroundColor: plan.featured ? (isPremium ? '#1A1A2E' : '#FF6B6B') : 'rgba(255,255,255,0.08)',
                  color: 'white', border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '14px', padding: '15px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.82rem', fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  cursor: 'pointer'
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}