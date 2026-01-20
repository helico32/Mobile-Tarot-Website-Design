import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface PageBackgroundProps {
  children: ReactNode;
  variant?: 'navy' | 'purple' | 'teal';
}

export function PageBackground({ children, variant = 'navy' }: PageBackgroundProps) {
  const backgrounds = {
    navy: 'radial-gradient(ellipse at center, #1e293b 0%, #0f1729 100%)',
    purple: 'radial-gradient(ellipse at top, #2d1b4e 0%, #1e1333 100%)',
    teal: 'linear-gradient(135deg, #9bc5c3 0%, #7db3b1 100%)',
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: backgrounds[variant],
      }}
    >
      {/* Starfield for navy background */}
      {variant === 'navy' && (
        <div className="absolute inset-0 opacity-60">
          {[...Array(50)].map((_, i) => (
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

      {/* Silk texture for purple background */}
      {variant === 'purple' && (
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.03) 10px,
              rgba(255, 255, 255, 0.03) 20px
            )`
          }}
        />
      )}

      {children}
    </div>
  );
}
