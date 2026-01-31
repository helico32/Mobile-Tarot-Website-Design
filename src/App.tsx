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
  const [isFromSaved, setIsFromSaved] = useState(false);
  const [savedReadingId, setSavedReadingId] = useState<string | undefined>();

  const handleStartReading = (type: 'single' | 'three' | 'five') => {
    setSpreadType(type);
    setCurrentScreen('spread');
  };

  const handleCardsSelected = (cards: TarotCard[]) => {
    setSelectedCards(cards);
    setIsFromSaved(false);
    setSavedReadingId(undefined);
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

  const handleViewReading = (cards: TarotCard[], type: 'single' | 'three' | 'five', readingId?: string) => {
    setSelectedCards(cards);
    setSpreadType(type);
    setIsFromSaved(true);
    setSavedReadingId(readingId);
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
          onViewSaved={handleViewSaved}
        />
      )}
      {currentScreen === 'result' && (
        <ResultScreen
          cards={selectedCards}
          spreadType={spreadType}
          onNewReading={handleNewReading}
          onBackToLanding={handleBackToLanding}
          onViewSaved={handleViewSaved}
          isFromSaved={isFromSaved}
          savedReadingId={savedReadingId}
        />
      )}
      {currentScreen === 'saved' && (
        <SavedReadingsPage
          onBack={handleBackToLanding}
          onViewReading={handleViewReading}
          onViewSaved={handleViewSaved}
        />
      )}
    </div>
  );
}