export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: 'live' | 'beta' | 'archived' | 'wip';
  tags: string[];
  href: string;
  features?: { title: string; description: string }[];
  techStack?: string[];
};

export const products: Product[] = [
  {
    id: 'kilo',
    slug: 'kilo',
    name: 'Kilo',
    tagline: 'Precision weight tracking, engineered.',
    description:
      'Kilo is a minimalist, data-first weight management platform. No noise, no gamification — just clean data, intelligent insights, and a beautifully simple interface.',
    status: 'live',
    tags: ['Health', 'Mobile', 'Analytics'],
    href: '/products/kilo',
    features: [
      { title: 'Smart Logging', description: 'Log meals and weight in seconds with intelligent auto-complete.' },
      { title: 'Trend Analysis', description: 'Advanced trend modeling that filters out daily noise.' },
      { title: 'Export Ready', description: 'Your data, always. Export to CSV or JSON at any time.' },
      { title: 'Privacy First', description: 'On-device processing. We never sell your health data.' },
    ],
    techStack: ['React Native', 'TypeScript', 'Supabase', 'Expo'],
  },
  {
    id: 'monobuild-hq',
    slug: 'monobuild-hq',
    name: 'Monobuild HQ',
    tagline: 'Our own digital command center.',
    description:
      'The internal platform powering Monobuild operations — project management, analytics, and team tools, all under one roof.',
    status: 'wip',
    tags: ['Internal Tool', 'Productivity'],
    href: '/products',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
];

export const productsPageContent = {
  eyebrow: 'What We Ship',
  headline: 'Products built with\narchitectural intent.',
  subheadline:
    'Every product we build starts with a question: does this need to exist? If the answer is yes, we build it properly.',
};
