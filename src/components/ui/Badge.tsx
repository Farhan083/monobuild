import { cn } from '@/lib/utils/cn';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'outline';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:  'bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)]',
  primary:  'bg-[rgba(192,193,255,0.1)] text-[var(--color-primary)]',
  success:  'bg-[rgba(100,200,100,0.1)] text-[#6ec86e]',
  warning:  'bg-[rgba(255,200,80,0.1)] text-[#ffc850]',
  error:    'bg-[var(--color-error-container)] text-[var(--color-error)]',
  outline:  'bg-transparent ring-1 ring-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)]',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5',
        'text-[0.6875rem] font-semibold tracking-wide uppercase',
        'whitespace-nowrap',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

// Status badge with dot indicator
type Status = 'live' | 'beta' | 'wip' | 'archived' | 'active' | 'completed' | 'ongoing' | 'shelved';

const statusConfig: Record<Status, { label: string; variant: BadgeVariant }> = {
  live:      { label: 'Live',      variant: 'success' },
  beta:      { label: 'Beta',      variant: 'warning' },
  wip:       { label: 'In Progress', variant: 'primary' },
  archived:  { label: 'Archived',  variant: 'outline' },
  active:    { label: 'Active',    variant: 'success' },
  completed: { label: 'Completed', variant: 'default' },
  ongoing:   { label: 'Ongoing',   variant: 'primary' },
  shelved:   { label: 'Shelved',   variant: 'outline' },
};

export function StatusBadge({ status }: { status: Status }) {
  const config = statusConfig[status] ?? { label: status, variant: 'default' as BadgeVariant };
  return <Badge variant={config.variant}>{config.label}</Badge>;
}
