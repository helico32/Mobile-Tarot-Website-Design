import { motion } from 'motion/react';
import { OrnateFrame } from './OrnateFrame';
import { PageBackground } from './ui/PageBackground';
import { PrimaryButton } from './ui/PrimaryButton';
import { SecondaryButton } from './ui/SecondaryButton';
import { SavedReadingsButton } from './ui/SavedReadingsButton';

interface LandingPageProps {
  onStartReading: (type: 'single' | 'three' | 'five') => void;
  onViewSaved: () => void;
}

export function LandingPage({ onStartReading, onViewSaved }: LandingPageProps) {
  return (
    <PageBackground variant="navy">
      <OrnateFrame />

      <div className="page-container">
        <SavedReadingsButton onClick={onViewSaved} />

        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="content-center"
          >
            {/* Mystical symbol */}
            <motion.div
              className="mb-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Symbole du tarot"
              >
                <circle cx="60" cy="60" r="55" stroke="#d4b896" strokeWidth="2" fill="none" opacity="0.6" />
                <circle cx="60" cy="60" r="50" stroke="#d4b896" strokeWidth="1.5" fill="none" opacity="0.4" />
                <path d="M45 60 Q45 45 60 45 Q50 45 50 60 Q50 75 60 75 Q45 75 45 60" fill="#d4b896" opacity="0.8" />
                <path d="M75 60 L77 65 L82 65 L78 68 L80 73 L75 70 L70 73 L72 68 L68 65 L73 65 Z" fill="#d4b896" opacity="0.9" />
                <circle cx="60" cy="25" r="2" fill="#d4b896" opacity="0.7" />
                <circle cx="60" cy="95" r="2" fill="#d4b896" opacity="0.7" />
                <circle cx="25" cy="60" r="2" fill="#d4b896" opacity="0.7" />
                <circle cx="95" cy="60" r="2" fill="#d4b896" opacity="0.7" />
              </svg>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-display-lg text-gold text-center mb-3"
            >
              Guidance
              <br />
              du Tarot
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-body-lg text-gold-dark text-center mb-6"
              style={{ opacity: 0.9 }}
            >
              Interprétations d'Emmanuelle Iger
            </motion.p>

            {/* CTA Buttons */}
            <div className="stack w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <PrimaryButton
                  onClick={() => onStartReading('single')}
                  ariaLabel="Commencer un tirage à une carte"
                >
                  Tirage à une carte
                  <span className="block text-sm mt-1 opacity-70">Tirage quotidien</span>
                </PrimaryButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                <SecondaryButton
                  onClick={() => onStartReading('three')}
                  ariaLabel="Tirage à trois cartes : passé, présent, futur"
                >
                  Tirage à trois cartes
                  <span className="block text-sm mt-1 opacity-70">Passé · Présent · Futur</span>
                </SecondaryButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                <SecondaryButton
                  onClick={() => onStartReading('five')}
                  ariaLabel="Tirage à cinq cartes : tirage en croix"
                >
                  Tirage à cinq cartes
                  <span className="block text-sm mt-1 opacity-70">Tirage en croix</span>
                </SecondaryButton>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-body-sm text-purple text-center mt-12"
              style={{ opacity: 0.7 }}
            >
              Aucune donnée n'est collectée.
              <br />
              Votre lecture reste privée.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </PageBackground>
  );
}
