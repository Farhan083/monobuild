'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, brandConfig } from '@/lib/content/navigation';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass border-b border-[rgba(70,69,84,0.15)] py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Monobuild home"
        >
          {/* Logo mark — dark, minimal, not blue */}
          <div className="w-7 h-7 rounded-[var(--radius-md)] bg-[var(--color-surface-container-highest)] ring-1 ring-[var(--color-outline)] flex items-center justify-center text-[var(--color-on-surface)] font-bold text-xs shrink-0 transition-all duration-200 group-hover:ring-[var(--color-primary)] group-hover:text-[var(--color-primary)]">
            M
          </div>
          <span
            className="text-[var(--color-on-surface)] font-semibold tracking-[0.08em] uppercase text-sm"
            style={{ fontFamily: 'var(--font-brand)' }}
          >
            {brandConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'px-3.5 py-2 rounded-[var(--radius-md)] text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-[var(--color-primary)] bg-[rgba(192,193,255,0.08)]'
                      : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-high)]'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm" href="/contact">
            Hire Us
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-[var(--radius-md)] hover:bg-[var(--color-surface-container-high)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={cn('w-5 h-0.5 bg-[var(--color-on-surface)] transition-all duration-200', menuOpen && 'rotate-45 translate-y-2')} />
          <span className={cn('w-5 h-0.5 bg-[var(--color-on-surface)] transition-all duration-200', menuOpen && 'opacity-0')} />
          <span className={cn('w-5 h-0.5 bg-[var(--color-on-surface)] transition-all duration-200', menuOpen && '-rotate-45 -translate-y-2')} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-[rgba(70,69,84,0.15)]">
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-4 py-2.5 rounded-[var(--radius-md)] text-sm font-medium transition-colors',
                      isActive
                        ? 'text-[var(--color-primary)] bg-[rgba(192,193,255,0.08)]'
                        : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-high)]'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Button variant="primary" size="sm" href="/contact" className="w-full justify-center">
                Hire Us
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
