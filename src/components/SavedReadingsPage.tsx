import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Trash2, Eye } from 'lucide-react';
import { getSavedReadings, deleteReading, SavedReading } from '../utils/localStorage';
import { PageBackground } from './ui/PageBackground';
import { TarotCard } from '../App';

interface SavedReadingsPageProps {
  onBack: () => void;
  onViewReading: (cards: TarotCard[], spreadType: 'single' | 'three' | 'five') => void;
}

export function SavedReadingsPage({ onBack, onViewReading }: SavedReadingsPageProps) {
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
      <div className="relative min-h-screen flex flex-col px-6 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
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

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-2"
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '2rem',
            color: '#d4b896',
            fontWeight: 500,
          }}
        >
          Tirages Sauvegardés
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1rem',
            color: '#c9a870',
            opacity: 0.8,
          }}
        >
          {readings.length} {readings.length === 1 ? 'tirage conservé' : 'tirages conservés'}
        </motion.p>

        {/* Readings list */}
        <div className="max-w-2xl mx-auto w-full space-y-4 flex-1">
          {readings.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center py-12"
            >
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.125rem',
                  color: '#9b7db8',
                  opacity: 0.7,
                }}
              >
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
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(212, 184, 150, 0.1)',
                  border: '2px solid rgba(212, 184, 150, 0.2)',
                }}
              >
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2
                        className="mb-1"
                        style={{
                          fontFamily: 'Cinzel, serif',
                          fontSize: '1.25rem',
                          color: '#d4b896',
                          fontWeight: 500,
                        }}
                      >
                        {getSpreadLabel(reading.spreadType)}
                      </h2>
                      <p
                        className="text-sm"
                        style={{
                          fontFamily: 'Cormorant Garamond, serif',
                          color: '#b39bc8',
                          opacity: 0.8,
                        }}
                      >
                        {formatDate(reading.date)}
                      </p>
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                    {reading.cards.map((card, i) => (
                      <div
                        key={i}
                        className="flex-shrink-0 rounded-lg p-2 text-center"
                        style={{
                          width: '80px',
                          background: 'rgba(61, 38, 99, 0.3)',
                          border: '1px solid rgba(212, 184, 150, 0.3)',
                        }}
                      >
                        <div
                          className="text-xs mb-1"
                          style={{
                            fontFamily: 'Cinzel, serif',
                            color: '#d4b896',
                          }}
                        >
                          {card.id}
                        </div>
                        <div
                          className="text-xs leading-tight"
                          style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            color: '#c9a870',
                          }}
                        >
                          {card.name}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => onViewReading(reading.cards, reading.spreadType)}
                      className="flex-1 py-2 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                      style={{
                        background: 'linear-gradient(135deg, #e8b5a8 0%, #d9a399 100%)',
                        color: '#1a2332',
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        minHeight: '36px',
                      }}
                      aria-label={`Voir le tirage du ${formatDate(reading.date)}`}
                    >
                      <Eye className="w-4 h-4" aria-hidden="true" />
                      <span>Voir</span>
                    </button>

                    <button
                      onClick={() => handleDelete(reading.id)}
                      className="py-2 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                      style={{
                        background: 'rgba(212, 184, 150, 0.15)',
                        border: '2px solid rgba(212, 184, 150, 0.3)',
                        color: '#d4b896',
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        minHeight: '36px',
                      }}
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
