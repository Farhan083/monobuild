export const homeContent = {
  hero: {
    eyebrow: 'Independent Software Studio',
    headline: 'We build systems\nthat endure.',
    subheadline:
      'Monobuild crafts precision-engineered software — tools, products, and platforms designed with architectural rigor and quiet authority.',
    cta: { label: 'View Our Work', href: '/products' },
    ctaSecondary: { label: 'Get in Touch', href: '/contact' },
  },

  stats: [
    { value: '12+', label: 'Products Shipped' },
    { value: '3', label: 'Active Platforms' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '0', label: 'Unnecessary Abstractions' },
  ],

  services: {
    eyebrow: 'What We Do',
    headline: 'Precision over speed.\nQuality over quantity.',
    items: [
      {
        id: 'product-engineering',
        title: 'Product Engineering',
        description:
          'Full-cycle product development from architecture to deployment. We build things that scale.',
        icon: 'cpu',
      },
      {
        id: 'platform-design',
        title: 'Platform Design',
        description:
          'Systems thinking meets interface craft. Platforms your users actually want to use.',
        icon: 'layers',
      },
      {
        id: 'technical-consulting',
        title: 'Technical Consulting',
        description:
          'Architecture reviews, codebase audits, and strategic engineering guidance.',
        icon: 'terminal',
      },
      {
        id: 'open-source',
        title: 'Open Source',
        description:
          'We give back. Several of our core tools are available to the community.',
        icon: 'github',
      },
    ],
  },

  featuredWork: {
    eyebrow: 'Featured Work',
    headline: 'Built to last.',
    items: [
      {
        id: 'kilo',
        title: 'Kilo',
        description: 'A minimalist weight-tracking platform engineered for precision.',
        tag: 'Health & Fitness',
        href: '/products/kilo',
      },
      {
        id: 'lab',
        title: 'Experiments Lab',
        description: 'A living repository of R&D, prototypes, and engineering curiosities.',
        tag: 'Open Research',
        href: '/lab',
      },
    ],
  },
};
