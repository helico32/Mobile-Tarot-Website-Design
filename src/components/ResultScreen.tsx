import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw, Share2, Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { TarotCard } from '../App';
import { PageBackground } from './ui/PageBackground';
import { OrnateFrame } from './OrnateFrame';
import { TertiaryButton } from './ui/TertiaryButton';
import { SavedReadingsButton } from './ui/SavedReadingsButton';
import { saveReading } from '../utils/localStorage';
import { MuchaCard } from './MuchaCard';

interface ResultScreenProps {
  cards: TarotCard[];
  spreadType: 'single' | 'three' | 'five';
  onNewReading: () => void;
  onBackToLanding: () => void;
  onViewSaved: () => void;
}

export function ResultScreen({ cards, spreadType, onNewReading, onBackToLanding, onViewSaved }: ResultScreenProps) {
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
      <OrnateFrame />

      <div className="page-container pb-24">
        <SavedReadingsButton onClick={onViewSaved} />

        {/* Back button */}
        <div className="flex items-center mb-6">
          <button
            onClick={onBackToLanding}
            className="back-button"
            aria-label="Retour à l'accueil"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Retour</span>
          </button>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="page-title"
        >
          <h1 className="text-display-md text-gold mb-2">
            Votre Guidance
          </h1>
          {spreadType !== 'single' && (
            <p className="text-body text-gold-dark" style={{ opacity: 0.8 }}>
              {spreadType === 'three' 
                ? 'Passé · Présent · Futur' 
                : 'Tirage en croix'}
            </p>
          )}
        </motion.div>

        {/* Cards display - horizontal sur desktop */}
        <div className="results-grid mb-8 flex-1">
          {cards.map((card, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className="card"
            >
              <div className="card-content">
                {/* Card image */}
                <div className="flex justify-center mb-6">
                  <MuchaCard cardId={card.id} cardName={card.name} />
                </div>

                {/* Card name */}
                <div className="text-center">
                  <h2 className="text-display-sm text-gold mb-1">
                    {card.name}
                  </h2>

                  {spreadType !== 'single' && (
                    <p className="text-body-sm text-mauve mb-4" style={{ opacity: 0.9 }}>
                      {labels[spreadType][index]}
                    </p>
                  )}

                  <p className="text-body-lg text-gold-light mb-6 leading-relaxed">
                    <span className="font-semibold text-gold">Interprétation d'Emmanuelle Iger :</span>
                    <br />
                    {card.interpretation}
                  </p>

                  {/* Expand button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="btn btn-secondary w-full"
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
                          <p className="text-body text-gold-dark leading-relaxed">
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
          className="stack max-w-md mx-auto w-full"
        >
          {/* Primary button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNewReading}
            className="btn btn-primary w-full"
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
          className="text-center mt-8 text-sm text-mauve"
          style={{ opacity: 0.7 }}
        >
          Les cartes sont un miroir de votre intuition
        </motion.p>
      </div>
    </PageBackground>
  );
}