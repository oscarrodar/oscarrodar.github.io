// Single place for identity and links used across the site.
export const SITE = {
  name: 'Oscar Rodriguez',
  title: 'Oscar Rodriguez — Senior Software Engineer',
  description:
    'Senior software engineer at Microsoft AI building accessible, data-rich experiences across Bing, Copilot, and MSN.',
  role: 'Senior Software Engineer · Microsoft AI',
  location: 'Vancouver, BC',
};

export const LINKS = [
  { label: 'GitHub', href: 'https://github.com/oscarrodar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oscar-rodar/' },
] as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Resume', href: '/resume/' },
] as const;
