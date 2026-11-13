import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'hazard';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseClasses =
    'relative inline-flex items-center justify-center font-mono font-bold uppercase tracking-wider transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-sky focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs min-h-[38px]',
    md: 'px-6 py-3 text-xs sm:text-sm min-h-[46px]',
    lg: 'px-8 py-4 text-sm sm:text-base min-h-[52px]',
  }[size];

  const variantClasses = {
    primary:
      'bg-saul-gold text-ink border-2 border-saul-gold hover:bg-cream hover:border-cream hover:shadow-gold-glow',
    outline:
      'border-2 border-saul-gold text-saul-gold bg-transparent hover:bg-saul-gold hover:text-ink hover:shadow-amber-glow',
    ghost:
      'text-cream hover:text-saul-gold hover:bg-saul-gold/10 border border-transparent',
    hazard:
      'border-2 border-hazmat text-cream bg-ink-2 hover:border-saul-gold hover:text-saul-gold hover:shadow-amber-glow',
  }[variant];

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
