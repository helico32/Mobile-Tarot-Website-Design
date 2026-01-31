import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface PageBackgroundProps {
  children: ReactNode;
  variant?: 'navy' | 'purple' | 'teal';
  showStars?: boolean;
}

export function PageBackground({ children, variant = 'navy', showStars = true }: PageBackgroundProps) {
  const showStarfield = showStars && variant === 'navy';
  
  // Moins d'étoiles sur desktop (30 au lieu de 50)
  const starCount = typeof window !== 'undefined' && window.innerWidth >= 768 ? 30 : 50;

  return (
    <div className={`min-h-screen relative overflow-hidden ${variant === 'navy' ? 'bg-navy' : variant === 'purple' ? 'bg-purple' : 'bg-teal-300'}`}>
      {/* Starfield pour le fond navy */}
      {showStarfield && (
        <div className="starfield">
          {[...Array(starCount)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {children}
    </div>
  );
}