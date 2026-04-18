// Utility for merging class names (lightweight, no external deps needed)
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
