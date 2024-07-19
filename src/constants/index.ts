import { NavItem } from '../types/navBar';

// constants.ts
export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const PRODUCTS = 'products';

export const NAV_BAR_ITEMS: NavItem[] = [
  { label: 'Home', destination: '/', isActive: true },
  { label: 'Shop', destination: '/shop', isActive: false },
  { label: 'About Us', destination: '/about', isActive: false },
  { label: 'Contact', destination: '/contact', isActive: false },
];

export const FOOTER_LIST_HOME = [
  { label: 'Home' },
  { label: 'Product', path: '/' },
  { label: 'Categories', path: '/' },
  { label: 'Shop', path: '/' },
  { label: 'Log in', path: '/' },
];

export const FOOTER_LIST_SHOP = [
  { label: 'Shop' },
  { label: 'T-Shirt' },
  { label: 'Jacket', path: '/' },
  { label: 'Shirt', path: '/' },
  { label: 'Jens', path: '/' },
];

export const FOOTER_LIST_CATEGORY = [
  { label: 'Category' },
  { label: 'Men', path: '/' },
  { label: 'Children', path: '/' },
  { label: 'Woman', path: '/' },
];

export const FOOTER_LIST_CONTACT = [
  { label: 'Contact' },
  { label: 'mangcoding@gmail.com' },
];
