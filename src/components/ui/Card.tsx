import { cn } from '@/lib/utils/cn';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  elevated?: boolean;
  as?: React.ElementType;
}

export function Card({ children, className, hover = false, elevated = false, as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={cn(
        'rounded-[var(--radius-xl)] p-6',
        elevated
          ? 'bg-[var(--color-surface-container-highest)]'
          : 'bg-[var(--color-surface-container-low)]',
        hover && 'transition-all duration-300 ease-out cursor-pointer',
        hover && 'hover:bg-[var(--color-surface-container-high)]',
        hover && 'hover:translate-y-[-2px]',
        hover && 'hover:shadow-[0_8px_40px_rgba(10,14,25,0.4)]',
        className
      )}
    >
      {children}
    </Tag>
  );
}

interface CardHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function CardHeader({ eyebrow, title, description, className }: CardHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {eyebrow && (
        <span className="eyebrow">{eyebrow}</span>
      )}
      <h3 className="title-lg text-[var(--color-on-surface)]">{title}</h3>
      {description && (
        <p className="body-sm text-[var(--color-on-surface-variant)]">{description}</p>
      )}
    </div>
  );
}
