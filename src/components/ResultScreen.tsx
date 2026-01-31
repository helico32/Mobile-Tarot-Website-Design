import { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Share2, Heart } from 'lucide-react';
import { TarotCard } from '../App';
import { PageBackground } from './ui/PageBackground';

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
  const [saved, setSaved] = useState(false);

  const labels = {
    single: [''],
    three: ['Passé', 'Présent', 'Futur'],
    five: ['Situation', 'Obstacle', 'Conseil', 'Passé', 'Futur'],
  };

  // Ordre d'affichage pour la croix: 3, 1, 5, 2, 4
  const crossOrder = [2, 0, 4, 1, 3]; // Indices pour réorganiser [0,1,2,3,4] en [2,0,4,1,3]
  const displayCards = spreadType === 'five' ? crossOrder.map(i => cards[i]) : cards;
  const displayLabels = spreadType === 'five' ? crossOrder.map(i => labels.five[i]) : labels[spreadType];

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
    <PageBackground variant="navy" showStars={false}>

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

        {/* Cards display */}
        <div className={`results-grid ${spreadType === 'five' ? 'cross-layout' : ''} mb-8 flex-1`}>
          {displayCards.map((card, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className="card"
            >
              <div className="card-content">

                {/* Card image - 415px max width */}
                <div className="flex justify-center mb-6">
                  <div className="tarot-card-image">
                    <MuchaCard cardId={card.id} cardName={card.name} />
                  </div>
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

                  <p className="text-body text-gold-dark leading-relaxed">
                    {card.deeperMeaning}
                  </p>
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
          className="stack max-w-md mx-auto w-full mt-8"
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
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSave}
              className="btn btn-secondary flex-1"
              aria-label={saved ? 'Tirage sauvegardé' : 'Enregistrer le tirage'}
            >
              <Heart className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} aria-hidden="true" />
              <span>{saved ? 'Sauvegardé' : 'Enregistrer'}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleShare}
              className="btn btn-secondary flex-1"
              aria-label="Partager le tirage"
            >
              <Share2 className="w-5 h-5" aria-hidden="true" />
              <span>Partager</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Footer */}
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
