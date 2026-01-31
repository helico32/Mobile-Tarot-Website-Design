import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TarotCard } from '../App';
import { tarotDeck } from '../data/tarotDeck';
import { PageBackground } from './ui/PageBackground';

import { SavedReadingsButton } from './ui/SavedReadingsButton';

interface SpreadScreenProps {
  spreadType: 'single' | 'three' | 'five';
  onCardsSelected: (cards: TarotCard[]) => void;
  onBack: () => void;
  onViewSaved: () => void;
}

export function SpreadScreen({ spreadType, onCardsSelected, onBack, onViewSaved }: SpreadScreenProps) {
  const [shuffledDeck, setShuffledDeck] = useState<TarotCard[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [isRevealing, setIsRevealing] = useState(false);
  
  const cardsNeeded = spreadType === 'single' ? 1 : spreadType === 'three' ? 3 : 5;

  const labels = {
    single: ['votre carte'],
    three: ['Passé', 'Présent', 'Futur'],
    five: ['Situation', 'Obstacle', 'Conseil', 'Passé', 'Futur'],
  };

  useEffect(() => {
    const shuffled = [...tarotDeck]
      .sort(() => Math.random() - 0.5)
      .slice(0, 12);
    setShuffledDeck(shuffled);
  }, []);

  const handleCardClick = (index: number) => {
    if (isRevealing || selectedIndices.includes(index)) return;
    
    const newSelected = [...selectedIndices, index];
    setSelectedIndices(newSelected);

    if (newSelected.length === cardsNeeded) {
      setIsRevealing(true);
      setTimeout(() => {
        const selectedCards = newSelected.map(i => shuffledDeck[i]);
        onCardsSelected(selectedCards);
      }, 1200);
    }
  };

  return (
    <PageBackground variant="navy" showStars={false}>

      <div className="page-container">
        <SavedReadingsButton onClick={onViewSaved} />

        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="back-button"
            disabled={isRevealing}
            aria-label="Retour à l'accueil"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Retour</span>
          </button>
        </div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-display-sm text-gold text-center mb-4"
        >
          Choisissez {cardsNeeded === 1 ? 'une carte' : `${cardsNeeded} cartes`}
          <br />
          pour votre guidance
        </motion.h2>

        {/* Progress indicators */}
        {spreadType !== 'single' && (
          <div className="flex justify-center gap-3 mb-6">
            {labels[spreadType].map((label, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`progress-indicator ${
                  i === selectedIndices.length ? 'active' : ''
                } ${i < selectedIndices.length ? 'opacity-100' : 'opacity-40'}`}
              >
                <div className={`progress-dot ${
                  i < selectedIndices.length ? 'selection-circle completed' : 
                  i === selectedIndices.length ? 'selection-circle-active' : ''
                }`}>
                  {i < selectedIndices.length ? (
                    <span className="selection-number">
                      {i + 1}
                    </span>
                  ) : i === selectedIndices.length ? (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-3 h-3 rounded-full bg-gold-400"
                    />
                  ) : null}
                </div>
                <span className="progress-label">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12 text-body text-mauve"
          style={{ opacity: 0.8 }}
        >
          {selectedIndices.length < cardsNeeded 
            ? `Sélectionnez ${labels[spreadType][selectedIndices.length]}`
            : 'Révélation en cours...'}
        </motion.p>

        {/* Cards spread */}
        <div className="flex-1 flex items-center justify-center mb-12">
          <div 
            className="relative mx-auto"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: '280px',
            }}
          >
            <AnimatePresence>
              {shuffledDeck.map((card, index) => {
                const isSelected = selectedIndices.includes(index);
                const selectionOrder = selectedIndices.indexOf(index);
                
                const totalCards = shuffledDeck.length;
                const angleSpread = 120; // Demi-cercle plus large
                const angle = (index - (totalCards - 1) / 2) * (angleSpread / totalCards);
                const radius = 180;
                const x = Math.sin((angle * Math.PI) / 180) * radius;
                const y = Math.cos((angle * Math.PI) / 180) * radius * 0.3;

                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{
                      opacity: isSelected ? 0.4 : 1,
                      scale: isSelected ? 0.9 : 1,
                      x: x,
                      y: -y + 100,
                      rotate: angle,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      damping: 15,
                      delay: index * 0.05,
                    }}
                    whileHover={!isSelected && !isRevealing ? {
                      zIndex: 50,
                    } : {}}
                    onClick={() => handleCardClick(index)}
                    disabled={isRevealing || isSelected}
                    className="absolute left-1/2 top-0 cursor-pointer disabled:cursor-not-allowed focus:outline-none"
                    style={{
                      width: '85px',
                      height: '130px',
                      marginLeft: '-42.5px',
                      transformOrigin: 'center bottom',
                    }}
                    aria-label={`Carte ${index + 1}`}
                    aria-pressed={isSelected}
                  >
                    <div className="tarot-back">
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                          <path d="M15 20 Q15 12 20 12 Q17 12 17 20 Q17 28 20 28 Q15 28 15 20" fill="#d4b896" opacity="0.6" />
                          <path d="M20 8 L20 10" stroke="#d4b896" strokeWidth="1" opacity="0.5" />
                          <path d="M20 30 L20 32" stroke="#d4b896" strokeWidth="1" opacity="0.5" />
                          <path d="M28 14 L26.5 15.5" stroke="#d4b896" strokeWidth="1" opacity="0.5" />
                          <path d="M13.5 24.5 L12 26" stroke="#d4b896" strokeWidth="1" opacity="0.5" />
                        </svg>
                      </div>

                      {isSelected && (
                        <div className="selection-badge">
                          {selectionOrder + 1}
                        </div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-mauve"
          style={{ opacity: 0.7 }}
        >
          Faites confiance à votre intuition
        </motion.p>
      </div>
    </PageBackground>
  );
}