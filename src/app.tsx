import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetail from './components/RecipeDetail';
import About from './components/About';
import Newsletter from './components/Newsletter';
import KitchenStore from './components/KitchenStore';
import MealPlans from './components/MealPlans';
import Footer from './components/Footer';
import type { Recipe, RecipeCategory } from './types';

type SubscriptionProps = {
  isPremium: boolean;
  onSubscribe: () => void;
  onUnsubscribe: () => void;
};

function Subscription({ isPremium, onSubscribe, onUnsubscribe }: SubscriptionProps) {
  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff5e6', borderRadius: '1rem', margin: '2rem 1rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>
        {isPremium ? 'Premium Member' : 'Unlock the Vault'}
      </h2>
      <p style={{ marginBottom: '1.5rem' }}>
        {isPremium
          ? 'Enjoy exclusive recipes, custom meal plans, and curated kitchen tips.'
          : 'Subscribe for premium recipes, meal plans, and exclusive kitchen offers.'}
      </p>
      <button
        onClick={isPremium ? onUnsubscribe : onSubscribe}
        style={{
          padding: '0.75rem 1.25rem',
          fontSize: '1rem',
          backgroundColor: '#ff8c42',
          color: '#fff',
          border: 'none',
          borderRadius: '999px',
          cursor: 'pointer',
        }}
      >
        {isPremium ? 'Cancel Subscription' : 'Join the Vault'}
      </button>
    </section>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<RecipeCategory>('all');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isPremium, setIsPremium] = useState(false);

  const handleViewDetails = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#FFFAF5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => { setActiveTab(tab); setSelectedRecipe(null); }}
        onJoinVault={() => { setActiveTab('vault'); setSelectedRecipe(null); }}
      />

      <div style={{ flex: 1 }}>
        {selectedRecipe ? (
          <RecipeDetail
            recipe={selectedRecipe}
            isPremium={isPremium}
            onBack={() => setSelectedRecipe(null)}
            onUnlockClick={() => { setActiveTab('vault'); setSelectedRecipe(null); }}
          />
        ) : (
          <>
            {activeTab === 'home' && (
              <>
                <Hero
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  onExplore={() => setActiveTab('explore')}
                />
                <RecipeGrid
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  searchTerm={searchTerm}
                  onViewDetails={handleViewDetails}
                  onUnlockClick={() => setActiveTab('vault')}
                />
                <About />
                <MealPlans />
                <KitchenStore />
                <Newsletter />
              </>
            )}
            {activeTab === 'explore' && (
              <RecipeGrid
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                searchTerm={searchTerm}
                onViewDetails={handleViewDetails}
                onUnlockClick={() => setActiveTab('vault')}
              />
            )}
            {activeTab === 'meal-plans' && <MealPlans />}
            {activeTab === 'store' && <KitchenStore />}
            {activeTab === 'vault' && (
              <>
                <Subscription
                  isPremium={isPremium}
                  onSubscribe={() => setIsPremium(true)}
                  onUnsubscribe={() => setIsPremium(false)}
                />
                <MealPlans />
                <KitchenStore />
              </>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}