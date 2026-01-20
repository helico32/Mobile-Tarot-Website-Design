import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { SpreadScreen } from './components/SpreadScreen';
import { ResultScreen } from './components/ResultScreen';
import { SavedReadingsPage } from './components/SavedReadingsPage';

type Screen = 'landing' | 'spread' | 'result' | 'saved';

export interface TarotCard {
  id: number;
  name: string;
  upright: boolean;
  interpretation: string;
  deeperMeaning: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);
  const [spreadType, setSpreadType] = useState<'single' | 'three' | 'five'>('single');

  const handleStartReading = (type: 'single' | 'three' | 'five') => {
    setSpreadType(type);
    setCurrentScreen('spread');
  };

  const handleCardsSelected = (cards: TarotCard[]) => {
    setSelectedCards(cards);
    setCurrentScreen('result');
  };

  const handleNewReading = () => {
    setSelectedCards([]);
    setCurrentScreen('landing');
  };

  const handleBackToLanding = () => {
    setCurrentScreen('landing');
  };

  const handleViewSaved = () => {
    setCurrentScreen('saved');
  };

  const handleViewReading = (cards: TarotCard[], type: 'single' | 'three' | 'five') => {
    setSelectedCards(cards);
    setSpreadType(type);
    setCurrentScreen('result');
  };

  return (
    <div className="min-h-screen">
      {currentScreen === 'landing' && (
        <LandingPage 
          onStartReading={handleStartReading}
          onViewSaved={handleViewSaved}
        />
      )}
      {currentScreen === 'spread' && (
        <SpreadScreen
          spreadType={spreadType}
          onCardsSelected={handleCardsSelected}
          onBack={handleBackToLanding}
        />
      )}
      {currentScreen === 'result' && (
        <ResultScreen
          cards={selectedCards}
          spreadType={spreadType}
          onNewReading={handleNewReading}
          onBackToLanding={handleBackToLanding}
        />
      )}
      {currentScreen === 'saved' && (
        <SavedReadingsPage
          onBack={handleBackToLanding}
          onViewReading={handleViewReading}
        />
      )}
    </div>
  );
}