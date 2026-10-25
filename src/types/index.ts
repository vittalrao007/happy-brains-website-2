export type PageId =
  | 'home'
  | 'about'
  | 'programs'
  | 'daycare'
  | 'facilities'
  | 'gallery'
  | 'admissions'
  | 'faqs'
  | 'contact'
  | 'privacy';

export interface NavItem {
  id: PageId;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'programs', label: 'Programs', href: '#programs' },
  { id: 'daycare', label: 'Daycare', href: '#daycare' },
  { id: 'facilities', label: 'Facilities', href: '#facilities' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'admissions', label: 'Admissions', href: '#admissions' },
  { id: 'faqs', label: 'FAQs', href: '#faqs' },
  { id: 'contact', label: 'Contact Us', href: '#contact' },
];
