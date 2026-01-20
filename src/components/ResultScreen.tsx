import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw, Share2, Heart, ChevronDown, ChevronUp, ChevronLeft } from 'lucide-react';
import { TarotCard } from '../App';
import { PageBackground } from './ui/PageBackground';
import { OrnateFrame } from './OrnateFrame';
import { TertiaryButton } from './ui/TertiaryButton';
import { saveReading } from '../utils/localStorage';
import { MuchaCard } from './MuchaCard';

interface ResultScreenProps {
  cards: TarotCard[];
  spreadType: 'single' | 'three' | 'five';
  onNewReading: () => void;
  onBackToLanding: () => void;
}

export function ResultScreen({ cards, spreadType, onNewReading, onBackToLanding }: ResultScreenProps) {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [saved, setSaved] = useState(false);

  const labels = {
    single: [''],
    three: ['Passé', 'Présent', 'Futur'],
    five: ['Situation', 'Obstacle', 'Conseil', 'Passé', 'Futur'],
  };

  const toggleExpand = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleSave = () => {
    saveReading(cards, spreadType);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Mon tirage Tarot',
        text: `J'ai tiré: ${cards.map(c => c.name).join(', ')}`,
      });
    }
  };

  return (
    <PageBackground variant="navy">
      {/* Ornate frame decoration */}
      <OrnateFrame />

      <div className="relative min-h-screen flex flex-col px-6 py-8 pb-24">
        {/* Back button */}
        <div className="flex items-center mb-6">
          <button
            onClick={onBackToLanding}
            className="p-2 -ml-2 transition-colors rounded-lg"
            style={{ color: '#d4b896' }}
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

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '2rem',
              color: '#d4b896',
              fontWeight: 500,
              marginBottom: '0.5rem',
            }}
          >
            Votre Guidance
          </h1>
          {spreadType !== 'single' && (
            <p
              className="text-base"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                color: '#c9a870',
                opacity: 0.8,
              }}
            >
              {spreadType === 'three' 
                ? 'Passé · Présent · Futur' 
                : 'Tirage en croix'}
            </p>
          )}
        </motion.div>

        {/* Cards display */}
        <div className="space-y-8 mb-8 flex-1">
          {cards.map((card, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className="rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(212, 184, 150, 0.1)',
                border: '2px solid rgba(212, 184, 150, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div className="p-6">
                {/* Card image with Mucha style */}
                <div className="flex justify-center mb-6">
                  <MuchaCard cardId={card.id} cardName={card.name} />
                </div>

                {/* Card name and interpretation */}
                <div className="text-center">
                  <h2
                    className="mb-1"
                    style={{
                      fontFamily: 'Cinzel, serif',
                      fontSize: '1.75rem',
                      color: '#d4b896',
                      fontWeight: 500,
                    }}
                  >
                    {card.name}
                  </h2>

                  {spreadType !== 'single' && (
                    <p
                      className="mb-4 text-sm"
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        color: '#9b7db8',
                        opacity: 0.9,
                      }}
                    >
                      {labels[spreadType][index]}
                    </p>
                  )}

                  <p
                    className="mb-6 leading-relaxed"
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.125rem',
                      color: '#e8c896',
                      lineHeight: '1.6',
                    }}
                  >
                    <span className="font-semibold" style={{ color: '#d4b896' }}>Interprétation d'Emmanuelle Iger :</span>
                    <br />
                    {card.interpretation}
                  </p>

                  {/* Expand button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                      background: expandedCards.includes(index) 
                        ? 'rgba(212, 184, 150, 0.25)'
                        : 'rgba(212, 184, 150, 0.15)',
                      border: '2px solid rgba(212, 184, 150, 0.3)',
                      color: '#d4b896',
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      minHeight: '44px',
                    }}
                    aria-expanded={expandedCards.includes(index)}
                    aria-label={`${expandedCards.includes(index) ? 'Réduire' : 'Approfondir'} l'interprétation de ${card.name}`}
                  >
                    <span>Approfondir</span>
                    {expandedCards.includes(index) ? (
                      <ChevronUp className="w-5 h-5" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-5 h-5" aria-hidden="true" />
                    )}
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {expandedCards.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4">
                          <p
                            className="leading-relaxed"
                            style={{
                              fontFamily: 'Cormorant Garamond, serif',
                              fontSize: '1rem',
                              color: '#c9a870',
                              lineHeight: '1.6',
                            }}
                          >
                            {card.deeperMeaning}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: cards.length * 0.3 + 0.3 }}
          className="space-y-3 max-w-md mx-auto w-full"
        >
          {/* Primary button - New reading */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNewReading}
            className="w-full py-5 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            style={{
              background: 'linear-gradient(135deg, #e8b5a8 0%, #d9a399 100%)',
              color: '#1a2332',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.25rem',
              fontWeight: 600,
              boxShadow: '0 8px 24px rgba(232, 181, 168, 0.3)',
              minHeight: '44px',
            }}
            aria-label="Commencer un nouveau tirage"
          >
            <RotateCcw className="w-5 h-5" aria-hidden="true" />
            <span>Nouveau tirage</span>
          </motion.button>

          {/* Secondary buttons */}
          <div className="flex gap-3">
            <TertiaryButton
              onClick={handleSave}
              icon={<Heart className={saved ? 'fill-current' : ''} />}
              active={saved}
              ariaLabel={saved ? 'Tirage sauvegardé' : 'Enregistrer le tirage'}
            >
              {saved ? 'Sauvegardé' : 'Enregistrer'}
            </TertiaryButton>

            <TertiaryButton
              onClick={handleShare}
              icon={<Share2 className="w-5 h-5" />}
              ariaLabel="Partager le tirage"
            >
              Partager
            </TertiaryButton>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: cards.length * 0.3 + 0.5 }}
          className="text-center mt-8 text-sm"
          style={{
            color: '#9b7db8',
            fontFamily: 'Cormorant Garamond, serif',
            opacity: 0.7,
          }}
        >
          Les cartes sont un miroir de votre intuition
        </motion.p>
      </div>
    </PageBackground>
  );
}