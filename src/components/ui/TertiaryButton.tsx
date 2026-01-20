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
      className={`btn btn-tertiary ${active ? 'active' : ''} ${disabled ? 'disabled' : ''} ${className}`}
      aria-label={ariaLabel}
      aria-pressed={active}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
}