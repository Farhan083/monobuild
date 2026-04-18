export type Experiment = {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'shelved' | 'ongoing';
  tags: string[];
  date: string;
  href?: string;
};

export const experiments: Experiment[] = [
  {
    id: 'ai-commit-gen',
    title: 'AI Commit Message Generator',
    description: 'A CLI tool that reads your git diff and generates semantic, conventional commit messages using a local LLM.',
    status: 'completed',
    tags: ['AI', 'CLI', 'Developer Tools'],
    date: '2025-11',
    href: '#',
  },
  {
    id: 'tonal-ui',
    title: 'Tonal UI System',
    description: 'Exploring Material Design 3\'s tonal color system as a replacement for border-based UI separation.',
    status: 'ongoing',
    tags: ['Design Systems', 'CSS', 'UI Research'],
    date: '2026-02',
  },
  {
    id: 'edge-analytics',
    title: 'Edge Analytics Pipeline',
    description: 'Zero-JS analytics via Vercel Edge Functions and Cloudflare Workers. No cookie banners needed.',
    status: 'active',
    tags: ['Analytics', 'Edge Computing', 'Privacy'],
    date: '2026-01',
  },
  {
    id: 'local-first-sync',
    title: 'Local-First Sync Engine',
    description: 'A CRDT-based sync layer for offline-first apps without the complexity of full-blown sync frameworks.',
    status: 'shelved',
    tags: ['CRDTs', 'Offline', 'Sync'],
    date: '2025-08',
  },
  {
    id: 'design-token-pipeline',
    title: 'Design Token Pipeline',
    description: 'Automated pipeline from Figma/Stitch design tokens to CSS variables and Tailwind config.',
    status: 'active',
    tags: ['Design Systems', 'Automation', 'CSS'],
    date: '2026-03',
  },
  {
    id: 'webgl-terrain',
    title: 'WebGL Terrain Renderer',
    description: 'Procedurally generated terrain using WebGL and Simplex noise. A weekend project that got out of hand.',
    status: 'completed',
    tags: ['WebGL', 'Graphics', 'Creative Coding'],
    date: '2025-06',
    href: '#',
  },
];

export const labContent = {
  eyebrow: 'Experiments & Lab',
  headline: 'Where curiosity\ngets compiled.',
  subheadline:
    'Not everything needs to ship. These are the experiments, prototypes, and engineering curiosities we explore in the open.',
};
