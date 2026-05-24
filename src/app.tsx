import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetail from './components/RecipeDetail';
import IngredientSlideshow from './components/IngredientSlideshow';
import IngredientPage from './components/IngredientPage';
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
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);
  const [isPremium, setIsPremium] = useState(false);

  const handleViewDetails = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setSelectedIngredient(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleIngredientClick = (id: string) => {
    setSelectedIngredient(id);
    setSelectedRecipe(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedRecipe(null);
    setSelectedIngredient(null);
  };

  return (
    <div style={{ backgroundColor: '#FFFAF5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSelectedRecipe(null);
          setSelectedIngredient(null);
        }}
        onJoinVault={() => {
          setActiveTab('vault');
          setSelectedRecipe(null);
          setSelectedIngredient(null);
        }}
      />

      <div style={{ flex: 1 }}>
        {selectedIngredient ? (
          <IngredientPage
            ingredientId={selectedIngredient}
            onBack={handleBack}
            onViewRecipe={handleViewDetails}
            onUnlockClick={() => setActiveTab('vault')}
          />
        ) : selectedRecipe ? (
          <RecipeDetail
            recipe={selectedRecipe}
            isPremium={isPremium}
            onBack={handleBack}
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
                <IngredientSlideshow onIngredientClick={handleIngredientClick} />
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