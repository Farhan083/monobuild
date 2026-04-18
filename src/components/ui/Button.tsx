'use client';

import { cn } from '@/lib/utils/cn';
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'text-[var(--color-on-primary)] font-semibold',
    'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-container)]',
    'hover:opacity-90 active:opacity-80',
    'shadow-[0_0_20px_rgba(192,193,255,0.15)]',
  ].join(' '),

  secondary: [
    'bg-[var(--color-surface-container-high)] text-[var(--color-on-surface)]',
    'hover:bg-[var(--color-surface-container-highest)]',
    'ring-1 ring-[rgba(70,69,84,0.4)]',
  ].join(' '),

  ghost: [
    'bg-transparent text-[var(--color-primary)]',
    'hover:bg-[var(--color-surface-container-low)]',
  ].join(' '),

  danger: [
    'bg-[var(--color-error-container)] text-[var(--color-error)]',
    'hover:opacity-90',
  ].join(' '),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs rounded-[var(--radius-md)] gap-1.5',
  md: 'h-10 px-5 text-sm rounded-[var(--radius-md)] gap-2',
  lg: 'h-12 px-7 text-base rounded-[var(--radius-lg)] gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  loading,
  icon,
  iconPosition = 'right',
  disabled,
  ...props
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center font-medium',
    'transition-all duration-200 ease-out cursor-pointer',
    'select-none whitespace-nowrap',
    'disabled:opacity-40 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {loading ? <span className="opacity-70">Loading…</span> : children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={base}>
        {content}
      </a>
    );
  }

  return (
    <button className={base} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
