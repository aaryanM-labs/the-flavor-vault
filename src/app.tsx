import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetail from './components/RecipeDetail';
import Subscription from './components/Subscription';
import About from './components/About';
import Newsletter from './components/Newsletter';
import KitchenStore from './components/KitchenStore';
import MealPlans from './components/MealPlans';
import Footer from './components/Footer';
import type { Recipe } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
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