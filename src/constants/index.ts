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
  { label: 'Product', destination: '/', isActive: false },
  { label: 'Categories', destination: '/', isActive: false },
  { label: 'Shop', destination: '/', isActive: false },
  { label: 'Log in', destination: '/', isActive: false },
];

export const FOOTER_LIST_SHOP = [
  { label: 'Jacket', destination: '/', isActive: false },
  { label: 'Shirt', destination: '/', isActive: false },
  { label: 'Jens', destination: '/', isActive: false },
];

export const FOOTER_LIST_CATEGORY = [
  { label: 'Men', destination: '/', isActive: false },
  { label: 'Children', destination: '/', isActive: false },
  { label: 'Woman', destination: '/', isActive: false },
];

export const FOOTER_LIST_CONTACT = [{ label: 'mangcoding@gmail.com', destination: '/', isActive: false }];
