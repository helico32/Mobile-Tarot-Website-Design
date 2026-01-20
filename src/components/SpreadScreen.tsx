import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { TarotCard } from '../App';
import { tarotDeck } from '../data/tarotDeck';
import { PageBackground } from './ui/PageBackground';
import { OrnateFrame } from './OrnateFrame';

interface SpreadScreenProps {
  spreadType: 'single' | 'three' | 'five';
  onCardsSelected: (cards: TarotCard[]) => void;
  onBack: () => void;
}

export function SpreadScreen({ spreadType, onCardsSelected, onBack }: SpreadScreenProps) {
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

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(index);
    }
  };

  return (
    <PageBackground variant="navy">
      {/* Ornate frame decoration */}
      <OrnateFrame />

      <div className="relative min-h-screen flex flex-col px-6 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="p-2 -ml-2 transition-colors rounded-lg"
            style={{ color: '#d4b896' }}
            disabled={isRevealing}
            aria-label="Retour à l'accueil"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            <span 
              className="ml-1"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.125rem',
              }}
            >
              Retour
            </span>
          </button>
        </div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.75rem',
            fontWeight: 400,
            color: '#d4b896',
            lineHeight: '1.3',
          }}
        >
          Choisissez {cardsNeeded === 1 ? 'une carte' : `${cardsNeeded} cartes`}
          <br />
          pour votre guidance
        </motion.h2>

        {/* Spread labels - only for multi-card spreads */}
        {spreadType !== 'single' && (
          <div className="flex justify-center gap-3 mb-6">
            {labels[spreadType].map((label, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col items-center transition-all duration-300 ${
                  i < selectedIndices.length
                    ? 'opacity-100 scale-110'
                    : i === selectedIndices.length
                    ? 'opacity-100 scale-125'
                    : 'opacity-40 scale-100'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-1 transition-all ${
                    i < selectedIndices.length
                      ? 'border-gold-400 bg-gold-400/30'
                      : i === selectedIndices.length
                      ? 'border-gold-400 bg-gold-400/20 shadow-lg shadow-gold-400/50'
                      : 'border-purple-500/30'
                  }`}
                >
                  {i < selectedIndices.length ? (
                    <span 
                      className="text-gold-400 font-bold"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
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
                <span 
                  className="text-xs text-center px-1"
                  style={{ 
                    color: i === selectedIndices.length ? '#d4b896' : '#9b7db8',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: i === selectedIndices.length ? 600 : 400,
                  }}
                >
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
          className="text-center mb-12"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1rem',
            color: '#b39bc8',
            opacity: 0.8,
          }}
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
                const angleSpread = 50;
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
                      scale: 1.15, 
                      y: -y + 80,
                      zIndex: 50,
                    } : {}}
                    onClick={() => handleCardClick(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
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
                    <div
                      className="w-full h-full relative rounded-xl overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #3d2663 0%, #2d1b4e 100%)',
                        border: isSelected 
                          ? '3px solid rgba(212, 184, 150, 0.6)'
                          : '2px solid rgba(212, 184, 150, 0.4)',
                        boxShadow: isSelected
                          ? '0 0 30px rgba(212, 184, 150, 0.6)'
                          : '0 4px 20px rgba(0, 0, 0, 0.4)',
                      }}
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                          <path d="M15 20 Q15 12 20 12 Q17 12 17 20 Q17 28 20 28 Q15 28 15 20" fill="#d4b896" opacity="0.6" />
                          <path d="M20 8 L20 10" stroke="#d4b896" strokeWidth="1" opacity="0.5" />
                          <path d="M20 30 L20 32" stroke="#d4b896" strokeWidth="1" opacity="0.5" />
                          <path d="M28 14 L26.5 15.5" stroke="#d4b896" strokeWidth="1" opacity="0.5" />
                          <path d="M13.5 24.5 L12 26" stroke="#d4b896" strokeWidth="1" opacity="0.5" />
                        </svg>

                        <div className="absolute inset-3 rounded-lg" style={{ border: '1px solid rgba(212, 184, 150, 0.25)' }} />

                        <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full" style={{ background: '#d4b896', opacity: 0.4 }} />
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full" style={{ background: '#d4b896', opacity: 0.4 }} />
                        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full" style={{ background: '#d4b896', opacity: 0.4 }} />
                        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full" style={{ background: '#d4b896', opacity: 0.4 }} />
                      </div>

                      {isSelected && (
                        <>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0"
                            style={{
                              background: 'radial-gradient(circle, rgba(212, 184, 150, 0.3) 0%, transparent 70%)',
                            }}
                          />
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                            style={{
                              background: '#d4b896',
                              color: '#1e133',
                            }}
                          >
                            {selectionOrder + 1}
                          </motion.div>
                        </>
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
          className="text-center text-sm"
          style={{
            color: '#9b7db8',
            fontFamily: 'Cormorant Garamond, serif',
            opacity: 0.7,
          }}
        >
          Faites confiance à votre intuition
        </motion.p>
      </div>
    </PageBackground>
  );
}