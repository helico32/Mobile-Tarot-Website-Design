import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PrimaryButtonProps {
  children: ReactNode;
  onClick: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

export function PrimaryButton({ 
  children, 
  onClick, 
  icon, 
  disabled = false,
  ariaLabel,
  className = '',
}: PrimaryButtonProps) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-5 px-8 rounded-full text-lg font-medium transition-all duration-300 ${className}`}
      style={{
        background: disabled 
          ? 'rgba(232, 181, 168, 0.5)'
          : 'linear-gradient(135deg, #e8b5a8 0%, #d9a399 100%)',
        color: '#1a2332',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.25rem',
        fontWeight: 600,
        boxShadow: disabled 
          ? 'none'
          : '0 8px 24px rgba(232, 181, 168, 0.3)',
        minHeight: '44px',
        cursor: disabled ? 'not-allowed' : 'pointer',
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
