/**
 * MONOBUILD THEME CONFIGURATION
 * ─────────────────────────────
 * This is the single source of truth for all design tokens.
 * To rebrand the entire site, update values here.
 * CSS custom properties in globals.css consume these tokens.
 */

export const theme = {
  colors: {
    background: '#0f131e',
    surface: '#0f131e',
    surfaceContainerLowest: '#0a0e19',
    surfaceContainerLow: '#171b27',
    surfaceContainer: '#1b1f2b',
    surfaceContainerHigh: '#262a36',
    surfaceContainerHighest: '#313441',
    surfaceBright: '#353945',

    primary: '#c0c1ff',
    primaryContainer: '#8083ff',
    onPrimary: '#1000a9',
    onPrimaryContainer: '#0d0096',

    secondary: '#c0c7d3',
    secondaryContainer: '#404752',
    onSecondary: '#2a313b',
    onSecondaryContainer: '#afb5c2',

    tertiary: '#c4c7ca',
    tertiaryContainer: '#8e9195',

    onBackground: '#dfe2f2',
    onSurface: '#dfe2f2',
    onSurfaceVariant: '#c7c4d7',

    outline: '#908fa0',
    outlineVariant: '#464554',

    error: '#ffb4ab',
    errorContainer: '#93000a',
  },

  fonts: {
    sans: 'Inter, system-ui, -apple-system, sans-serif',
    display: 'Inter, system-ui, -apple-system, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },

  radius: {
    none: '0',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },

  spacing: {
    section: '6rem',
    sectionMd: '4rem',
  },

  shadows: {
    ambient: '0 8px 60px rgba(10, 14, 25, 0.5)',
    glow: '0 0 40px rgba(192, 193, 255, 0.08)',
  },

  gradients: {
    primary: 'linear-gradient(135deg, #c0c1ff, #8083ff)',
    surface: 'linear-gradient(180deg, #0f131e 0%, #0a0e19 100%)',
    hero: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(128, 131, 255, 0.15) 0%, transparent 70%)',
  },
} as const;

export type Theme = typeof theme;
