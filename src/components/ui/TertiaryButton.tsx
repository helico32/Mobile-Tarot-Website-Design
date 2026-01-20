import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface TertiaryButtonProps {
  children: ReactNode;
  onClick: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
  active?: boolean;
  className?: string;
}

export function TertiaryButton({ 
  children, 
  onClick, 
  icon, 
  disabled = false,
  ariaLabel,
  active = false,
  className = '',
}: TertiaryButtonProps) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`flex-1 py-3 px-4 rounded-full transition-all duration-300 ${className}`}
      style={{
        background: active 
          ? 'linear-gradient(135deg, #b39bc8 0%, #9b7db8 100%)'
          : 'rgba(179, 155, 200, 0.3)',
        color: active ? '#ffffff' : '#4c3575',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1rem',
        fontWeight: 600,
        border: active ? 'none' : '2px solid rgba(179, 155, 200, 0.5)',
        minHeight: '44px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
      aria-label={ariaLabel}
      aria-pressed={active}
    >
      <span className="flex items-center justify-center gap-2">
        {icon && <span aria-hidden="true">{icon}</span>}
        <span>{children}</span>
      </span>
    </motion.button>
  );
}
