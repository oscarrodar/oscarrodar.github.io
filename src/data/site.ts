// Single place for identity and links used across the site.
export const SITE = {
  name: 'Oscar Rodriguez Arroyo',
  title: 'Oscar — Software Engineer',
  description:
    'Senior software engineer building data-rich, accessible web experiences with React and TypeScript.',
  role: 'Senior Software Engineer',
  location: 'Greater Vancouver, BC',
  email: '', // optional: add a public contact email
};

export const LINKS = [
  { label: 'GitHub', href: 'https://github.com/oscarrodar' },
  // TODO: replace with your LinkedIn profile URL
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
] as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Resume', href: '/resume/' },
] as const;
