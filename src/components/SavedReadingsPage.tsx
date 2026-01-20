import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Trash2, Eye } from 'lucide-react';
import { getSavedReadings, deleteReading, SavedReading } from '../utils/localStorage';
import { PageBackground } from './ui/PageBackground';
import { SavedReadingsButton } from './ui/SavedReadingsButton';
import { TarotCard } from '../App';

interface SavedReadingsPageProps {
  onBack: () => void;
  onViewReading: (cards: TarotCard[], spreadType: 'single' | 'three' | 'five') => void;
  onViewSaved: () => void;
}

export function SavedReadingsPage({ onBack, onViewReading, onViewSaved }: SavedReadingsPageProps) {
  const [readings, setReadings] = useState<SavedReading[]>([]);

  useEffect(() => {
    setReadings(getSavedReadings());
  }, []);

  const handleDelete = (id: string) => {
    deleteReading(id);
    setReadings(getSavedReadings());
  };

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getSpreadLabel = (type: 'single' | 'three' | 'five') => {
    switch (type) {
      case 'single': return 'Une carte';
      case 'three': return 'Trois cartes';
      case 'five': return 'Cinq cartes';
    }
  };

  return (
    <PageBackground variant="navy">
      <div className="page-container">
        <SavedReadingsButton onClick={onViewSaved} />

        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="back-button"
            aria-label="Retour à l'accueil"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Retour</span>
          </button>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-display-md text-gold text-center mb-2"
        >
          Tirages Sauvegardés
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12 text-body text-gold-dark"
          style={{ opacity: 0.8 }}
        >
          {readings.length} {readings.length === 1 ? 'tirage conservé' : 'tirages conservés'}
        </motion.p>

        {/* Readings list */}
        <div className="content-wide stack-lg flex-1">
          {readings.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center py-12"
            >
              <p className="text-body-lg text-mauve" style={{ opacity: 0.7 }}>
                Aucun tirage sauvegardé pour le moment
              </p>
            </motion.div>
          ) : (
            readings.map((reading, index) => (
              <motion.article
                key={reading.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="card-content">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-heading text-gold mb-1">
                        {getSpreadLabel(reading.spreadType)}
                      </h2>
                      <p className="text-body-sm text-mauve" style={{ opacity: 0.8 }}>
                        {formatDate(reading.date)}
                      </p>
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                    {reading.cards.map((card, i) => (
                      <div
                        key={i}
                        className="shrink-0 rounded-lg p-2 text-center"
                        style={{
                          width: '80px',
                          background: 'rgba(61, 38, 99, 0.3)',
                          border: '1px solid rgba(212, 184, 150, 0.3)',
                        }}
                      >
                        <div className="text-xs mb-1 text-gold" style={{ fontFamily: 'Cinzel, serif' }}>
                          {card.id}
                        </div>
                        <div className="text-xs leading-tight text-gold-dark">
                          {card.name}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => onViewReading(reading.cards, reading.spreadType)}
                      className="btn btn-primary flex-1"
                      aria-label={`Voir le tirage du ${formatDate(reading.date)}`}
                    >
                      <Eye className="w-4 h-4" aria-hidden="true" />
                      <span>Voir</span>
                    </button>

                    <button
                      onClick={() => handleDelete(reading.id)}
                      className="btn btn-secondary"
                      style={{ flex: '0 0 auto' }}
                      aria-label="Supprimer ce tirage"
                    >
                      <Trash2 className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </div>
      </div>
    </PageBackground>
  );
}
