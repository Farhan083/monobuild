/**
 * MONOBUILD THEME CONFIGURATION
 * ─────────────────────────────
 * Philosophy: BLACK is the brand. Blue is the accent.
 * Blue appears only where the user needs to take action or read a signal.
 *
 * To rebrand: change values here. CSS custom properties in globals.css consume these.
 */

export const theme = {
  colors: {
    /* Foundation — obsidian blacks */
    background:                '#07090F',
    surface:                   '#07090F',
    surfaceDim:                '#050709',
    surfaceContainerLowest:    '#0B0D14',
    surfaceContainerLow:       '#0F1219',
    surfaceContainer:          '#141820',
    surfaceContainerHigh:      '#1A1F2C',
    surfaceContainerHighest:   '#212638',
    surfaceBright:             '#2A3045',

    /* Accent — electric blue, used sparingly */
    primary:            '#4F8EF7',
    primaryContainer:   '#1A4FB8',
    onPrimary:          '#FFFFFF',
    onPrimaryContainer: '#C2D9FF',

    /* Neutral */
    secondary:            '#6B7A99',
    secondaryContainer:   '#1A1F2C',
    onSecondary:          '#1A1F2C',
    onSecondaryContainer: '#8A97B5',

    /* Text */
    onBackground:     '#EEF2FF',
    onSurface:        '#EEF2FF',
    onSurfaceVariant: '#6B7A99',

    /* Ghost borders */
    outline:        '#2A3245',
    outlineVariant: '#171C28',

    /* Error */
    error:           '#F87171',
    errorContainer:  '#450A0A',
  },

  fonts: {
    sans:    'Inter, system-ui, -apple-system, sans-serif',
    display: 'Inter, system-ui, -apple-system, sans-serif',
    mono:    '"JetBrains Mono", "Fira Code", monospace',
  },

  radius: {
    none: '0',
    sm:   '0.25rem',
    md:   '0.375rem',
    lg:   '0.5rem',
    xl:   '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },

  gradients: {
    /* Blue gradient — CTA buttons only */
    primary: 'linear-gradient(135deg, #4F8EF7 0%, #1A4FB8 100%)',
    /* Hero wash — almost invisible. Felt, not seen */
    hero: 'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(49, 100, 220, 0.07) 0%, transparent 65%)',
    /* Card glow on hover */
    cardHover: 'radial-gradient(ellipse at 0% 100%, rgba(49, 100, 220, 0.04), transparent 60%)',
  },

  shadows: {
    ambient: '0 8px 60px rgba(5, 7, 9, 0.8)',
    glow:    '0 0 40px rgba(79, 142, 247, 0.06)',
  },
} as const;

export type Theme = typeof theme;
