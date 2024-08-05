import { NavItem } from '../types/navBar';

import bannerImages from '@/assets/images/banner.jpg';
import bannerMoreImages from '@/assets/images/banner-more.jpg';
import bannerClassicImages from '@/assets/images/banner-classic.jpg';

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
  { label: 'Jeans', destination: '/', isActive: false },
];

export const FOOTER_LIST_CATEGORY = [
  { label: 'Men', destination: '/', isActive: false },
  { label: 'Children', destination: '/', isActive: false },
  { label: 'Woman', destination: '/', isActive: false },
];

export const FOOTER_LIST_CONTACT = [
  { label: 'mangcoding@gmail.com', destination: 'mailto:yourname@gmail.com', isActive: false },
];

export const BANNER_IMAGES = [
  { id: 1, src: bannerImages },
  { id: 2, src: bannerMoreImages },
  { id: 3, src: bannerClassicImages },
];

export const BREADCRUMB_ITEMS_CART = [{ label: 'Home', url: '/' }, { label: 'Cart' }];

export const BREADCRUMB_ITEMS_DETAIl = [
  { label: 'Home', url: '/' },
  { label: 'Shop', url: '/shop' },
];

export const BEST_SELLER_CATEGORY = ['T-Shirt', 'Jacket', 'Shirt', 'Jeans'];

export enum MESSAGE_SUCCESS {
  ADD_TO_CART = 'Item added to cart!',
  DELETE_CART = 'Delete item in cart',
}
