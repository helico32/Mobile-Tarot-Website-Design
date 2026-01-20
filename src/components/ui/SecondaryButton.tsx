import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SecondaryButtonProps {
  children: ReactNode;
  onClick: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

export function SecondaryButton({ 
  children, 
  onClick, 
  icon, 
  disabled = false,
  ariaLabel,
  className = '',
}: SecondaryButtonProps) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 px-8 rounded-full transition-all duration-300 ${className}`}
      style={{
        background: 'rgba(212, 184, 150, 0.15)',
        border: '2px solid rgba(212, 184, 150, 0.4)',
        color: '#d4b896',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.125rem',
        fontWeight: 500,
        minHeight: '44px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
      aria-label={ariaLabel}
    >
      <span className="flex items-center justify-center gap-2">
        {icon && <span aria-hidden="true">{icon}</span>}
        <span>{children}</span>
      </span>
    </motion.button>
  );
}
