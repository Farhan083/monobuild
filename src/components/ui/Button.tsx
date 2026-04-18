'use client';

import { cn } from '@/lib/utils/cn';
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantStyles: Record<ButtonVariant, string> = {
  // Primary: blue gradient — the ONE blue element users click
  primary: [
    'text-white font-semibold',
    'bg-[var(--color-primary)]',
    'hover:bg-[#3B7AE8] active:bg-[#2D6DD8]',
    'shadow-[0_1px_2px_rgba(0,0,0,0.4),0_0_0_1px_rgba(79,142,247,0.3)]',
    'hover:shadow-[0_4px_20px_rgba(79,142,247,0.25),0_0_0_1px_rgba(79,142,247,0.4)]',
  ].join(' '),

  // Secondary: dark surface with ghost border — black dominant
  secondary: [
    'bg-[var(--color-surface-container-high)] text-[var(--color-on-surface)] font-medium',
    'ring-1 ring-[var(--color-outline)]',
    'hover:bg-[var(--color-surface-container-highest)] hover:ring-[var(--color-outline-variant)]',
    'hover:ring-[rgba(42,50,69,0.8)]',
  ].join(' '),

  // Ghost: text-only, near-white — blends into the dark canvas
  ghost: [
    'bg-transparent text-[var(--color-on-surface-variant)] font-medium',
    'hover:text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-low)]',
  ].join(' '),

  danger: [
    'bg-[var(--color-error-container)] text-[var(--color-error)] font-medium',
    'hover:opacity-90',
  ].join(' '),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8  px-3.5 text-[0.8125rem] rounded-[var(--radius-md)] gap-1.5',
  md: 'h-10 px-5   text-[0.875rem]  rounded-[var(--radius-md)] gap-2',
  lg: 'h-12 px-6   text-[0.9375rem] rounded-[var(--radius-lg)] gap-2.5',
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
    'inline-flex items-center justify-center',
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
      {loading ? <span className="opacity-60">Loading…</span> : children}
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>
      )}
    </>
  );

  if (href) {
    return <a href={href} className={cn(base, 'group')}>{content}</a>;
  }

  return (
    <button className={base} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
