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
      features: [
        'Access to all free recipes',
        'Search and filter by category',
        'Nutrition information',
        'Chef notes',
      ],
      cta: 'Current Plan',
      isFeatured: false,
      isActive: !isPremium,
    },
    {
      name: 'Kulah Pro',
      price: '$9',
      period: 'per month',
      description: 'Unlock every masterclass and premium recipe',
      features: [
        'Everything in Free',
        'All premium locked recipes',
        'Advanced techniques & masterclasses',
        'New recipes every week',
        'Priority support',
      ],
      cta: isPremium ? 'Current Plan' : 'Join Kulah Pro',
      isFeatured: true,
      isActive: isPremium,
    },
  ];

  return (
    <section style={{
      padding: '80px 24px',
      background: 'linear-gradient(135deg, #0D5C63 0%, #0a4a50 100%)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50px', padding: '6px 16px',
            fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#FF6B6B', marginBottom: '24px'
          }}>
            <Gem size={14} /> Membership Plans
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 800, fontStyle: 'italic',
            color: 'white', marginBottom: '16px'
          }}>
            Unlock Kulah Pro
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>
            Premium recipes, advanced techniques, and masterclasses from kitchens around the world.
          </p>
        </div>

        {/* Plans */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {plans.map(plan => (
            <div
              key={plan.name}
              style={{
                backgroundColor: plan.isFeatured ? 'white' : 'rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '36px 32px',
                border: plan.isFeatured ? 'none' : '1px solid rgba(255,255,255,0.12)',
                position: 'relative',
                boxShadow: plan.isFeatured ? '0 24px 60px rgba(0,0,0,0.2)' : 'none'
              }}
            >
              {plan.isFeatured && (
                <div style={{
                  position: 'absolute', top: '-14px', left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#FF6B6B', color: 'white',
                  fontSize: '0.7rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '6px 20px', borderRadius: '50px',
                  whiteSpace: 'nowrap'
                }}>
                  Most Popular
                </div>
              )}

              <div style={{ marginBottom: '8px' }}>
                <span style={{
                  fontSize: '0.8rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: plan.isFeatured ? '#0D5C63' : 'rgba(255,255,255,0.6)'
                }}>
                  {plan.name}
                </span>
              </div>

              <div style={{ marginBottom: '8px' }}>
                <span style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '3rem', fontWeight: 800,
                  color: plan.isFeatured ? '#1A1A2E' : 'white'
                }}>
                  {plan.price}
                </span>
                <span style={{
                  fontSize: '0.85rem',
                  color: plan.isFeatured ? '#1A1A2E60' : 'rgba(255,255,255,0.5)',
                  marginLeft: '6px'
                }}>
                  /{plan.period}
                </span>
              </div>

              <p style={{
                fontSize: '0.88rem',
                color: plan.isFeatured ? '#1A1A2E70' : 'rgba(255,255,255,0.55)',
                marginBottom: '28px', lineHeight: 1.5
              }}>
                {plan.description}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    fontSize: '0.88rem',
                    color: plan.isFeatured ? '#1A1A2E' : 'rgba(255,255,255,0.8)'
                  }}>
                    <Check size={16} color={plan.isFeatured ? '#0D5C63' : '#FF6B6B'} style={{ flexShrink: 0 }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  if (plan.isFeatured && !isPremium) onSubscribe();
                  if (plan.isFeatured && isPremium) onUnsubscribe();
                }}
                style={{
                  width: '100%',
                  backgroundColor: plan.isFeatured ? (isPremium ? '#1A1A2E' : '#FF6B6B') : 'rgba(255,255,255,0.1)',
                  color: 'white',
                  border: plan.isFeatured ? 'none' : '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '14px', padding: '14px',
                  fontSize: '0.88rem', fontWeight: 700,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  cursor: plan.isActive && !plan.isFeatured ? 'default' : 'pointer',
                  opacity: plan.isActive && !plan.isFeatured ? 0.6 : 1
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {isPremium && (
          <p style={{
            textAlign: 'center', marginTop: '24px',
            color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem'
          }}>
            You are a Kulah Pro member. <button
              onClick={onUnsubscribe}
              style={{ background: 'none', border: 'none', color: '#FF6B6B', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600 }}
            >
              Cancel membership
            </button>
          </p>
        )}
      </div>
    </section>
  );
}