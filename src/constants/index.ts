import { NavItem } from '../types/navBar';
import banner from '../assets/images/banner.jpg';
import bannerMore from '../assets/images/banner-more.jpg';

// constants.ts
export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const PRODUCTS = 'products';

export const NAV_BAR_ITEMS: NavItem[] = [
  { label: 'Home', destination: '/', isActive: true },
  { label: 'Shop', destination: '/shop', isActive: false },
  { label: 'About Us', destination: '/about', isActive: false },
  { label: 'Contact', destination: '/contact', isActive: false },
];

export const LIST_IMAGES_CAROUSEL = [
  {
    id: 1,
    src: banner,
  },
  {
    id: 2,
    src: bannerMore,
  },
  {
    id: 3,
    src: bannerMore,
  },
];
