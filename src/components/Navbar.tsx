import { useState } from 'react';
import { Menu, X, Gem } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onJoinVault: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onJoinVault }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'explore', label: 'Recipes' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'meal-plans', label: 'Meal Plans' },
    { id: 'store', label: 'Kitchen Store' },
    { id: 'vault', label: 'Premium' },
  ];

  const handleTab = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      backgroundColor: 'rgba(255,250,245,0.96)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(13,92,99,0.08)',
      boxShadow: '0 1px 16px rgba(13,92,99,0.06)'
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        padding: '0 32px', height: '72px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <div onClick={() => handleTab('home')} style={{
          cursor: 'pointer', display: 'flex',
          alignItems: 'center', gap: '8px', flexShrink: 0
        }}>
          <Gem size={18} color="#FF6B6B" />
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.5rem', fontWeight: 700,
            fontStyle: 'italic', color: '#0D5C63',
            letterSpacing: '-0.02em'
          }}>
            Kul<span style={{ color: '#FF6B6B' }}>ah</span>
          </span>
        </div>

        {/* Desktop Tabs */}
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="desktop-nav">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => handleTab(tab.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.82rem', fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.02em',
              color: activeTab === tab.id ? '#0D5C63' : 'rgba(26,26,46,0.55)',
              borderBottom: activeTab === tab.id ? '2px solid #0D5C63' : '2px solid transparent',
              paddingBottom: '4px', transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button onClick={onJoinVault} style={{
          backgroundColor: '#FF6B6B', color: 'white',
          border: 'none', borderRadius: '50px',
          padding: '10px 24px', fontSize: '0.75rem',
          fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', cursor: 'pointer',
          fontFamily: 'Space Grotesk, sans-serif',
          boxShadow: '0 4px 16px rgba(255,107,107,0.3)',
          flexShrink: 0
        }} className="desktop-nav">
          Join Kulah Pro
        </button>

        {/* Mobile hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} style={{
          display: 'none', background: 'none',
          border: 'none', cursor: 'pointer',
          padding: '4px', color: '#1A1A2E'
        }} className="mobile-menu-btn">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          backgroundColor: 'white',
          borderTop: '1px solid rgba(13,92,99,0.08)',
          padding: '16px 24px 24px'
        }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => handleTab(tab.id)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              padding: '14px 16px',
              background: activeTab === tab.id ? '#E8F4F5' : 'none',
              border: 'none', borderRadius: '12px',
              fontSize: '0.95rem', fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              color: activeTab === tab.id ? '#0D5C63' : '#1A1A2E',
              cursor: 'pointer', marginBottom: '4px'
            }}>
              {tab.label}
            </button>
          ))}
          <button onClick={() => { onJoinVault(); setIsOpen(false); }} style={{
            width: '100%', backgroundColor: '#FF6B6B',
            color: 'white', border: 'none', borderRadius: '14px',
            padding: '14px', fontSize: '0.88rem', fontWeight: 700,
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            cursor: 'pointer', marginTop: '8px'
          }}>
            Join Kulah Pro
          </button>
        </div>
      )}
    </nav>
  );
}