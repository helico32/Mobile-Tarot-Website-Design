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
      className={`btn btn-primary w-full ${disabled ? 'disabled' : ''} ${className}`}
      aria-label={ariaLabel}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
}