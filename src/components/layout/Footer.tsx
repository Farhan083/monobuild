import Link from 'next/link';
import { navLinks, socialLinks, brandConfig } from '@/lib/content/navigation';

export function Footer() {
  return (
    <footer className="bg-[var(--color-surface-container-lowest)] border-t border-[rgba(70,69,84,0.15)]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-7 h-7 rounded-[var(--radius-md)] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-container)] flex items-center justify-center text-[var(--color-on-primary)] font-bold text-xs shrink-0">
                M
              </div>
              <span className="font-bold text-[var(--color-on-surface)] tracking-tight">
                {brandConfig.name}
              </span>
            </Link>
            <p className="body-sm text-[var(--color-on-surface-variant)] max-w-[22ch]">
              {brandConfig.tagline}
            </p>
            <p className="body-sm text-[var(--color-on-surface-variant)]">
              <a href={`mailto:${brandConfig.email}`} className="hover:text-[var(--color-primary)] transition-colors">
                {brandConfig.email}
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="label-md text-[var(--color-on-surface-variant)]">Navigation</h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="label-md text-[var(--color-on-surface-variant)]">Connect</h3>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="body-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/privacy"
                  className="body-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[rgba(70,69,84,0.1)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="label-sm text-[var(--color-on-surface-variant)] opacity-60">
            {brandConfig.copyright}
          </p>
          <p className="label-sm text-[var(--color-on-surface-variant)] opacity-40">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
